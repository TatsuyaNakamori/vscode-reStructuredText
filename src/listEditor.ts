// ============================================================
// Copyright (c) 2021 Tatsuya Nakamori. All rights reserved.
// See LICENSE in the project root for license information.
// ============================================================
import * as vscode from 'vscode';


const REG_LIST_LINE = /^(?<indent>\s*)(?<symbol>(\(?([a-zA-Z0-9]+|#)(\.|\))|[-+*]) )?(?<word>.*)/;
const REG_EMPTY_LINE = /^\s*$/;
const REG_COMPLETION_CURSOR_BEFORE = /^(?<indent>\s*)(?<word>[^\s].*)?/;
const REG_CURSOR_AFTER_HAS_SYMBOL = /^(?<symbol>(\d+\. )|(#\. )|(\* ))(?<word>[^\s].*)?/;


interface ListInfo {
    isBlank: boolean,
    line: number,
    indent: number,
    prevIndentLevel: ListInfo|undefined,
    symbol: string
}

interface ListBlockInfo {
    startLine: number,
    endLine: number,
    zeroDepthFirstCount: number,
    listInfo: ListInfo[]
}

export async function getListBlockInfo(
    editor?:vscode.TextEditor, curSelection?:vscode.Selection):Promise<ListBlockInfo|undefined> {

    if (!editor) {
        editor = vscode.window.activeTextEditor;
        if (!editor) { return }
    }
    if (!curSelection) {
        curSelection = editor.selection;
    }

    var listBlockInfo:ListBlockInfo = {
        startLine: 0,
        endLine: 0,
        zeroDepthFirstCount: 0,
        listInfo: []
    };
    let holdListInfo:ListInfo[] = [];
    let inTheListBlock:boolean = false;

    const curLine = curSelection.start.line;
    let prevIndentLevel:ListInfo|undefined;
    const allText = editor.document.getText();
    const allTextSplit = allText.split(/\r\n|\r|\n/);

    for (let i = 0; i < allTextSplit.length; i++) {
        const textLine = allTextSplit[i];

        let isListLine:boolean = false;
        let indent:string = "";
        let symbol:string = "";
        let listMatch = REG_LIST_LINE.exec(textLine);
        if (listMatch?.groups) {
            indent = listMatch.groups["indent"];
            symbol = listMatch.groups["symbol"];
        }
        if (symbol) {
            isListLine = true;
        }

        if (!inTheListBlock && isListLine) {
            holdListInfo = [];
            inTheListBlock = true;

            listBlockInfo["startLine"] = i;
            listBlockInfo["listInfo"] = [
                {
                    isBlank: false,
                    line: i,
                    indent: Number(indent.length),
                    prevIndentLevel: undefined,
                    symbol: symbol
                }
            ];

            const match = symbol.match(/(\d+)/);
            if (match) {
                listBlockInfo["zeroDepthFirstCount"] = Number(match[1]);
            }

        } else if (inTheListBlock && isListLine) {
            listBlockInfo["endLine"] = i;

            for (const listInfo of holdListInfo) {
                listBlockInfo["listInfo"].push(listInfo);
            }
            holdListInfo = [];

            const lastIndex    = listBlockInfo["listInfo"].length - 1;
            const prevListInfo = listBlockInfo["listInfo"][lastIndex];
            const prevIndent   = prevListInfo.indent;

            if (indent.length != prevIndent) {
                prevIndentLevel = prevListInfo;
            }

            listBlockInfo["listInfo"].push(
                {
                    isBlank: false,
                    line: i,
                    indent: indent.length,
                    prevIndentLevel: prevIndentLevel,
                    symbol: symbol
                }
            );

            const match = symbol.match(/(\d+)/);
            if (!indent.length && match && (listBlockInfo["zeroDepthFirstCount"] == 0)) {
                listBlockInfo["zeroDepthFirstCount"] = Number(match[1]);
            }

        } else if (inTheListBlock && !isListLine) {
            var emptyMatch = REG_EMPTY_LINE.exec(textLine);
            if (emptyMatch) {
                if (!holdListInfo.length) {
                    const lastIndex = listBlockInfo["listInfo"].length - 1;
                    const prevIndent = listBlockInfo["listInfo"][lastIndex].indent;
                    holdListInfo.push(
                        {
                            isBlank: true,
                            line: i,
                            indent: prevIndent,
                            prevIndentLevel: prevIndentLevel,
                            symbol: ""
                        }
                    );
                } else {
                    const lastIndex = holdListInfo.length - 1;
                    const prevIndent = holdListInfo[lastIndex].indent;
                    holdListInfo.push(
                        {
                            isBlank: true,
                            line: i,
                            indent: prevIndent,
                            prevIndentLevel: prevIndentLevel,
                            symbol: ""
                        }
                    );
                }
            } else {
                inTheListBlock = false;

                if (curLine >= listBlockInfo["startLine"] &&
                    curLine <= listBlockInfo["endLine"]) {
                    break
                }
            }
        }
    }
    return listBlockInfo
}

export async function renumbering() {
    interface ListCounter {
        [indentDepth:number]: number  // e.g. {0: 2, 3: 1} (indentDepth: count)
    }

    const editor = vscode.window.activeTextEditor;
    if (!editor) { return }

    const listBlockInfo = await getListBlockInfo(editor);
    if (!listBlockInfo) { return }

    const zeroDepthFirstCount = listBlockInfo["zeroDepthFirstCount"];
    let listCounter:ListCounter = {
        0: zeroDepthFirstCount? zeroDepthFirstCount-1: 0
    };
    let curIndent:number = 0;
    for (let i = 0; i < listBlockInfo.listInfo.length; i++) {
        const listInfo = listBlockInfo.listInfo[i];
        if (listInfo.isBlank) { continue }

        const indent = listInfo.indent;
        if (indent > curIndent) {
            listCounter[indent] = 0;
        }

        let count = listCounter[indent];
        if (listInfo.symbol.match(/\d+/)) {
            if (count) {
                count += 1;
            } else {
                count = 1;
            }

            const line = listInfo.line;
            const textLine = editor.document.lineAt(line);
            const range = textLine.range;
            const text = textLine.text;
            const newText = text.replace(/\d+/, String(count));

            const editOptions = {undoStopBefore: false, undoStopAfter: false}
            await editor.edit((editBuilder) => {
                editBuilder.replace(range, newText);
            }, editOptions)
        }

        curIndent = indent;
        listCounter[indent] = count;
    }
}

export async function addLine(direction:("prev"|"next"), editor?:vscode.TextEditor) {
    if (!editor) {
        editor = vscode.window.activeTextEditor;
        if (!editor) { return }
    }

    const selection = editor.selection;
    const curLine = selection.start.line;
    const curLineRange = editor.document.lineAt(curLine).range;
    const curLineText = editor.document.getText(curLineRange);

    if (!curLine) {
        var prevLine = 0;
    } else {
        var prevLine = curLine - 1;
    }
    const prevLineRange = editor.document.lineAt(prevLine).range;

    var match = REG_LIST_LINE.exec(curLineText);
    if (!match?.groups) { return }

    const indent = match.groups["indent"];
    const symbol = match.groups["symbol"];
    const word = match.groups["word"];
    if (!symbol) { return }

    const regNumber = /\d+/;
    var match = regNumber.exec(symbol);
    if (match) {
        if (direction == "prev") {
            var addNum = -1;
        } else {
            var addNum = 1;
        }
        const newNumber = Number(match[0]) + addNum;
        var newSymbol = symbol.replace(regNumber, String(newNumber));
    } else {
        var newSymbol = symbol;
    }

    // Generate New Text
    let newText:string;
    if (word) {
        if (direction == "prev" && !curLine) {
            newText = `${indent}${newSymbol}\n`;
        } else {
            newText = `\n${indent}${newSymbol}`;
        }
    } else {
        newText = "";
    }
    // Create a range to replace
    let replaceRange:vscode.Position|vscode.Range;
    if (word) {
        if (direction == "prev") {
            if (!curLine) {
                replaceRange = curLineRange.start;
            } else {
                replaceRange = prevLineRange.end;
            }
        } else {
            const startPos = selection.start;
            const endPos = curLineRange.end;
            // replaceRange = new vscode.Range(startPos, endPos);
            replaceRange = curLineRange.end;
        }
    } else {
        replaceRange = curLineRange;
    }

    const editOptions = {undoStopBefore: false, undoStopAfter: false};
    await editor.edit(editBuilder => {
        editBuilder.replace(replaceRange, newText);
    }, editOptions);

    // re-select
    if (direction == "prev") {
        var newLineRange = editor.document.lineAt(curLine).range;
        editor.selection = new vscode.Selection(newLineRange.end, newLineRange.end);
    } else if (word) {
        var newLineRange = editor.document.lineAt(curLine+1).range;
        editor.selection = new vscode.Selection(newLineRange.end, newLineRange.end);
    }

    renumbering();
}

export async function indentAction(action:("curLine"|"aboveLine"), editor?:vscode.TextEditor) {
    if (!editor) {
        editor = vscode.window.activeTextEditor;
        if (!editor) { return }
    }

    const selection = editor.selection;
    const curLine = selection.start.line;

    // Get Symbol Length
    let text:string = "";
    if (action == "curLine") {
        const lineRange = editor.document.lineAt(curLine).range;
        text = editor.document.getText(lineRange);
    } else if (action == "aboveLine") {
        const lineRange = editor.document.lineAt(curLine-1).range;
        text = editor.document.getText(lineRange);
    }

    var match = REG_LIST_LINE.exec(text);
    if (!match?.groups) { return }
    const symbol = match.groups["symbol"];
    if (!symbol) { return }

    // Generate newText and Range
    let newText:string = `\n${" ".repeat(symbol.length)}`;
    let replaceRange:(vscode.Position|vscode.Range);
    replaceRange = new vscode.Position(curLine, 0);

    const editOptions = {undoStopBefore: false, undoStopAfter: false};
    await editor.edit(editBuilder => {
        editBuilder.replace(replaceRange, newText);
    }, editOptions);

    const newSelection = editor.selection;
    const newLine      = newSelection.end.line;
    const lineRange    = editor.document.lineAt(newLine).range;
    const newLineText  = editor.document.getText(lineRange);

    var match = REG_LIST_LINE.exec(newLineText);
    if (!match?.groups) { return }
    var newIndent = match.groups["indent"];
    var newSymbol = match.groups["symbol"];

    var newIndentLength = 0;
    if (newIndent) {
        var newIndentLength = newIndent.length;
    }
    var newSymbolLength = 0;
    if (newSymbol) {
        var newSymbolLength = newSymbol.length;
    }

    const newCharacterPos = newIndentLength + newSymbolLength;
    const newPos = new vscode.Position(newSelection.end.line, newCharacterPos);
    editor.selection = new vscode.Selection(newPos, newPos);

    await renumbering();
}

export async function outdentAction(editor?:vscode.TextEditor) {
    if (!editor) {
        editor = vscode.window.activeTextEditor;
        if (!editor) { return }
    }

    const listBlockInfo = await getListBlockInfo(editor);
    if (!listBlockInfo) { return }
    const listInfo = listBlockInfo.listInfo;

    const selection     = editor.selection;
    const curLine       = selection.start.line;
    const listInfoIndex = curLine - listBlockInfo.startLine;
    const curIndent     = listInfo[listInfoIndex].indent
    if (!curIndent) { return }

    let newDepth:number = 0;
    let prevListInfo:(ListInfo|undefined) = listInfo[listInfoIndex].prevIndentLevel;
    while (prevListInfo) {
        const prevIndent = prevListInfo.indent;
        if (prevIndent < curIndent) {
            newDepth = prevIndent;
            break
        }
        prevListInfo = prevListInfo.prevIndentLevel;
    }

    const curLineRange = editor.document.lineAt(curLine).range;
    const curLineText = editor.document.getText(curLineRange);

    const match = REG_LIST_LINE.exec(curLineText);
    if (!match?.groups) { return }
    const symbol = match.groups["symbol"];
    const word = match.groups["word"];
    if (!symbol) { return }

    const newText = `\n${" ".repeat(newDepth)}${symbol}${word}`;

    let replaceRange = curLineRange;
    if (curLine > 0) {
        const aboveLineRange = editor.document.lineAt(curLine-1).range;
        const aboveLineText = editor.document.getText(aboveLineRange);
        const match = aboveLineText.match(/^\s*$/);
        if (match) {
            const addStartPos = new vscode.Position(curLine-1, 0);
            replaceRange = new vscode.Range(addStartPos, curLineRange.end);
        }
    }

    const editOptions = {undoStopBefore: false, undoStopAfter: false};
    await editor.edit(editBuilder => {
        editBuilder.replace(replaceRange, newText);
    }, editOptions);

    renumbering();
}

export async function addListModifier(triggerChar:string) {
    const editor = vscode.window.activeTextEditor;
    if (!editor) { return }

    const document  = editor.document;
    const selection = editor.selection;
    const curLine   = selection.start.line;
    const lineRange = document.lineAt(curLine).range;

    const firstChrPosition = new vscode.Position(curLine, 0);
    const lastChrPosition = new vscode.Position(curLine, lineRange.end.character);
    const beforeRange = new vscode.Range(firstChrPosition, selection.start);
    const afterRange = new vscode.Range(selection.start, lastChrPosition);

    const cursorBeforeText = document.getText(beforeRange);
    const cursorAfterText = document.getText(afterRange);

    let indent = "";
    let word = "";

    const beforeMatch = REG_COMPLETION_CURSOR_BEFORE.exec(cursorBeforeText);
    if (beforeMatch?.groups) {
        indent = beforeMatch.groups["indent"];
    }

    const afterMatch = REG_CURSOR_AFTER_HAS_SYMBOL.exec(cursorAfterText);
    if (afterMatch?.groups) {
        word = afterMatch.groups["word"];
        if (!word) {
            word = "";
        }
    } else {
        word = cursorAfterText.trim();
    }

    if (triggerChar == "*") {
        var insertText = `${indent}${triggerChar} ${word}`;
    } else {
        var insertText = `${indent}${triggerChar}. ${word}`;
    }

    const editOptions = {undoStopBefore: false, undoStopAfter: false};
    await editor.edit(editBuilder => {
        editBuilder.replace(lineRange, insertText);
    }, editOptions);

    let newSelections:vscode.Selection[] = [];
    const newLineRange = document.lineAt(curLine).range;

    const newLastChrPosition = new vscode.Selection(newLineRange.end, newLineRange.end);
    newSelections.push(newLastChrPosition);
    editor.selections = newSelections;

    renumbering();
}

export function moveSelectionPositionForCompletion() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) { return }

    let newSelections:vscode.Selection[] = [];
    const selections = editor.selections;
    for (let i = 0; i < selections.length; i++) {
        const selection = selections[i];

        const curLine      = selection.start.line;
        const curLineRange = editor.document.lineAt(curLine).range;
        const curLineText  = editor.document.getText(curLineRange);

        const match = REG_LIST_LINE.exec(curLineText);
        if (!match?.groups) { return }

        const indent = match.groups["indent"];
        const firstWordPos = new vscode.Position(curLine, indent.length);
        newSelections.push(
            new vscode.Selection(firstWordPos, firstWordPos)
        )
    }
    editor.selections = newSelections;
}
