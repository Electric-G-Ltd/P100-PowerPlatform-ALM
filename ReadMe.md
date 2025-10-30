
# P100 PowerPlatform ALM

Automation and ALM for Power Platform

## Dev Container Setup (VS Code)

This project supports development in a VS Code dev container, but not including VS Code Dev Insider (as of yet) and GitHub Copilot integration.

### Quick Start

1. **Open in VS Code**
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

			### Power Platform Solution Management
			Power Platform solutions are managed in the `.devcontainer/SolutionFolder/` directory as part of the dev container workflow.

			**Current Solution:**
			- **Name**: P100 Electrical Agent Suite
			- **Version**: 1.0.0.1
			- **Location**: `.devcontainer/SolutionFolder/Other/`

			**Solution Management Workflow:**
			1. Work within the dev container environment
			2. Solution files are in `.devcontainer/SolutionFolder/Other/`
			3. Export and package solutions from Power Platform environment
			4. Place updated solution XML files in the SolutionFolder
			5. Commit changes through standard Git workflow

			**Solution Files:**
			- `Solution.xml` - Solution manifest and metadata
			- `Customizations.xml` - Customization definitions

			**Quick Import:**
			```bash
			# Package solution files from .devcontainer/SolutionFolder/
			# Navigate to https://make.powerapps.com/
			# Solutions → Import solution → Select the packaged solution
			# Follow Power Platform import process
			```

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
- `.devcontainer/` — Dev container config, Dockerfile, and solution files
- `.devcontainer/SolutionFolder/` — Power Platform solution source files
- `docs/` — Project documentation
- `governance/` — Repository governance and contribution guidelines

---

---
For more help, see the Issues tab or contact the project maintainers.