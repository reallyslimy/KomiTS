declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DC_TOKEN: string;
            GUILDID: string;
            ENV: "dev" | "prod" | "debug";
            MONGO_URI: string;
        }
    }
}

export {};