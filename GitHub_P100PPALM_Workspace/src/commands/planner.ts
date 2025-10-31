import * as vscode from "vscode";

export function register(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand("extension.createPlannerTask", async () => {
    // Prompt user for Planner task details
    const title = await vscode.window.showInputBox({ prompt: "Enter Planner Task Title" });
    if (!title) {
      vscode.window.showWarningMessage("Task creation cancelled: No title provided.");
      return;
    }
    // Simulate Planner API call (replace with real API integration)
    vscode.window.showInformationMessage(`Planner task '${title}' created! (Simulated)`);
  });
  context.subscriptions.push(disposable);
}
