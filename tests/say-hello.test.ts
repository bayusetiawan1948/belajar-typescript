import { sayHello } from '../src/say-hello';

describe('sayHello', () => {
  it('should return hello bayu', () => {
    expect(sayHello('Bayu')).toBe('Hello Bayu');
  });
});
