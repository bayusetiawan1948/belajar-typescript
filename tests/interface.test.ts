import { Seller } from '../src/interface';
import { Employee, Manager } from '../src/employee';
import { Person } from '../src/person';

describe('Interface', () => {
  it('should support in typescript', () => {
    const seller: Seller = {
      id: 1,
      name: 'China tanpa toko',
      nib: 'as123d',
      npwp: '123123',
    };

    // console.info(seller);
  });

  it('should support function interface', () => {
    interface addFunction {
      (value1: number, value2: number): number;
    }

    const add: addFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(5, 2)).toBe(7);
  });

  it('should support indesxable interface', () => {
    interface stringArray {
      [index: number]: string;
    }

    const names: stringArray = ['bayu', 'warnaf', 'setiawan'];
    // console.info(names);
    // console.info(names[2]);
  });

  it('should support indexable interface for non number index', () => {
    interface stringDictionary {
      [key: string]: string;
    }

    const disctionary: stringDictionary = {
      name: 'Bayu',
      address: 'Indonesia',
    };

    // console.info(disctionary);
    // console.info(disctionary['name']);
  });

  it('should support extends interface', () => {
    const employee: Employee = {
      id: 1,
      name: 'Bayu Setiawan',
      division: 'IT',
    };

    // console.info(employee);

    const upgrade: Manager = {
      id: 1,
      name: 'Bayu Setiawan',
      division: 'IT',
      numberOfEmployees: 12,
    };

    // console.info(upgrade);
  });

  it('should support function in interface', () => {
    interface Person {
      name: string;
      sayHello(name: string): string;
    }

    const orang: Person = {
      name: 'Bayu Setiawan',
      sayHello: function (name: string): string {
        return `hello ${name}, my name is ${this.name}`;
      },
    };

    // console.info(orang.sayHello('warnaf'));
  });

  it('should support intersection types', () => {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: string;
    }

    type Domain = HasName & HasId;

    const domain: Domain = {
      id: 'satu',
      name: 'Bayu Setiawan',
    };

    // console.info(domain);
  });

  it('should support assertion', () => {
    const person: any = {
      name: 'warnaf',
      age: 22,
    };

    const person2: Person = person as Person;
    console.info(person2);
  });
});
