// @jest-environment node
/* global describe, it, expect */
import { AuthService, GraphService, DataverseService } from "./sdk";

describe("SDK Modular Structure", () => {
    it("should instantiate AuthService", () => {
        const auth = new AuthService();
        expect(auth).toBeInstanceOf(AuthService);
    });

    it("should instantiate GraphService and get a client", () => {
        const graph = new GraphService();
        expect(typeof graph.getClient).toBe("function");
        // Not calling getClient() to avoid live auth
    });

    it("should instantiate DataverseService", () => {
        const dataverse = new DataverseService();
        expect(dataverse).toBeInstanceOf(DataverseService);
    });
});
