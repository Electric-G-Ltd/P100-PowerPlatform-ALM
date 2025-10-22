
# P100 PowerPlatform ALM

Automation and ALM for Power Platform

## Dev Container Setup (VS Code Dev Insider)

This project supports development in a VS Code dev container, including VS Code Dev Insider and GitHub Copilot integration.

### Quick Start

1. **Open in VS Code Dev Insider**
	 - Use the "Reopen in Container" command from the Command Palette.
2. **Rebuild the Dev Container**
	 - If prompted, select "Rebuild Container" to ensure all dependencies are installed.
3. **Verify Extensions**
	 - Copilot and other required extensions will be installed automatically if listed in `.devcontainer/devcontainer.json`.
	 - To upgrade Copilot to 4.1, open the Extensions panel and update GitHub Copilot, or specify the version in `devcontainer.json`:
		 ```json
		 "customizations": {
			 "vscode": {
				 "extensions": ["github.copilot@4.1.0"]
			 }
		 }
		 ```


### Troubleshooting

- If the container fails to build, check for syntax errors or deprecated fields in `.devcontainer/devcontainer.json` and `Dockerfile`.
- Remove any `.devcontainer` cache folders and rebuild.
- Ensure you are using a recent base image in the Dockerfile.
- For Copilot issues, update the extension inside the container or pin the desired version.

#### ALM Build Issues (NuGet Restore)

If you see errors about missing NuGet packages (e.g., `Microsoft.Extensions.Configuration.Binder, version 9.0.9`):

1. Open a terminal in the dev container.
2. Run:
	```sh
	dotnet restore Connectors/PowerPlatformConnector.csproj
	```
3. If restore fails, clear NuGet caches and try again:
	```sh
	dotnet nuget locals all --clear
	dotnet restore Connectors/PowerPlatformConnector.csproj
	```
4. To manually add a missing package:
	```sh
	dotnet add Connectors/PowerPlatformConnector.csproj package Microsoft.Extensions.Configuration.Binder --version 9.0.9
	dotnet restore Connectors/PowerPlatformConnector.csproj
	```
5. If you see path length issues, move your workspace to a shorter path (e.g., `C:\P100`).

This resolves most ALM build and language server issues in the dev container.

### Environment Variables

- Add any required secrets or API keys to a `.env` file in the project root (not committed).

### Folder Structure

- `Connectors/` — Power Platform connectors and related code
- `.devcontainer/` — Dev container config and Dockerfile
- `docs/` — Documentation
- `scripts/` — Setup and utility scripts

---
For more help, see the Issues tab or contact the project maintainers.