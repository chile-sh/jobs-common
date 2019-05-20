declare const development: {
    client: string;
    useNullAsDefault: boolean;
    connection: {
        host: string;
        database: string;
        user: string;
        password: string;
    };
    pool: {
        min: number;
        max: number;
    };
    migrations: {
        tableName: string;
    };
}, production: {};
export { development, production };
