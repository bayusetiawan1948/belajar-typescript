describe('Array', () => {
  it('should same with javascript', () => {
    const names: string[] = ['bayu', 'warnaf', 'setiawan'];
    const values: number[] = [1, 2, 3];
  });

  it('should support readonly array', () => {
    const hobbies: ReadonlyArray<string> = ['membaca', 'Menulis'];
    // console.info(hobbies);
  });

  it('should support tuple', () => {
    const person: readonly [string, string, number] = ['bayu', 'setiawan', 22];
    // console.info(person);
  });
});
