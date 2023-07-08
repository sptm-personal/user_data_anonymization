# Customers anonymization and sync

![Branches](https://github.com/sptmru/user_data_anonymization/blob/badges/badges/coverage-branches.svg)
![Functions](https://github.com/sptmru/user_data_anonymization/blob/badges/badges/coverage-functions.svg)
![Lines](https://github.com/sptmru/user_data_anonymization/blob/badges/badges/coverage-lines.svg)
![Statements](https://github.com/sptmru/user_data_anonymization/blob/badges/badges/coverage-statements.svg)
![Jest coverage](https://github.com/sptmru/user_data_anonymization/blob/badges/badges/coverage-jest%20coverage.svg)

## Installation

- Create `.env` file with `DB_URI` variable (MongoDB connection string) in the project root (you can check `.env.example` for more details).
- Run `npm install` to install project dependencies.

## Production mode

- Run `npm run build` to build the project.
- You can now start `app.ts` (the app that creates customers and inserts them into MongoDB collection) by running `npm run app`.
- The `sync.ts` app (it listens for inserts/updates in customers collection, anonymizes customers and inserts/updates them to `customers_anonymised` collection) can be started with `npm run sync` (realtime synchronization) or `npm run sync-full-reindex` (full synchronization).

## Development mode

You can also run apps in development mode without build: run `npm run app:dev` (`app.ts`), `npm run sync:dev` (`sync.ts` in realtime synchronization mode) or `npm run sync-full-reindex:dev` (`sync.ts` in full synchronization mode).

## Run tests

To run tests, please use `npm run test`.
