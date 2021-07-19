// ============================================================
// Copyright (c) 2021 Tatsuya Nakamori. All rights reserved.
// See LICENSE in the project root for license information.
// ============================================================
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as util from './util';
import * as sphinxTaskProvider from './sphinxTaskProvider';
import * as i18n from './i18n';


let previewType: "HTML_USER" | "HTML_BUILTIN";
let currentPanel: vscode.WebviewPanel | undefined;
let currentDocumentUri: vscode.Uri | undefined;
let extensionContext: vscode.ExtensionContext | undefined;
let eventDisposableList:(vscode.Disposable)[];


export function showWebView(context: vscode.ExtensionContext, type: typeof previewType) {
    previewType = type;
    extensionContext = context;

    if (currentPanel) {
        if (currentPanel.viewType == previewType) {
            currentPanel.reveal(currentPanel.viewColumn);
        } else {
            currentPanel.dispose();
            showWebView(context, previewType);
        }
    } else {
        // Create Webview Panel
        let localResourceRoots = [extensionContext.extensionUri]
        const workFolderUri = util.getOpenedWorkfolderUri();
        if (workFolderUri) {
            localResourceRoots.push(workFolderUri);
        }

        currentPanel = vscode.window.createWebviewPanel(
            previewType,
            `reStructuredText ${previewType}`,
            {preserveFocus: true, viewColumn: vscode.ViewColumn.Two},
            {enableScripts: true, enableFindWidget: true, localResourceRoots: localResourceRoots}
        );

        // Create HTML
        if (!vscode.window.activeTextEditor) { return }
        const textDocument = vscode.window.activeTextEditor.document;
        currentDocumentUri = textDocument.uri;

        vscode.tasks.fetchTasks().then(_execBuildTask);

        // Reset when the current panel is closed
        currentPanel.onDidDispose(
            () => {
                currentPanel = undefined;
                currentDocumentUri = undefined;
                extensionContext = undefined;

                for (const disposable of eventDisposableList) {
                    disposable.dispose();
                }
            },
            null,
            context.subscriptions
        );

        // Event Settings
        eventDisposableList = [
            vscode.workspace.onDidSaveTextDocument(onDidSaveTextDocument),
            vscode.tasks.onDidEndTask(onDidEndTask),
            vscode.window.onDidChangeActiveTextEditor(onDidChangeActiveTextEditor),
        ]
    }
}

export function onDidChangeActiveTextEditor(event: vscode.TextEditor | undefined) {
    if (!(event && event.document.languageId == "restructuredtext")) { return }

    if (currentDocumentUri?.path != event.document.uri.path) {
        currentDocumentUri = event.document.uri;

        if (currentPanel) {
            _generateWebviewHTML(currentPanel.webview, event.document).then((html: string) => {
                if (currentPanel) {
                    currentPanel.webview.html = html;
                }
            });
        }
    }
}

export function onDidSaveTextDocument(event: vscode.TextDocument | undefined) {
    if (!(event && event.languageId == "restructuredtext")) { return }

    currentDocumentUri = event.uri;
    vscode.tasks.fetchTasks().then(_execBuildTask);
}

export function onDidEndTask(event: vscode.TaskEndEvent) {
    const confKillTerminal = vscode.workspace.getConfiguration().get("resttext.previewHTML.endTask.killTerminal");
    if (confKillTerminal === undefined) {
        console.log(i18n.localize("resttext.sphinx.getconfig.error"));
    }

    if (confKillTerminal) {
        vscode.commands.executeCommand("workbench.action.terminal.kill");
        vscode.commands.executeCommand("workbench.action.closePanel");
    }

    const regHTML = /^(html)/;
    const buildSourceName = i18n.localize("resttext.sphinxtask.build.source");
    const taskSource = event.execution.task.source;
    const taskName = event.execution.task.name;

    if (vscode.window.activeTextEditor && currentPanel && taskSource == buildSourceName && regHTML.exec(taskName)) {
        const textDocument = vscode.window.activeTextEditor.document;
        _generateWebviewHTML(currentPanel.webview, textDocument).then((html: string) => {
            if (currentPanel) {
                currentPanel.webview.html = html;
            }
        });
    }
}

function _execBuildTask(_tasks: vscode.Task[]) {
    for (const task of _tasks) {
        const taskDef = task.definition;

        if (taskDef["type"] == "sphinx" &&
            ((previewType == "HTML_BUILTIN" && taskDef["label"] == "html [Built-in build]") ||
             (previewType == "HTML_USER"    && taskDef["label"] == "html [User env build]"))) {

            task.presentationOptions = {showReuseMessage: false}
            vscode.tasks.executeTask(task);
            return
        }
    }
}

