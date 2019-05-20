"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const local = '127.0.0.1';
const { NODE_ENV = 'development', SENTRY_DSN, REDIS_HOST = local, REDIS_PASS, REDIS_PREFIX, RMQ_HOST = local, RMQ_USER, RMQ_PASS, PG_HOST = local, PG_USER, PG_PASS, DB_NAME = 'jobs' } = process.env;
exports.default = {
    env: NODE_ENV,
    isProd: NODE_ENV === 'production',
    sentry: {
        dsn: SENTRY_DSN
    },
    redis: {
        password: REDIS_PASS,
        host: REDIS_HOST,
        prefix: REDIS_PREFIX
    },
    rabbitmq: {
        host: RMQ_HOST,
        user: RMQ_USER,
        pass: RMQ_PASS
    },
    knexConfig: {
        development: {
            client: 'postgres',
            useNullAsDefault: true,
            connection: {
                host: PG_HOST,
                database: DB_NAME,
                user: PG_USER,
                password: PG_PASS
            },
            pool: {
                min: 2,
                max: 10
            },
            migrations: {
                tableName: 'knex_migrations'
            }
        },
        production: {}
    }
};
//# sourceMappingURL=config.js.map