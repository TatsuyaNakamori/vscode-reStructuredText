// ============================================================
// Copyright (c) 2021 Tatsuya Nakamori. All rights reserved.
// See LICENSE in the project root for license information.
// ============================================================
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "resttext" is now active!');
	let disposable = vscode.commands.registerCommand('resttext.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from reStructuredText!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
