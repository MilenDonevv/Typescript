"use strict";
/*


class Coder {
    name: string  // Property 'name' has no initializer and is not definitely assigned in the constructor

}

*/
/*


class Coder {


    constructor(name: string) {
        this.name = name        // Property 'name' does not exist on type 'Coder'
    }
}


*/
// this is how to write it TS - friendly but it is kinda redundant
class Coder {
    constructor(name) {
        this.name = name;
    }
}
// This is a very redundant way to do this
class Musician {
    // the constructor accepts these as parameters cuz they could be passed when we instantiate the class
    constructor(name, music, age, language) {
        // finally we assign the values of the constructor parameters to the Class properties
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
    }
}
// Instead we can add Visibility / Data modifiers / Access modifiers
class Musician2 {
    // the constructor accepts these as parameters cuz they could be passed when we instantiate the class
    constructor(name, // once the name is assigned it cannot be changed
    music, age, // it can ONLY accessed IN THE CLASS
    // protected language: string 
    language = 'Typescript' // default
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
        // finally we assign the values of the constructor parameters to the Class properties
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Musician2('Dave', 'Rock', 42);
// private - can be ACCESSED ONLY inside the class
// protected - can be ACCESSED BOTH from INSIDE the class AND also from inside the Subclasses
console.log(typeof Dave); // object
console.log(`Hello ${Dave.name}! Your ${Dave.music} music taste is Great :)`);
console.log(Dave.getAge()); // Hello, I'm 42
// console.log(Dave.age);  // Property 'age' is private and only accessible within class 'Musician2'.
// console.log(Dave.language);  // Property 'language' is protected and only accessible within class 'Musician2' and its subclasses.
class RockMusician extends Musician2 {
    constructor(guitar, name, music, age) {
        super(name, music, age);
        this.guitar = guitar;
        this.guitar = guitar;
    }
    getLang() {
        return `I write ${this.language}`; // here we're accessing the 'protected' parameter 'language: string = 'TS'
    }
}
const Sara = new RockMusician('Ibanec-guitar', 'Sara', 'Hard Rock', 25);
console.log(Sara.getLang()); // I write Typescript --> here we're accessing the 'protected' parameter 'language: string = 'TS'
class Surgeon {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} ${this.instrument}`;
    }
}
const doctorDulittel = new Surgeon('Dulittel', 'tweezers');
console.log(doctorDulittel.play('Uses')); // Dulittel Uses tweezers
// ------------------------------
class Peeps {
    static getCount() {
        return Peeps.count; // Accessing it directly through the class cuz it's STATIC
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count; // makes sure we are incrementing first !! 
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Peeps.count); // 3
console.log(Steve.id); // 2
console.log(Amy.id); // 3
console.log(John.id); // 1
// --------------------------------------- Getters and Setters -----------------------
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep']; // this is the getter
console.log(MyBands.data); // ['Neil Young', 'Led Zep'] 
MyBands.data = [...MyBands.data, 'ZZ Top']; // This is the setter
console.log(MyBands.data); // ['Neil Young', 'Led Zep', 'ZZ Top']
// MyBands.data = 'Van Halen'   --> Type 'string' is not assignable to type 'string[]'.
