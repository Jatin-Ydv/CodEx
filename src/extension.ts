// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('extension.openPromptWindow', () => {
			const panel = vscode.window.createWebviewPanel(
				'promptPanel',
				'Code Generation Prompt',
				vscode.ViewColumn.Beside,
				{}
			);

			panel.webview.html = getWebviewContent();
		})
	);
}

function getWebviewContent() {
	return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Code Generation Prompt</title>
        </head>
        <body>
            <h1>Enter Your Prompt</h1>
            <textarea id="prompt" style="width:100%; height: 60px;"></textarea>
            <button onclick="submitPrompt()">Generate Code</button>
            <script>
                const vscode = acquireVsCodeApi();

                function submitPrompt() {
                    const prompt = document.getElementById('prompt').value;
                    vscode.postMessage({ prompt });
                }
            </script>
        </body>
        </html>
    `;
}
