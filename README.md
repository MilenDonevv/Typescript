# Typescript

Is is my playground for learning and trying out different typescript functionalities.

----------------------

1. tsc --init   
2. tsconfig.json
   -    "module": "commonjs",  
   -    "noEmitOnError": true, 
        "rootDir": "./src", 
        "outDir": "./build/js",
          "include": [           
    "src"
  ]

  --> this last one is added at the bottom to ignore any ts files outside of the src directory

tsc --noEmitOnError -w (watch flag)

---------------

- strongly typed languages - Demand specification of data types!
- TypeScript is strongly typed language / Javascript is loosely typed language.

- Typescript is also STATICALLY typed language - types are checked AT COMPILE TIME! 

- JS is dynamically typed language - types are checked at RUN TIME !

- A few of TS benefits:
  1) self-documenting code
  2) Catch errors during development
  3) Very good for teams


-----------------------------


#                        **TypeScript**


## ⚫How to Set Up the ts config File:
First, create the ts config file:   
```
tsc --init
```
You should now have a ```tsconfig.json ```file in the project root.

## ⚫ Компилиране на TypeScript във JavaScript:

С командата във терминала:
```
tsc index.ts => (името на файла ни) 
или
tsc => ще компилира вскички файлове завършващи на ts
```
За автоматично компилиране след всяка промяна във ts файла:
```
tsc -w
```

# **✅Types**
```
JavaScript:                 TypeScript:    

🔴 number                  🔵 any   
🔴 string                  🔵 unknown   
🔴 boolean                 🔵 never   
🔴 null                    🔵 enum   
🔴 undefined               🔵 tuple   
🔴 object                  🔵 union
🔴 symbol
```

**🟣Union type:**  
Поменлива, на която може да бъде присвоен повече от един тип :
```
let age: string | number;
age = 26;
age = '26';
```

**🟣Arrays:**  
В TypeScript можете да определите какъв тип данни може да съдържа един масив:
```
let ids: number[] = [1, 2, 3, 4, 5]; // can only contain numbers
let names: string[] = ['Danny', 'Anna', 'Bazza']; // can only contain strings
let options: boolean[] = [true, false, false]; can only contain true or false
let books: object[] = [
  { name: 'Fooled by randomness', author: 'Nassim Taleb' },
  { name: 'Sapiens', author: 'Yuval Noah Harari' },
]; // can only contain objects
let arr: any[] = ['hello', 1, true]; // any не се препоръчва понеже така губим смисъла от TypeScript.
```
Можем да използваме **union types**, за да дефинирате масиви, съдържащи множество типове:
```
let person: (string | number | boolean)[] = ['Danny', 1, true];
person[0] = 100;
person[1] = {name: 'Danny'} // Error - person array can't contain objects
```

Ако инициализирате променлива със стойност, не е необходимо изрично да посочвате типа, тъй като TypeScript ще го изведе:
```
let person = ['Danny', 1, true]; // This is identical to above example
person[0] = 100;
person[1] = { name: 'Danny' }; // Error - person array can't contain objects
``` 
**🟣Tuples:**    
Tuple е масив с фиксиран размер и известни типове данни. 
```
let person: [string, number, boolean] = ['Danny', 1, true];
person[0] = 100; // Error - Value at index 0 can only be a string
```
**🟣Objects:**  
```
let person: {
  name: string;
  location: string;
  isProgrammer: boolean;
};

person.isProgrammer = 'Yes'; // ERROR: should be a boolea

person = {
  name: 'John',
  location: 'US',
};   
// ERROR: missing the isProgrammer property
```

**🟣Interface:**    
Когато дефинираме обект, обикновено ще използваме интерфейс. Това е полезно, ако трябва да проверим дали множество обекти имат едни и същи специфични свойства и типове стойности:



```
interface Person {
  name: string;
  location: string;
  isProgrammer: boolean;
}

let person1: Person = {
  name: 'Danny',
  location: 'UK',
  isProgrammer: true,
};

function sayHi(person: Person) {
  console.log(`Hi ${person.name}`);
}

sayHi({
  name: 'John',
  location: 'Varna',
  isProgrammer: true
}); // Hi John
```

Можем също да декларираме функции в обекта ни:
```
interface Speech {
  sayHi(name: string): string;
  sayBye: (name: string) => string;
}

let sayStuff: Speech = {
  sayHi: function (name: string) {
    return `Hi ${name}`;
  },
  sayBye: (name: string) => `Bye ${name}`,
};

console.log(sayStuff.sayHi('Heisenberg')); // Hi Heisenberg
console.log(sayStuff.sayBye('Heisenberg')); // Bye Heisenberg
```

**interface vs type**   
interface може да се променя в последствие както и да се екстендва(наследява) докато type си остава фиксирано.

