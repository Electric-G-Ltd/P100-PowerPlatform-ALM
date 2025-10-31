# PowerShell script to run all linters in the repo

Write-Host "Running ESLint (JS/TS)..."
if (Test-Path ./GitHub_P100PPALM_Workspace/package.json) {
    Push-Location ./GitHub_P100PPALM_Workspace
    if (Test-Path ./node_modules/.bin/eslint) {
        ./node_modules/.bin/eslint . --ext .js,.ts
    } else {
        npx eslint . --ext .js,.ts
    }
    Pop-Location
} else {
    Write-Host "No JS/TS workspace found. Skipping ESLint."
}

Write-Host "Running flake8 (Python)..."
if (Get-Command flake8 -ErrorAction SilentlyContinue) {
    flake8 .
} else {
    Write-Host "flake8 not found. Skipping Python lint."
}

Write-Host "Running yamllint (YAML)..."
if (Get-Command yamllint -ErrorAction SilentlyContinue) {
    yamllint .
} else {
    Write-Host "yamllint not found. Skipping YAML lint."
}

Write-Host "Running markdownlint (Markdown)..."
if (Get-Command markdownlint -ErrorAction SilentlyContinue) {
    markdownlint .
} else {
    Write-Host "markdownlint not found. Skipping Markdown lint."
}

Write-Host "Running dotnet-format (C#)..."
if (Get-Command dotnet -ErrorAction SilentlyContinue) {
    dotnet format
} else {
    Write-Host "dotnet not found. Skipping C# lint."
}

Write-Host "Running jsonlint (JSON)..."
if (Get-Command jsonlint -ErrorAction SilentlyContinue) {
    Get-ChildItem -Recurse -Include *.json | ForEach-Object { jsonlint $_.FullName }
} else {
    Write-Host "jsonlint not found. Skipping JSON lint."
}
