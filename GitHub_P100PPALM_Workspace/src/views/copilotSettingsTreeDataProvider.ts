import * as vscode from "vscode";

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

    getChildren(element?: vscode.TreeItem): Promise<vscode.TreeItem[]> {
        // Example: return a static list of settings
        if (!element) {
            const item1 = new vscode.TreeItem(
                "Copilot Setting 1",
                vscode.TreeItemCollapsibleState.None
            );
            item1.iconPath = new vscode.ThemeIcon("symbol-property");
            const item2 = new vscode.TreeItem(
                "Copilot Setting 2",
                vscode.TreeItemCollapsibleState.None
            );
            item2.iconPath = new vscode.ThemeIcon("symbol-property");
            return Promise.resolve([item1, item2]);
        }
        return Promise.resolve([]);
    }

    refresh(): void {
        this._onDidChangeTreeData.fire();
    }
}
