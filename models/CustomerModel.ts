import { model } from 'mongoose';

import { Customer } from '../types/Customer';
import { customerSchema } from '../schemas/CustomerSchema';

const CustomerModel = model<Customer>('Customer', customerSchema, 'customers');

export { CustomerModel };
