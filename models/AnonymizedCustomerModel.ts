import { model } from 'mongoose';

import { Customer } from '../types/Customer';
import { customerSchema } from '../schemas/CustomerSchema';

const AnonymizedCustomerModel = model<Customer>('AnonymizedCustomer', customerSchema, 'customers_anonymised');

export { AnonymizedCustomerModel };
