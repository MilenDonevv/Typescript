// Type Aliases

type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    // albums: (string | number)[]
    albums: stringOrNumberArray     // this is type alias inside another type alias
}


type UserId = stringOrNumber // this is also correct


// we cannot do these with interfaces ! They are like classes for instances


// literal types
let myName: 'George'  // setting myName to be ONLY Equal to 'George'
// myName = 'Peter'   -->    Type '"Peter"' is not assignable to type '"George"


let userName: 'John' | "Amy" | "Dave"   // username could be only 1 of these 3



// functions

// const add = (a, b) => {     // Parameter 'a' implicitly has an 'any' type
//     return a + b
// }

const add = (a: number, b: number) => {
    return a + b    // inferring it returns a number
}

const add2 = (a: number, b: number): number => {    // specifically adding it retursn a number
    return a + b
}


// a function that doesn't return anything is called a   void   function

const logMessage = (message: any) => {    // const logMessage: (message: any) => void
    console.log(message)
}

// const logMessage2 = (message: any): void => {    
//  console.log(message)
// }

// successfully logs all of these values
logMessage('Hello');
logMessage(234);
logMessage(true);
logMessage([23]);


let subtract = function (c: number, d: number): number {
    return c - d
}

type mathFunction = (a: number, b: number) => number

interface mathFunction2 {
    (a: number, b: number): number
}

// the above 2 are exactly the same

let multiply: mathFunction = function (c, d) { // let multiply: mathFunction  | (local function)(c: number, d: number): number
    return c * d
}

logMessage(multiply(2, 4));   // 8
logMessage(subtract(17, 10));  // 7


// optional parameters for functions

//          const addAll = (a: number, b: number, c?: number): number => {
//              return a + b + c   // 'c' is possibly 'undefined'.  // (parameter) c: number | undefined
//          }


// we have to put a type guard --> it narrows down the type of value assigned to the variable
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }

    return a + b
}

// default value for "c" is 2. 
const sumAll = (a: number, b: number, c: number = 2): number => {

    return a + b + c
}

logMessage(addAll(2, 3, 4))  // 9
logMessage(addAll(2, 3))  // 5
logMessage(sumAll(5, 6))  // 13       --> 5 + 6 + 2
logMessage(sumAll(5, 6, 7)) //  18


// default values will not work when defining function signatures like the above ones



// rest Parameters

const total = (...nums: number[]): number => {        // not ideal use of it --> ...rest should go AT THE END
    return nums.reduce((prev, curr) => prev + curr)
}

logMessage(total(1, 2, 3, 4))  // 10


const total2 = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMessage(total2(10, 5, 18)) // 33  --> 10 + the rest


// -------------------------- the NEVER type

// the never return type is for functions with endless loops and other types which don't return anything
// having "void" is much better than having a NEVER type 



// returns the NEVER type   -      const createError: (errMessage: string) => never
const createError = (errMessage: string) => {
    throw new Error(errMessage)
}



// use of the NEVER type
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (typeof value === 'number') return 'number'
    // if we don't use the createError below, we get the following error
    // Function lacks ending return statement and return type does not include 'undefined'
    return createError('This should never happen!')
}


// custom type guard

const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false
}


