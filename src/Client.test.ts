import { Client } from "./Client";

const GRAPHAEL_CLIENT_ID = "gr2a83ccdeda034410";
const GRAPHAEL_CLIENT_SECRET = "test-client-secret";

describe("Client", () => {
    describe("constructor()", () => {
        beforeEach(() => {
            jest.resetModules();
        });

        it("should create an instance of Client", () => {
            const client = new Client({
                id: GRAPHAEL_CLIENT_ID,
                secret: GRAPHAEL_CLIENT_SECRET,
            });
            
            expect(client).toBeInstanceOf(Client);
        });
    });

    describe("getServerInfo()", () => {
        let client: Client;

        beforeEach(() => {
            jest.resetModules();
            client = new Client({
                id: GRAPHAEL_CLIENT_ID,
                secret: GRAPHAEL_CLIENT_SECRET,
            });
        });

        it("should return server information", async () => {
            const info = await client.getServerInfo();

            expect(info).toEqual({
                version: "0.1.0-rc.3",
                status: "cloud",
            });
        });
    });
});
