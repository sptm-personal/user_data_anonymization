import { Schema } from 'mongoose';

import { Customer } from '../types/Customer';

const customerSchema = new Schema<Customer>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  address: {
    line1: { type: String, required: true },
    line2: { type: String, required: true },
    postcode: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true }
  },
  createdAt: { type: String, required: true }
});

export { customerSchema };
