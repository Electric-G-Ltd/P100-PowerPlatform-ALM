import * as vscode from "vscode";
import { config } from "../config";

export class CopilotSettingsTreeDataProvider
    implements vscode.TreeDataProvider<vscode.TreeItem>
{
    private _onDidChangeTreeData: vscode.EventEmitter<
        vscode.TreeItem | undefined | void
    > = new vscode.EventEmitter<vscode.TreeItem | undefined | void>();
    readonly onDidChangeTreeData: vscode.Event<
        vscode.TreeItem | undefined | void
    > = this._onDidChangeTreeData.event;

    getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
        return element;
    }

    async getChildren(element?: vscode.TreeItem): Promise<vscode.TreeItem[]> {
        if (!element) {
            // Show config values as editable items
            const tenantIdItem = new vscode.TreeItem(
                `Tenant ID: ${config.tenantId || "<not set>"}`,
                vscode.TreeItemCollapsibleState.None
            );
            tenantIdItem.iconPath = new vscode.ThemeIcon("key");
            tenantIdItem.command = {
                command: "extension.editTenantId",
                title: "Edit Tenant ID",
                arguments: [],
            };
            const clientIdItem = new vscode.TreeItem(
                `Client ID: ${config.clientId || "<not set>"}`,
                vscode.TreeItemCollapsibleState.None
            );
            clientIdItem.iconPath = new vscode.ThemeIcon("key");
            clientIdItem.command = {
                command: "extension.editClientId",
                title: "Edit Client ID",
                arguments: [],
            };
            const clientSecretItem = new vscode.TreeItem(
                `Client Secret: ${config.clientSecret ? "<set>" : "<not set>"}`,
                vscode.TreeItemCollapsibleState.None
            );
            clientSecretItem.iconPath = new vscode.ThemeIcon("lock");
            clientSecretItem.command = {
                command: "extension.editClientSecret",
                title: "Edit Client Secret",
                arguments: [],
            };
            return [tenantIdItem, clientIdItem, clientSecretItem];
        }
        return [];
    }

    refresh(): void {
        this._onDidChangeTreeData.fire();
    }
}