```
interface Animal {
    name: string;
}

interface Bear extends Animal {
    honey: boolean
}

const bear: Bear = {
    name: 'Winnie',
    honey: true
}
```

**🟣functions:**    
Можем да определим какви типове трябва да бъдат аргументите на функцията, както и вида на връщането на функцията:   
```
function circle(diam: number): string {
  return `The circumference is  + ${Math.PI * diam}`;
}

console.log(circle(10)); // The circumference is 31.41592653589793
```

⚪Можем да добавим въпросителен знак след параметър, за да го направим незадължителен. 
```
const add = (a: number, b: number, c?: number | string) => {
  console.log(c);
  return a + b;
};
```
Ако искаме да декларираме функционална променлива, но не и да я дефинираме, тогава използвайте function signature:
```
// Declare
let sayHello: (name: string) => void;

// Define the function, satisfying its signature
sayHello = (name) => {
  console.log('Hello ' + name);
};

sayHello('Danny'); // Hello Danny
```
**🟣type aliases:**     
Псевдонимите на типове могат да намалят дублирането на кодове, като поддържат нашия код DRY.
```
type StringOrNumber = string | number
let x: StringOrNumber

type PersonObject = {
  name: string;
  id: StringOrNumber;
};

const person1: PersonObject = {
  name: 'John',
  id: 1,
};

const sayHello = (person: PersonObject) => {
  return 'Hi ' + person.name;
};
```
**🟣Literal types:**  
```
let favouriteColor: 'red' | 'blue' | 'green' | 'yellow';

favouriteColor = 'blue';
favouriteColor = 'crimson'; // ERROR:
```

# **✅DOM**
TypeScript няма достъп до DOM като JavaScript. Това означава, че всеки път, когато се опитаме да получим достъп до DOM елементи, TypeScript никога не е сигурен, че те действително съществуват. 

Примерът по-долу показва проблема:
```
const link = document.querySelector('a');

console.log(link.href); // ERROR: Object is possibly 'null'. TypeScript can't be sure the anchor tag exists, as it can't access the DOM
```

**🟣non-null assertion operator (ненулевия оператор) (!)**   
С ненулевия оператор за твърдение (!) можем да кажем изрично на компилатора, че даден израз има стойност, различна от nullили undefined. 
```
// Here we are telling TypeScript that we are certain that this anchor tag exists
const link = document.querySelector('a')!;

console.log(link.href); // www.freeCodeCamp.org
```

# **✅Classes**
Можем да дефинираме типовете, които всяка част от данните трябва да бъде в клас:

```
class Person {
  name: string;
  isCool: boolean;
  pets: number;

  constructor(n: string, c: boolean, p: number) {
    this.name = n;
    this.isCool = c;
    this.pets = p;
  }
}

const person1 = new Person('Danny', false, 1);
const person2 = new Person('Sarah', 'yes', 6); // ERROR: Argument of type 'string' is not assignable to parameter of type 'boolean'.
```

След това можем да създадем peopleмасив, който включва само обекти, конструирани от Personкласа:
```
let People: Person[] = [person1, person2];
```

**🟣readonly, private, protected и public**  

⚪ readonly:  
Член на клас, който може да бъде четен, но не може да бъде променян след инициализацията му.

⚪ privite:  
Ограничава достъпа до членовете само в рамките на тялото на класа, в който са декларирани.

⚪ protected:  
Позволява достъпа до членовете само от тялото на класа и от наследените класове. Те не са достъпни извън наследниците на класа.

*Примери:*
```
class Person {
  readonly name: string; // This property is immutable - it can only be read
  private isCool: boolean; // Can only access or modify from methods within this class
  protected email: string; // Can access or modify from this class and subclasses
  public pets: number; // Can access or modify from anywhere - including outside the class

  constructor(n: string, c: boolean, e: string, p: number) {
    this.name = n;
    this.isCool = c;
    this.email = e;
    this.pets = p;
  }

  sayMyName() {
    console.log(`Your not Heisenberg, you're ${this.name}`);
  }
}

const person1 = new Person('Danny', false, 'dan@e.com', 1);
console.log(person1.name); // Fine
person1.name = 'James'; // Error: read only
console.log(person1.isCool); // Error: private property - only accessible within Person class
console.log(person1.email); // Error: protected property - only accessible within Person class and its subclasses
console.log(person1.pets); // Public property - so no problem
person1.sayMyName() //Your not Heisenberg, you're Danny
```

Можем да направим нашия код по-сбит, като конструираме свойства на класа по следния начин:
```
class Person {
  constructor(
    readonly name: string,
    private isCool: boolean,
    protected email: string,
    public pets: number
  ) {}

  sayMyName() {
    console.log(`Your not Heisenberg, you're ${this.name}`);
  }
}
```

Петко, поздрави братле!!! :)