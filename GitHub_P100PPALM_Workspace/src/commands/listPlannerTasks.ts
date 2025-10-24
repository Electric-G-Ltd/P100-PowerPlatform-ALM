import * as vscode from 'vscode';
import { getGraphClient } from '../auth/graphAuth';
import { config } from '../config';

export function register(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('extension.listPlannerTasks', async () => {
    try {
      const client = getGraphClient();
      // Fetch Planner tasks for the authenticated user
      const me = await client.api('/me').get();
      const plans = await client.api('/me/planner/plans').get();
      let message = '';
      if (plans.value && plans.value.length > 0) {
        for (const plan of plans.value) {
          const tasks = await client.api(`/planner/plans/${plan.id}/tasks`).get();
          message += `Plan: ${plan.title}\n`;
          if (tasks.value && tasks.value.length > 0) {
            message += tasks.value.map((task: any) => `• ${task.title}`).join('\n') + '\n';
          } else {
            message += 'No tasks found.\n';
          }
        }
      } else {
        message = 'No Planner plans found for this user.';
      }
      vscode.window.showInformationMessage(message);
    } catch (err: any) {
      vscode.window.showErrorMessage(`Error fetching Planner tasks: ${err.message}`);
    }
  });
  context.subscriptions.push(disposable);
}
