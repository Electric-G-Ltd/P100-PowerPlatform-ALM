
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

			# ![Build Status](https://github.com/Electric-G-Ltd/P100-PowerPlatform-ALM/actions/workflows/ci-cd.yml/badge.svg)

			## Workflow Overview

			### .NET CI/CD Automation
			This repository uses GitHub Actions for automated build, test, and publish of the .NET solution. Every push or pull request to `main` triggers:
			- Dependency restore
			- Build
			- Test
			- Publish artifacts

			See `.github/workflows/ci-cd.yml` for details.

			### Power Platform Solution Management (Manual)
			Power Platform solutions (Dataverse, connectors, etc.) are managed manually. Export/import and updates are performed as needed from your development environment.

			**Manual Solution Update Checklist:**
			1. Export latest solution from dev environment
			2. Import into test or target environment
			3. Validate changes and run tests
			4. Update documentation as needed
			5. Set up Copilot Studio Kit (when ready)

			**Copilot Studio Kit Setup:**
			- Follow Microsoft documentation for Copilot Studio Kit installation and configuration
			- Integrate with your Power Platform solution as required

			---
		 }
		 ```

### Troubleshooting

- If the container fails to build, check for syntax errors or deprecated fields in `.devcontainer/devcontainer.json` and `Dockerfile`.
- Remove any `.devcontainer` cache folders and rebuild.
- Ensure you are using a recent base image in the Dockerfile.
- For Copilot issues, update the extension inside the container or pin the desired version.

### Environment Variables

- Add any required secrets or API keys to a `.env` file in the project root (not committed).

### Folder Structure

- `Connectors/` — Power Platform connectors and related code
- `.devcontainer/` — Dev container config and Dockerfile
- `docs/` — Documentation
- `scripts/` — Setup and utility scripts

---

---
For more help, see the Issues tab or contact the project maintainers.