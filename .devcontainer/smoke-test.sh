#!/usr/bin/env bash
set -euo pipefail
echo "Starting smoke test inside container"
echo "dotnet version: $(dotnet --version 2>/dev/null || echo 'dotnet not found')"
echo "tsc version: $(tsc --version 2>/dev/null || echo 'tsc not found')"

if [ -f "GitHub_P100PPALM_Workspace/src/package-lock.json" ]; then
  echo "Found package-lock.json — running npm ci"
  (cd GitHub_P100PPALM_Workspace/src && npm ci)
elif [ -f "GitHub_P100PPALM_Workspace/src/yarn.lock" ]; then
  echo "Found yarn.lock — running npm install"
  (cd GitHub_P100PPALM_Workspace/src && npm install)
else
  echo "No JS lockfile found; skipping npm install"
fi

echo "Running dotnet restore"
dotnet restore

echo "Running dotnet build"
dotnet build --no-restore

echo "Smoke test completed"
