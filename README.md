# gobarber-node

This is a code challenge using, Node.js, PostgreSQL with Sequelize, MongoDB with Mongoose, queues with Redis and Bee-Queue and other libs.

## Running

1. Copy the `.env.sample` file to `.env` and fill it.
```bash
$ cp .env.sample .env
```
2. Install node modules
```bash
$ yarn install
```
3. Run migrations
```bash
yarn sequelize db:migrate
```
4. Run server
```bash
$ yarn start
```
5. Run Queue
```bash
$ yarn queue
```

## Development
You can also run with nodemon:
```bash
$ yarn dev
```
