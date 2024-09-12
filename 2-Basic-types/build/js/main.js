"use strict";
let myName = 'Betty';
myName = '435';
let randomNumber;
let isLoading;
randomNumber = 234;
isLoading = true;
let album; // !!! Accepts any types 
album = 'Forgive them';
album = 1987;
album = true;
let age; // union types
age = 52;
age = 'forty';
age = false;
let postId;
let isActive;
let re = /\w+/g; // TS infers this is a RegExp
const sum = (a, b) => {
    return a + b;
};
console.log(sum(5, 19));
const sumNumberAndString = (a, b) => {
    return a + b;
};
console.log(sumNumberAndString(15, "5")); // 155 - all good both in TS and JS
