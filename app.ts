import { connect } from 'mongoose';
import 'dotenv/config';

import { App } from './modules/App.class';

const INTERVAL_TIME_IN_MS = 200;

(async () => {
  if (process.env.JEST_WORKER_ID === undefined) {
    await connect(process.env.DB_URI as string);
    setInterval(App.pushCustomersToDb, INTERVAL_TIME_IN_MS);
  } else {
    await connect('');
  }
})();
