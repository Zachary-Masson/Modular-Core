import { Config } from "@types";
declare class Modular {
    private readonly _config;
    private _client;
    constructor(config: Config);
    private initialiseClient;
    login(): void;
}
export = Modular;
