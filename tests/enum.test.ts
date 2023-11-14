import { CustomerType, Customer } from '../src/enums';

describe('Enum', () => {
  it('should support in typescript', () => {
    const customer: Customer = {
      id: 1,
      name: 'bayu',
      type: CustomerType.GOLD,
    };

    // console.info(customer);
  });
});
