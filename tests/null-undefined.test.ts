describe('Optional Parameter', () => {
  it('should support null and undefined', () => {
    function sayHello(name?: string | null) {
      if (name) {
        console.info(`Hello ${name}`);
      } else {
        console.info('Hello ajah');
      }
    }

    // sayHello('Bayu');
    const name: string | undefined = undefined;
    // sayHello(name);
    // sayHello(null);
  });
});
