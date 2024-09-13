
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
    name: string

    constructor(name: string) {
        this.name = name
    }
}


// This is a very redundant way to do this
class Musician {
    name: string
    music: string
    age: number
    language: string

    // the constructor accepts these as parameters cuz they could be passed when we instantiate the class
    constructor(
        name: string,
        music: string,
        age: number,
        language: string
    ) {
        // finally we assign the values of the constructor parameters to the Class properties
        this.name = name
        this.music = music
        this.age = age
        this.language = language
    }
}

// Instead we can add Visibility / Data modifiers / Access modifiers


class Musician2 {

    // secondLan: string  --> Property 'secondLanguage' has no initializer and is not definitely assigned in the constructor
    secondLang!: string  // Correct --> I'm not gonna initialize this right away

    // the constructor accepts these as parameters cuz they could be passed when we instantiate the class
    constructor(
        public readonly name: string,  // once the name is assigned it cannot be changed
        public music: string,
        private age: number,  // it can ONLY accessed IN THE CLASS
        // protected language: string 
        protected language: string = 'Typescript'  // default

    ) {
        // finally we assign the values of the constructor parameters to the Class properties
        this.name = name
        this.music = music
        this.age = age
        this.language = language
    }

    public getAge() {
        return `Hello, I'm ${this.age}`
    }
}


const Dave = new Musician2('Dave', 'Rock', 42)

// private - can be ACCESSED ONLY inside the class
// protected - can be ACCESSED BOTH from INSIDE the class AND also from inside the Subclasses

console.log(typeof Dave) // object

console.log(`Hello ${Dave.name}! Your ${Dave.music} music taste is Great :)`)
console.log(Dave.getAge());  // Hello, I'm 42
// console.log(Dave.age);  // Property 'age' is private and only accessible within class 'Musician2'.

// console.log(Dave.language);  // Property 'language' is protected and only accessible within class 'Musician2' and its subclasses.

class RockMusician extends Musician2 {
    constructor(public guitar: string, 
        name: string,
        music: string,
        age: number
    ) { 
        super(name, music, age)
        this.guitar = guitar
    }

    public getLang() {
        return `I write ${this.language}` // here we're accessing the 'protected' parameter 'language: string = 'TS'
    }
}


const Sara = new RockMusician('Ibanec-guitar', 'Sara', 'Hard Rock', 25);
console.log(Sara.getLang())  // I write Typescript --> here we're accessing the 'protected' parameter 'language: string = 'TS'
// console.log(Sara.age);  -> Property 'age' is private and only accessible within class 'Musician2'.
// console.log(Sara.language) -> Property 'language' is protected and only accessible within class 'Musician2' and its subclasses.


interface Doctor {
    name: string,
    instrument: string,
    play(action: string): string
}

class Surgeon implements Doctor {
    name: string
    instrument: string

    constructor(name:string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string): string {
        return `${this.name} ${action} ${this.instrument}`
    }
}


const doctorDulittel = new Surgeon('Dulittel', 'tweezers')
console.log(doctorDulittel.play('Uses'));   // Dulittel Uses tweezers



// ------------------------------

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count         // Accessing it directly through the class cuz it's STATIC
    }

    public id: number

    constructor(public name: string) {
        this.name = name;
        this.id = ++Peeps.count       // makes sure we are incrementing first !! 
    }
}


const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Peeps.count)  // 3
console.log(Steve.id) // 2
console.log(Amy.id) // 3
console.log(John.id) // 1


// --------------------------------------- Getters and Setters -----------------------

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {    // read-only   - (getter) Bands.data: string[]
        return this.dataState
    }

    public set data(value: string[]) {  // (setter) Bands.data: string[]
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            return
        } else throw new Error('Param is not an array of strings')
    }
}

const MyBands = new Bands()

MyBands.data = ['Neil Young', 'Led Zep']   // this is the getter
console.log(MyBands.data);   // ['Neil Young', 'Led Zep'] 

MyBands.data = [...MyBands.data, 'ZZ Top']   // This is the setter
console.log(MyBands.data);  // ['Neil Young', 'Led Zep', 'ZZ Top']

// MyBands.data = 'Van Halen'   --> Type 'string' is not assignable to type 'string[]'.







