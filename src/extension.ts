// ============================================================
// Copyright (c) 2021 Tatsuya Nakamori. All rights reserved.
// See LICENSE in the project root for license information.
// ============================================================
import * as vscode from 'vscode';
import * as os from 'os';
import * as commands from './commands';
import * as htmlPreview from './htmlPreview';
import * as listEditor from './listEditor';
import * as tableEditor from './tableEditor';
import * as setContext from './setContext';
import * as completionItemProvider from './completionItemProvider';
import { SphinxTaskProvider } from './sphinxTaskProvider';


let sphinxTaskDisposable: (vscode.Disposable|undefined);

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "vscode-reStructuredText" is now active!');
    console.log('os.platform:', os.platform());

    // Run it once the first time.
    setContext.setContext();
    vscode.workspace.onDidCloseTextDocument((event) => {
        // console.log("onDidChangeActiveTextEditor");
        setContext.setContext();
    })
    vscode.window.onDidChangeActiveTextEditor((event) => {
        // console.log("onDidChangeActiveTextEditor");
        setContext.setContext();
    })
    vscode.window.onDidChangeTextEditorSelection((event) => {
        // console.log("onDidChangeTextEditorSelection");
        setContext.setContext();
    })

    // ==========================
    // Register Commands
    // ==========================
    // Preview HTML (HTML Build is only supported on Windows.)
    context.subscriptions.push(
        vscode.commands.registerCommand('resttext.previewHTMLUserBuild', () => {
            htmlPreview.showWebView(context, "HTML_USER");
        })
    );
    if (os.platform() == "win32") {
        context.subscriptions.push(
            vscode.commands.registerCommand('resttext.previewHTMLHelperBuild', () => {
                htmlPreview.showWebView(context, "HTML_BUILTIN");
            })
        );
    }

    // Editor
    context.subscriptions.push(
        vscode.commands.registerCommand('resttext.insertRelPath', (pathInfo) => {
            commands.insertRelPath(pathInfo.fsPath);
    }));
    context.subscriptions.push(
        vscode.commands.registerCommand('resttext.bold', () => {
            commands.bold();
    }));
    context.subscriptions.push(
        vscode.commands.registerCommand('resttext.italic', () => {
            commands.italic();
    }));
    context.subscriptions.push(
        vscode.commands.registerCommand('resttext.inlineRaw', () => {
            commands.inlineRaw();
    }));
    context.subscriptions.push(
        vscode.commands.registerCommand('resttext.list', () => {
            completionItemProvider.setListCompletionTrigger(true);
            commands.list();
    }));
    context.subscriptions.push(
        vscode.commands.registerCommand('resttext.list.add', (_triggeredChar:string) => {
            listEditor.addListModifier(_triggeredChar);
    }));
    context.subscriptions.push(
        vscode.commands.registerCommand('resttext.heading', () => {
            completionItemProvider.setHeadingCompletionTrigger(true);
            commands.heading();
    }));
    context.subscriptions.push(
        vscode.commands.registerCommand('resttext.heading.add', (_triggeredChar:string) => {
            commands.addHeading(_triggeredChar);
    }));
    context.subscriptions.push(
        vscode.commands.registerCommand('resttext.table.createGrid', (row:number, column:number, header:boolean) => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) { return }
            const table = new tableEditor.TableEditor(editor);
            table.createEmptyGrid(row, column, header);
    }));
    context.subscriptions.push(
        vscode.commands.registerCommand('resttext.table.dataToTable', () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) { return }
            const table = new tableEditor.TableEditor(editor);
            table.dataToTable();
    }));
    context.subscriptions.push(
        vscode.commands.registerCommand('resttext.key.enter', () => {
            commands.key_enter();
    }));
    context.subscriptions.push(
        vscode.commands.registerCommand('resttext.key.shift.enter', () => {
            commands.key_shift_enter();
    }));
    context.subscriptions.push(
        vscode.commands.registerCommand('resttext.key.alt.enter', () => {
            commands.key_alt_enter();
    }));
    context.subscriptions.push(
        vscode.commands.registerCommand('resttext.key.tab', () => {
            commands.key_tab();
    }));
    context.subscriptions.push(
        vscode.commands.registerCommand('resttext.key.shift.tab', () => {
            commands.key_shift_tab();
    }));

    // ==================================
    // Register Completion Item Provider
    // ==================================
    // Heading
    context.subscriptions.push(
        vscode.languages.registerCompletionItemProvider(
            'restructuredtext',
            {
                provideCompletionItems(document, position, token, context) {
                    const headingCompletionItems =
                        completionItemProvider.heading(document, position, context);
                    completionItemProvider.setHeadingCompletionTrigger(false);
                    return headingCompletionItems;
                }
            },
            ...['#', '*', '=', '-', '^', '"', '1', '2', '3', '4', '5', '6', 'h']
        )
    );
    // List
    context.subscriptions.push(
        vscode.languages.registerCompletionItemProvider(
            'restructuredtext',
            {
                provideCompletionItems(document, position, token, context) {
                    const listCompletionItems =
                        completionItemProvider.list(document, position, context);
                    completionItemProvider.setListCompletionTrigger(false);
                    return listCompletionItems;
                }
            },
            ...[".", "1", "#", "*"]
        )
    );
    // Table
    context.subscriptions.push(
        vscode.languages.registerCompletionItemProvider(
            'restructuredtext',
            {
                provideCompletionItems(document, position, token, context) {
                    const tableCompletionItems =
                        completionItemProvider.table(document, position, context);
                    completionItemProvider.setTableCompletionTrigger(false);
                    return tableCompletionItems;
                }
            },
            ...["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        )
    );

    // ==================================
    // Register Task
    // ==================================
    sphinxTaskDisposable = vscode.tasks.registerTaskProvider(
        SphinxTaskProvider.TASK_TYPE, new SphinxTaskProvider()
    );
}

export function deactivate() {
    if (sphinxTaskDisposable) {
        sphinxTaskDisposable.dispose();
    }
}
