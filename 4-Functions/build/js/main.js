"use strict";
// Type Aliases
// we cannot do these with interfaces ! They are like classes for instances
// literal types
let myName; // setting myName to be ONLY Equal to 'George'
// myName = 'Peter'   -->    Type '"Peter"' is not assignable to type '"George"
let userName; // username could be only 1 of these 3
// functions
// const add = (a, b) => {     // Parameter 'a' implicitly has an 'any' type
//     return a + b
// }
const add = (a, b) => {
    return a + b; // inferring it returns a number
};
const add2 = (a, b) => {
    return a + b;
};
// a function that doesn't return anything is called a   void   function
const logMessage = (message) => {
    console.log(message);
};
// const logMessage2 = (message: any): void => {    
//  console.log(message)
// }
// successfully logs all of these values
logMessage('Hello');
logMessage(234);
logMessage(true);
logMessage([23]);
let subtract = function (c, d) {
    return c - d;
};
// the above 2 are exactly the same
let multiply = function (c, d) {
    return c * d;
};
logMessage(multiply(2, 4)); // 8
logMessage(subtract(17, 10)); // 7
// optional parameters for functions
//          const addAll = (a: number, b: number, c?: number): number => {
//              return a + b + c   // 'c' is possibly 'undefined'.  // (parameter) c: number | undefined
//          }
// we have to put a type guard --> it narrows down the type of value assigned to the variable
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default value for "c" is 2. 
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMessage(addAll(2, 3, 4)); // 9
logMessage(addAll(2, 3)); // 5
logMessage(sumAll(5, 6)); // 13       --> 5 + 6 + 2
logMessage(sumAll(5, 6, 7)); //  18
// default values will not work when defining function signatures like the above ones
// rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMessage(total(1, 2, 3, 4)); // 10
const total2 = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMessage(total2(10, 5, 18)); // 33  --> 10 + the rest
// -------------------------- the NEVER type
// the never return type is for functions with endless loops and other types which don't return anything
// having "void" is much better than having a NEVER type 
// returns the NEVER type   -      const createError: (errMessage: string) => never
const createError = (errMessage) => {
    throw new Error(errMessage);
};
// use of the NEVER type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    // if we don't use the createError below, we get the following error
    // Function lacks ending return statement and return type does not include 'undefined'
    return createError('This should never happen!');
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
