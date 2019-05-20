declare const _default: {
    env: string;
    isProd: boolean;
    sentry: {
        dsn: string;
    };
    redis: {
        password: string;
        host: string;
        prefix: string;
    };
    rabbitmq: {
        host: string;
        user: string;
        pass: string;
    };
    knexConfig: {
        development: {
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
        };
        production: {};
    };
};
export default _default;
