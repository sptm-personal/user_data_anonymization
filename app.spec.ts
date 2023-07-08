import { App } from './modules/App.class';

jest.mock('./models/CustomerModel');
import { CustomerModel } from './models/CustomerModel';

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('generateCustomer', () => {
    it('should generate a customer object with valid properties', () => {
      const customer = App.generateCustomer();
      expect(typeof customer.firstName).toBe('string');
      expect(typeof customer.lastName).toBe('string');
      expect(typeof customer.email).toBe('string');
      expect(typeof customer.address.line1).toBe('string');
      expect(typeof customer.address.line2).toBe('string');
      expect(typeof customer.address.postcode).toBe('string');
      expect(typeof customer.address.city).toBe('string');
      expect(typeof customer.address.state).toBe('string');
      expect(typeof customer.address.country).toBe('string');
      expect(typeof customer.createdAt).toBe('string');
    });
  });

  describe('generateCustomers', () => {
    it('should generate an array of customer objects', () => {
      const customers = App.generateCustomers();
      expect(Array.isArray(customers)).toBe(true);
      expect(customers.length).toBeGreaterThan(0);
      expect(customers[0]).toHaveProperty('firstName');
      expect(customers[0]).toHaveProperty('lastName');
      expect(customers[0]).toHaveProperty('email');
      expect(customers[0]).toHaveProperty('address');
      expect(customers[0]?.address).toHaveProperty('line1');
      expect(customers[0]?.address).toHaveProperty('line2');
      expect(customers[0]?.address).toHaveProperty('postcode');
      expect(customers[0]?.address).toHaveProperty('city');
      expect(customers[0]?.address).toHaveProperty('state');
      expect(customers[0]?.address).toHaveProperty('country');
      expect(customers[0]).toHaveProperty('createdAt');
    });

    it('should generate a random number of customer objects', () => {
      const customers1 = App.generateCustomers();
      const customers2 = App.generateCustomers();
      const customers3 = App.generateCustomers();
      const customers4 = App.generateCustomers();

      const uniqueArr = [...new Set([customers1.length, customers2.length, customers3.length, customers4.length])];
      expect(uniqueArr.length).toBeGreaterThan(1);
    });
  });

  describe('pushCustomersToDb', () => {
    it('should push customer objects to the database', async () => {
      const insertManyMock = jest.spyOn(CustomerModel, 'insertMany');
      await App.pushCustomersToDb();
      expect(insertManyMock).toHaveBeenCalled();
    });
  });
});
