let stringArr = ['one', 'two', 'three']   // let stringArr: string[]

let cars = ['Mercedes', 911, 'BMW']   // let cars: (string | number)[]

let mixedData = ['ABC', 123, true]   // let mixedData: (string | number | boolean)[]


// stringArr[0] = 24 --> Type 'number' is not assignable to type 'string'
// stringArr.push(234)  --> Argument of type 'number' is not assignable to parameter of type 'string'

cars[0] = 52
cars[0] = 'fifty two'
cars.push(235)
// cars.push(true)  --> we can only work with the same data types present in the arr 

cars.pop();
console.log(cars);

cars.pop();
console.log(cars);

cars.pop();
console.log(cars);

cars.pop();
console.log(cars);

// cars.push(false)  --> even if I remove all the elements of the array it stays the same type
// as it was created from the very beginning

let test = []   // let test: any[]

let arrayFromStrings: string[] = []  // an empty array which can be filled up only with strings

// a SPECIFIC positions of the data + a SPECIFIC length - more strict than an ARRAY
let myTuple: [string, number, boolean] = ['someName', 123, true]

let mixed = ['George', 12, false]

mixed = myTuple // no problem

// myTuple = mixed  --> Target requires 3 element(s) but source may have fewer.ts(2322)
// TS knows that   mixed  MAY have fewer or more elements that the strict number of 3 on the tuple

// myTuple[3] = 432  --> Type '432' is not assignable to type 'undefined'
myTuple[1] = 15 // no problem - we can reassign only THE NUMBER with another number


// -----------------------------

let myObj: object
myObj = []    // TS doesn't mind reassigning an object to an ARRAY cuz ARRAY is an object
console.log(typeof myObj)

myObj = cars // TS doesn't mind reassigning an object to an ARRAY cuz ARRAY is an object
myObj = {}  // no problem


const exampleObj = {
    prop1: 'Michael',
    prop2: true
}

// exampleObj.prop1 = 42    --> Type 'number' is not assignable to type 'string'
exampleObj.prop1 = 'John'   // no problem

// !!!  type == interface
// type .... = {}
// interface ... {}

type Guitarist = {                     
    name: string,
    active: boolean,
    albums: (string | number)[]
}

interface Guitarist123 {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

type Violinist = {
    name: string,
    active?: boolean,                  // optional
    albums: (string | number)[]
}

let EddiVanHalen: Guitarist = {
    name: "Eddie",
    active: true,
    albums: [1984, 3123, 'Hello']
}

/*

let Slash: Guitarist = {
    name: "Slash",
    albums: [1988, 1992, 'Heaven']
}

Property 'active' is missing in type '{ name: string; albums: (string | number)[]; }' 
but required in type 'Guitarist'

*/

let SlaviTrifonov: Violinist = {
    name: "Slavi",
    // we are skipping the 'active' property cuz it's optional --> no problem
    albums: ["Ela, ela", "Edno ferari :D:D"]
}

let JP: Guitarist = {
    name: "Jimmy",
    active: true,
    albums: ['1984', 'Burn', 'Hello']
}

// EddiVanHalen = JP      // no problem

// EddiVanHalen.years = 40  --> Property 'years' does not exist on type 'Guitarist'


// ---------------  applying to a function
const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}!`
}

console.log(greetGuitarist(JP));   // Hello Jimmy!
console.log(greetGuitarist(EddiVanHalen));  // Hello Eddie!

let JerryKing: Guitarist123 = {   // this is interface Guitarist123
    name: "Jerry",
    active: true,
    albums: ["Reign in Blood", "Black Magic"]
}

const greetJerry = (guitarist: Guitarist123) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`
    }

    return 'Zdravei be unnamed guitarist'
}

console.log(greetJerry(JerryKing)) // Hello JERRY  --> if I keep the name  | Zdravei be unnamed guitarist --> If I remove the name



// ----------------------  ENUMS
// " Unlike most TS features, ENUMS are not a type-level addition to JS but sth added to the language and runtime."


enum Grade {
    A ,
    B,
    C,
    D,
    E,
    F,
}

console.log(Grade.A);   // 0
console.log(Grade.E);   // 4


enum Grade2 {
    A = 1,
    B,
    C,
    D,
    E,
    F,
}

console.log(Grade2.A);   // 1
console.log(Grade2.E);   // 5