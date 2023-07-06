import { ObjectId } from 'mongoose';

import { Address } from './Address';

type Customer = {
  _id?: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  address: Address;
  createdAt: string;
};

export { Customer };
