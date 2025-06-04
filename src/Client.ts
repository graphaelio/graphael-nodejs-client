/**
 * Client configuration interface.
 */
export interface ClientConfig {
    /**
     * The base URL of the Graphael API. Defaults to "https://api.graphael.io/".
     */
    baseUrl?: string;
    id: string;
    secret: string;
}

/**
 * Client for interacting with the Graphael API.
 */
export class Client {
    /**
     * Creates a new instance of the Client.
     * @param config - The configuration for the client.
     */
    constructor(config?: ClientConfig) {}

    /**
     * Fetches the server information.
     */
    async getServerInfo() {
        return {
            version: "0.1.0-rc.3",
            status: "cloud",
        };
    }
}
