// Microsoft Graph API integration module for modular SDK
// Exports a GraphService class for extensibility
import { getGraphClient } from "./auth/graphAuth";

export class GraphService {
    getClient() {
        return getGraphClient();
    }
}
