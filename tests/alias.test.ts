import { Category, Product } from '../src/alias';

describe('Type Alias', () => {
  it('should must declare as Alias', () => {
    const category: Category = {
      id: '1',
      name: 'Handphone',
    };

    const product: Product = {
      id: 1,
      name: 'Samsung prime',
      price: 5000000,
      category: category,
      description: 'Hp gege',
    };

    // console.info(category);
    // console.info(product);
  });
});
