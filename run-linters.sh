#!/bin/bash

# Run ESLint (JS/TS)
echo "Running ESLint (JS/TS)..."
if [ -f ./GitHub_P100PPALM_Workspace/package.json ]; then
  (cd ./GitHub_P100PPALM_Workspace && npx eslint . --ext .js,.ts)
else
  echo "No JS/TS workspace found. Skipping ESLint."
fi

# Run flake8 (Python)
echo "Running flake8 (Python)..."
if command -v flake8 >/dev/null 2>&1; then
  flake8 .
else
  echo "flake8 not found. Skipping Python lint."
fi

# Run yamllint (YAML)
echo "Running yamllint (YAML)..."
if command -v yamllint >/dev/null 2>&1; then
  yamllint .
else
  echo "yamllint not found. Skipping YAML lint."
fi

# Run markdownlint (Markdown)
echo "Running markdownlint (Markdown)..."
if command -v markdownlint >/dev/null 2>&1; then
  markdownlint .
else
  echo "markdownlint not found. Skipping Markdown lint."
fi

# Run dotnet-format (C#)
echo "Running dotnet-format (C#)..."
if command -v dotnet-format >/dev/null 2>&1; then
  dotnet format
else
  echo "dotnet-format not found. Skipping C# lint."
fi

# Run jsonlint (JSON)
echo "Running jsonlint (JSON)..."
if command -v jsonlint >/dev/null 2>&1; then
  find . -name '*.json' -exec jsonlint {} \;
else
  echo "jsonlint not found. Skipping JSON lint."
fi
