describe('Data Type', () => {
  it('should must declare', () => {
    const name: string = 'Bayu Setiawan';
    // console.info(name);
  });

  it('should must any', () => {
    const person: any = {
      id: 1,
      name: 'Bayu Setiawan',
      age: 22,
    };
  });

  it('should must union', () => {
    let sample: number | string | boolean = 'Bayu';
    sample = 100;
    sample = 'warnaf';
  });

  it('should change with union', () => {
    function process(value: number | string | boolean) {
      if (typeof value === 'string') {
        return value.toUpperCase();
      } else if (typeof value === 'number') {
        return value * 2;
      } else {
        return !value;
      }
    }

    expect(process('Bayu')).toBe('BAYU');
    expect(process(22)).toBe(44);
    expect(process(true)).toBe(false);
  });
});
