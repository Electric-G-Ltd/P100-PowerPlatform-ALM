/* global process */
// Central config for extension settings (to be extended for secrets, endpoints, etc.)
export const config = {
    tenantId: process.env.TENANT_ID || "",
    clientId: process.env.CLIENT_ID || "",
    clientSecret: process.env.CLIENT_SECRET || "",
};
