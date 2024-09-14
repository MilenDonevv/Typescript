"use strict";
// Index Signatures
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: +50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
const student = {
    name: "Peter",
    GPA: 3.5,
    classes: [100, 200]
};
const student1 = {
    name: "Michael",
    GPA: 4.5,
    classes: [200, 300]
};
// console.log(student1.test)  // undefined  --> this time TS doesn't have a problem
for (const key in student1) {
    console.log(`${key}: ${student1[key]}`); // name: Michael  GPA: 4.5   classes: 200,300
}
for (const key in student1) {
    console.log(`${key}: ${student1[key]}`); // If we comment out [key: string]: string......
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
    console.log(student1[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student1[key]}`);
};
logStudentKey(student1, 'GPA'); // Student GPA: 4.5
logStudentKey(student1, 'name'); // Student name: Michael
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sideHustle: 200
};
// for (const revenue in monthlyIncomes) {
//     console.log(monthlyIncomes[revenue])
// }
// Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Incomes'.
//   No index signature with a parameter of type 'string' was found on type 'Incomes'.
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
