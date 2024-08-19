declare const acquireVsCodeApi: any;
const vscode = acquireVsCodeApi();

// Function to handle prompt submission
function submitPrompt() {
    const promptInput = document.getElementById('prompt') as HTMLTextAreaElement;
    const prompt = promptInput.value;

    // Send the prompt to the extension's main process
    vscode.postMessage({
        type: 'generateCode',
        prompt: prompt
    });
}

// Add event listener for the button click
document.getElementById('submitBtn')?.addEventListener('click', () => {
    submitPrompt();
});

// Function to handle messages from the extension
window.addEventListener('message', event => {
    const message = event.data; // The JSON data our extension sent

    switch (message.type) {
        case 'codeGenerated':
            // Handle the generated code, e.g., display it in the webview
            displayGeneratedCode(message.code);
            break;
    }
});

function displayGeneratedCode(code: string) {
    const codeContainer = document.getElementById('codeContainer');
    if (codeContainer) {
        codeContainer.innerText = code;
    }
}
