// Index Signatures

// interface TransacrionObj { 
//     Pizza: number,
//     Books: number,
//     Job: number
// }

interface TransacrionObj {

    // an index signatures
    // we could make these f.ex. readonly
    [index: string] : number  // all of the keys are gonna be strings with all their values - numbers

    Pizza: number,
    Books: number,
    Job: number

}



const todaysTransactions: TransacrionObj = {
    Pizza: -10,
    Books: -5,
    Job: +50
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])


let prop: string = 'Pizza'


/*

console.log(todaysTransactions[prop]) // --> we haven't created an index signature and we're trying to access this dynamically

Element implicitly has an 'any' type because expression of type 'string' 
can't be used to index type 'TransacrionObj'.
No index signature with a parameter of type 'string' was found on type 'TransacrionObj'


const todaysNet = (transactions: todaysTransactions): number => {
    let total = 0

    for (const transaction in transactions) {
        total += transactions[transaction] 
    }

    return total
}


we have the same mistake again with transactions[transaction]

Element implicitly has an 'any' type because expression of type 'string' 
can't be used to index type 'TransacrionObj'.
No index signature with a parameter of type 'string' was found on type 'TransacrionObj'

-----

We can fix this by providing an index signature  --> look line 13


*/

interface Student {
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "Peter",
    GPA: 3.5,
    classes: [100, 200]
}

// console.log(student.test); --> Property 'test' does not exist on type 'Student'


interface Student1 {
    [key: string]: string | number | number[] | undefined  // [index: string] : string.......

    name: string,
    GPA: number,
    classes?: number[]
}

const student1: Student1 = {
    name: "Michael",
    GPA: 4.5,
    classes: [200, 300]
}

// console.log(student1.test)  // undefined  --> this time TS doesn't have a problem

for (const key in student1) {
    console.log(`${key}: ${student1[key]}`) // name: Michael  GPA: 4.5   classes: 200,300
}

for (const key in student1) {
    console.log(`${key}: ${student1[key as keyof Student1]}`) // If we comment out [key: string]: string......
}

// keyof --> creates a union type which is the specific key literals
// meaning --> a union type of 'name', 'GPA' and classes


// ------------------------


/*

Object.keys(student1)  // returns an ARRAY of the KEYS in the 'student1' obj

Object.keys(student1).map(key => {
    console.log(student1[key as keyof student1]);
    
})

Type 'symbol' cannot be used as an index type.
'student1' refers to a value, but is being used as a type here. Did you mean 'typeof student1'?

*/


Object.keys(student1).map(key => {
    console.log(student1[key as keyof typeof student1]);
    
})


const logStudentKey = (student: Student1, key: keyof Student1): void => {
    console.log(`Student ${key}: ${student1[key]}`)
}

logStudentKey(student1, 'GPA');  // Student GPA: 4.5
logStudentKey(student1, 'name');  // Student name: Michael

// -----------------------------------------

// interface Incomes {
//     [key: string]: number
// }


type Streams = 'salary' | 'bonus' | 'sideHustle'

type Incomes = Record<Streams, number>  // Record ---> utility type !!!!!!!!

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sideHustle: 200
}

// for (const revenue in monthlyIncomes) {
//     console.log(monthlyIncomes[revenue])
// }

// Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Incomes'.
//   No index signature with a parameter of type 'string' was found on type 'Incomes'.


for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}








