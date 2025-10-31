# P100 Power Platform ALM DevContainer
FROM mcr.microsoft.com/dotnet/sdk:8.0

# Install Node.js and TypeScript
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g typescript

# Install PowerShell
RUN apt-get install -y powershell

WORKDIR /workspace
