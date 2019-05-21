# jobs-common
Common helpers, configs, and constants used across the Jobs project

## Install

```bash
yarn add @chile-sh/jobs-common
```

## Env variables

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

# License

GNU General Public License v3.0
