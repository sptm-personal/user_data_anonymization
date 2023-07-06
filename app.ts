import { faker } from '@faker-js/faker';
import { connect } from 'mongoose';
import 'dotenv/config';

import { logger } from './misc/logger';
import { Customer } from './types/Customer';
import { CustomerModel } from './models/CustomerModel';

const INTERVAL_TIME_IN_MS = 200;

const generateCustomer = (): Customer => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  address: {
    line1: faker.location.streetAddress(true),
    line2: faker.location.secondaryAddress(),
    postcode: faker.location.zipCode(),
    city: faker.location.city(),
    state: faker.location.state({ abbreviated: true }),
    country: faker.location.countryCode()
  },
  createdAt: faker.date.past().toISOString()
});

const generateCustomers = (): Customer[] => {
  const quantity = Math.floor(Math.random() * 10) + 1;
  return Array.apply(null, Array(quantity)).map(() => generateCustomer());
};

const pushCustomersToDb = async (): Promise<void> => {
  logger.info('Pushing customers to DB');
  const customers = generateCustomers();
  await CustomerModel.insertMany(customers);
};

(async () => {
  await connect(process.env.DB_URI as string);
  setInterval(pushCustomersToDb, INTERVAL_TIME_IN_MS);
})();
