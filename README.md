# jobs-common

Common helpers, configs, and constants used across the Jobs project

## Install

```bash
yarn add @chile-sh/jobs-common
```

## Env variables

`PG_HOST`, `PG_USER`, and `PG_PASS` are required to run migrations.

Other env variables should be inherited from outside.

```conf
NODE_ENV=development
RMQ_HOST=rabbitmq
RMQ_USER=admin
RMQ_PASS=admin
PG_HOST=postgres
PG_USER=postgres
PG_PASS=postgres
REDIS_HOST=redis
REDIS_PASS=redis
SENTRY_DSN=https://...@sentry.io/1234
```

## DigitalOcean Spaces

```bash
mkdir ~/.aws && touch ~/.aws/credentials
```

Edit the credentials file with your access and secret keys:

```bash
nano ~/.aws/credentials
```

```conf
[default]
aws_access_key_id=...
aws_secret_access_key=...
```

## Database

Use knex with:

```bash
yarn knex
```

e.g:
```bash
yarn knex seed:make getonbrd -x ts # use TypeScript
```

### Migrations

```bash
yarn db:migrate && yarn db:seed

yarn db:rollback
```

## Development

```bash
yarn global add yalc

yarn build && yalc publish
```

Then, on the external project:
```bash
yalc link @chile-sh/jobs-common
```

# License

GNU General Public License v3.0