async function _generateWebviewHTML(webview: vscode.Webview, textDocument: vscode.TextDocument): Promise<string> {
    const workspaceFolder = util.getOpenedWorkfolderUri();
    if (!workspaceFolder) {
        const message = i18n.localize("resttext.html.workFolderError");
        return _templateErrorHTML(message)
    }

    const makefileInfo = sphinxTaskProvider._getMakefileInfo(workspaceFolder);
    if (!makefileInfo) {
        const message = i18n.localize("resttext.html.makefileError");
        return _templateErrorHTML(message)
    }
    console.log(makefileInfo);


    let htmlStr:string = "";
    const builtHtmlFolder = path.join(workspaceFolder.fsPath, makefileInfo["BUILDDIR"], "html");
    console.log(builtHtmlFolder);
    if (!fs.existsSync(builtHtmlFolder)) {
        const message = i18n.localize("resttext.html.htmlFolderError") + `${builtHtmlFolder}`;
        return _templateErrorHTML(message)
    }

    const sourceDir = path.join(workspaceFolder.fsPath, makefileInfo["SOURCEDIR"]);
    const docRelPath = path.relative(sourceDir, textDocument.uri.fsPath);

    let buildHtmlFile = path.join(builtHtmlFolder, docRelPath);
    buildHtmlFile = buildHtmlFile.replace(".rst", ".html");
    if (!fs.existsSync(buildHtmlFile)) {
        const message = i18n.localize("resttext.html.htmlFileError") + `${buildHtmlFile}`;
        return _templateErrorHTML(message)
    }
    const contents = fs.readFileSync(buildHtmlFile,'utf8');
    if (!contents) {
        const message = i18n.localize("resttext.html.readFileError") + `${buildHtmlFile}`;
        return _templateErrorHTML(message)
    }

    htmlStr = _toWebviewFormats(webview, contents, buildHtmlFile);
    return htmlStr
}

function _getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function _templateErrorHTML(message:string=""): string {
    return `<!DOCTYPE html>
            <html>
            <head>
                <title>reStructuredText Error</title>
                <meta charset="UTF-8">
            </head>
            <body>
                <h1>Error</h1>
                <div>${message}</div>
            </body>
            </html>`
}

function _toWebviewFormats(webview: vscode.Webview, contents:string, buildHtmlFile:string): string {
    const nonce = _getNonce();
    const meta = `<meta http-equiv="Content-Security-Policy" content="default-src 'none';
                  style-src ${webview.cspSource}; img-src ${webview.cspSource} https:; script-src 'nonce-${nonce}' ${webview.cspSource};">`

    const htmlDir = path.dirname(buildHtmlFile);
    const htmlDirUri = vscode.Uri.file(htmlDir);

    const regHrefStr      = '(<.*? href="(?<!http)(?<href>[-\\w./]*)")';
    const regScriptTagStr = '(<script .*?src="(?<scriptPath>[-\\w./]*)")';
    const regImgTagStr    = '(<img .*?(src="(?<!http)(?<srcPath>[-\\w./\\\\]*)"))';
    const regUrlTags = new RegExp(`${regHrefStr}|${regScriptTagStr}|${regImgTagStr}`, 'g');

    const regHeadTag = /<head>/;

    let webviewContents = "";
    const contentsLine = contents.split(/\r\n|\r|\n/);
    for (let i = 0; i < contentsLine.length; i++) {
        let line = contentsLine[i];

        const headMatch = regHeadTag.exec(line);
        if (headMatch) {
            webviewContents = `${webviewContents}\n${line}\n${meta}`;
            continue
        }

        let match;
        while (match = regUrlTags.exec(line)) {
            if (!match?.groups) { continue }

            const hrefPath   = match.groups["href"];
            const scriptPath = match.groups["scriptPath"];
            const path = (hrefPath || scriptPath)
            if (path) {
                const linkUri = webview.asWebviewUri(vscode.Uri.joinPath(htmlDirUri, path));
                line = line.replace(path, linkUri.toString());

            } else {
                const srcPath = match.groups["srcPath"];
                if (srcPath) {
                    const srcWebviewUri = webview.asWebviewUri(vscode.Uri.joinPath(htmlDirUri, srcPath));
                    const regSrcPath = new RegExp(`${srcPath}`, 'g');
                    line = line.replace(regSrcPath, srcWebviewUri.toString());
                }
            }
        }

        webviewContents = `${webviewContents}\n${line}`;
    }
    return webviewContents
}
