"use strict";
let stringArr = ['one', 'two', 'three']; // let stringArr: string[]
let cars = ['Mercedes', 911, 'BMW']; // let cars: (string | number)[]
let mixedData = ['ABC', 123, true]; // let mixedData: (string | number | boolean)[]
// stringArr[0] = 24 --> Type 'number' is not assignable to type 'string'
// stringArr.push(234)  --> Argument of type 'number' is not assignable to parameter of type 'string'
cars[0] = 52;
cars[0] = 'fifty two';
cars.push(235);
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
let test = []; // let test: any[]
let arrayFromStrings = []; // an empty array which can be filled up only with strings
// a SPECIFIC positions of the data + a SPECIFIC length - more strict than an ARRAY
let myTuple = ['someName', 123, true];
let mixed = ['George', 12, false];
mixed = myTuple; // no problem
// myTuple = mixed  --> Target requires 3 element(s) but source may have fewer.ts(2322)
// TS knows that   mixed  MAY have fewer or more elements that the strict number of 3 on the tuple
// myTuple[3] = 432  --> Type '432' is not assignable to type 'undefined'
myTuple[1] = 15; // no problem - we can reassign only THE NUMBER with another number
// -----------------------------
let myObj;
myObj = []; // TS doesn't mind reassigning an object to an ARRAY cuz ARRAY is an object
console.log(typeof myObj);
myObj = cars; // TS doesn't mind reassigning an object to an ARRAY cuz ARRAY is an object
myObj = {}; // no problem
const exampleObj = {
    prop1: 'Michael',
    prop2: true
};
// exampleObj.prop1 = 42    --> Type 'number' is not assignable to type 'string'
exampleObj.prop1 = 'John'; // no problem
let EddiVanHalen = {
    name: "Eddie",
    active: true,
    albums: [1984, 3123, 'Hello']
};
/*

let Slash: Guitarist = {
    name: "Slash",
    albums: [1988, 1992, 'Heaven']
}

Property 'active' is missing in type '{ name: string; albums: (string | number)[]; }'
but required in type 'Guitarist'

*/
let SlaviTrifonov = {
    name: "Slavi",
    // we are skipping the 'active' property cuz it's optional --> no problem
    albums: ["Ela, ela", "Edno ferari :D:D"]
};
let JP = {
    name: "Jimmy",
    active: true,
    albums: ['1984', 'Burn', 'Hello']
};
// EddiVanHalen = JP      // no problem
// EddiVanHalen.years = 40  --> Property 'years' does not exist on type 'Guitarist'
// ---------------  applying to a function
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(JP)); // Hello Jimmy!
console.log(greetGuitarist(EddiVanHalen)); // Hello Eddie!
let JerryKing = {
    name: "Jerry",
    active: true,
    albums: ["Reign in Blood", "Black Magic"]
};
const greetJerry = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return 'Zdravei be unnamed guitarist';
};
console.log(greetJerry(JerryKing)); // Hello JERRY  --> if I keep the name  | Zdravei be unnamed guitarist --> If I remove the name
// ----------------------  ENUMS
// " Unlike most TS features, ENUMS are not a type-level addition to JS but sth added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["D"] = 3] = "D";
    Grade[Grade["E"] = 4] = "E";
    Grade[Grade["F"] = 5] = "F";
})(Grade || (Grade = {}));
console.log(Grade.A); // 0
console.log(Grade.E); // 4
var Grade2;
(function (Grade2) {
    Grade2[Grade2["A"] = 1] = "A";
    Grade2[Grade2["B"] = 2] = "B";
    Grade2[Grade2["C"] = 3] = "C";
    Grade2[Grade2["D"] = 4] = "D";
    Grade2[Grade2["E"] = 5] = "E";
    Grade2[Grade2["F"] = 6] = "F";
})(Grade2 || (Grade2 = {}));
console.log(Grade2.A); // 1
console.log(Grade2.E); // 5
