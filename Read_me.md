# PowerPlatformConnector

## Purpose
The API is Dataverse API and it enable GET functionality within Dataverse.

## Files
- `openapi.json` – OpenAPI/Swagger definition
- `icon.png` – Connector icon

## Auth Model
- OAuth 2.0 (Authorization Code) / API Key / etc.
- Scopes: `...`
- Token URL: `...`
- Auth URL: `...`
- the OAuth model still needs to be sorted out so it opens with my Azure Log in.

## Import Steps (Dev)
1. Power Apps → **Data ▸ Custom connectors** → **New custom connector** → **Import an OpenAPI file**.
2. Upload `openapi.json` and `icon.png`.
3. Configure **Security** (OAuth/client ID, etc.) – use environment secrets, not repo files.
4. **Test** the connector.

## Add to Solution
1. Solutions → open your Dev Solution.
2. **Add existing ▸ Custom connector** → choose this connector.
3. Add a **Connection Reference** and any **Environment Variables** (e.g., base URL).

## Update Flow
- Edit `openapi.json`, validate, PR review.
- Re-import into Dev and update the Solution if required.
- Export Solution (unmanaged for source, managed for Test/Prod) via CI/CD.