// ============================================================
// Copyright (c) 2021 Tatsuya Nakamori. All rights reserved.
// See LICENSE in the project root for license information.
// ============================================================
import * as vscode from 'vscode';
import * as util from './util';
import * as i18n from './i18n';


export let headingCompletionTrigger:boolean = false;
export let listCompletionTrigger:boolean = false;
export let tableCompletionTrigger:boolean = false;


export function setHeadingCompletionTrigger(value:boolean) {
    headingCompletionTrigger = value;
}

export function setListCompletionTrigger(value:boolean) {
    listCompletionTrigger = value;
}

export function setTableCompletionTrigger(value:boolean) {
    tableCompletionTrigger = value;
}

export function heading(
    document: vscode.TextDocument,
    position: vscode.Position,
    context: vscode.CompletionContext):(vscode.CompletionItem[]|undefined) {

    let triggeredChar = context.triggerCharacter;
    if (!(triggeredChar || headingCompletionTrigger)) {
        return
    }
    // triggeredChar > remapping
    if (triggeredChar == 'h' || triggeredChar == '1' ) {
        triggeredChar = '#';
    } else if (triggeredChar == '2' ) {
        triggeredChar = '*';
    } else if (triggeredChar == '3' ) {
        triggeredChar = '=';
    } else if (triggeredChar == '4' ) {
        triggeredChar = '-';
    } else if (triggeredChar == '5' ) {
        triggeredChar = '^';
    } else if (triggeredChar == '6' ) {
        triggeredChar = '"';
    }

    const existingText = document.lineAt(position.line).text;
    if (!existingText.match(/^([-=#^*"]|h[1-6]?)+$/)) {
        return
    }

    let completionItemList:vscode.CompletionItem[] = [];
    const headingInfoList = [
        ['Heading <h1> [#####]', '##### (<h1>)', '#'],
        ['Heading <h2> [*****]', '***** (<h2>)', '*'],
        ['Heading <h3> [=====]', '===== (<h3>)', '='],
        ['Heading <h4> [-----]', '----- (<h4>)', '-'],
        ['Heading <h5> [^^^^^]', '^^^^^ (<h5>)', '^'],
        ['Heading <h6> ["""""]', '""""" (<h6>)', '"']
    ]

    for (let i = 0; i < headingInfoList.length; i++) {
        const _headingInfo = headingInfoList[i];
        const _label       = _headingInfo[0];
        const _detail      = _headingInfo[1];
        const _triggerChar = _headingInfo[2];

        const completion = new vscode.CompletionItem(_label);
        completion.kind = vscode.CompletionItemKind.Module;
        completion.detail = _detail;
        completion.documentation =
            new vscode.MarkdownString(
                `${i18n.localize("resttext.completion.heading.detail")} \`\`${_detail}\`\``
            );
        completion.insertText = "";
        completion.command = {
            title: i18n.localize("resttext.heading.add.title"),
            command: 'resttext.heading.add',
            arguments: [_triggerChar]
        };

        if (triggeredChar == _triggerChar || (!triggeredChar && i == 0)) {
            completion.preselect = true;
        }

        completionItemList.push(completion);
    }

    return completionItemList;
}

export function list(
    document: vscode.TextDocument,
    position: vscode.Position,
    context: vscode.CompletionContext):(vscode.CompletionItem[]|undefined) {

    const triggeredChar = context.triggerCharacter;
    const tableIsSelected = util.tableIsSelected();
    if (!(triggeredChar || listCompletionTrigger) || tableIsSelected) {
        return
    }

    let completionItemList:vscode.CompletionItem[] = [];
    const listInfoList = [
        ["List Numbered [1. ]",   "1. ", "1"],
        ["List Numbered [#. ]",   "#. ", "#"],
        ["List Unnumbered [* ]",  "* ",  "*"]
    ]

    for (let i = 0; i < listInfoList.length; i++) {
        const _listInfo = listInfoList[i];
        const _label       = _listInfo[0];
        const _detail      = _listInfo[1];
        const _triggerChar = _listInfo[2];

        const completion = new vscode.CompletionItem(_label);
        completion.kind = vscode.CompletionItemKind.Module;
        completion.detail = _detail;
        completion.sortText = `list_${i}`;
        completion.documentation =
            new vscode.MarkdownString(
                `${i18n.localize("resttext.completion.list.detail")} \`\`${_detail}\`\``
            );
        completion.insertText = "";

        completion.command = {
            title: i18n.localize("resttext.list.add.title"),
            command: 'resttext.list.add',
            arguments: [_triggerChar]
        };

        if (triggeredChar == _triggerChar || (!triggeredChar && i == 0)) {
            completion.preselect = true;
        }
        completionItemList.push(completion);
    }
    return completionItemList;
}

export function table(
    document: vscode.TextDocument,
    position: vscode.Position,
    context: vscode.CompletionContext):(vscode.CompletionItem[]|undefined) {

    const triggeredChar = context.triggerCharacter;
    if (!(triggeredChar || tableCompletionTrigger)) {
        return
    }

    const lineText = document.lineAt(position.line).text;
    const regRowColumn = /^(?<row>\d+)(?<x>x)(?<column>\d+)$/
    const match = regRowColumn.exec(lineText);
    if (!match?.groups) { return }

    const row    = match.groups["row"];
    const x      = match.groups["x"];
    const column = match.groups["column"];
    if (!(row && x && column)) { return }

    let completionItemList:vscode.CompletionItem[] = [];
    const listInfoList = [
        [`${row} x ${column} (Table with header)`, `[Header] + [${row} x ${column}]`, "true"],
        [`${row} x ${column} (Table without header)`, `[${row} x ${column}]`, "false"]
    ]

    for (let i = 0; i < listInfoList.length; i++) {
        const _label  = listInfoList[i][0];
        const _detail = listInfoList[i][0];
        const _doc    = listInfoList[i][1];
        if (listInfoList[i][2] == "true") {
            var _header = true;
        } else {
            var _header = false;
        }

        const completion = new vscode.CompletionItem(_label);
        completion.kind = vscode.CompletionItemKind.Module;
        completion.detail = _detail;
        completion.documentation =
            new vscode.MarkdownString(
                `${i18n.localize("resttext.completion.table.detail")} \`\`${_doc}\`\``
            );
        completion.insertText = "";
        completion.command = {
            title: i18n.localize("resttext.table.create.title"),
            command: 'resttext.table.createGrid',
            arguments: [Number(row), Number(column), _header]
        };

        if (i == 0) {
            completion.preselect = true;
        }

        completionItemList.push(completion);
    }

    return completionItemList;
}
