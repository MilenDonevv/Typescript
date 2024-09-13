"use strict";
// Type assertion and Type Casting are often used interchangeably - they're referring to the same thing
// convert to more or less specific
let a = 'Hello';
let b = a; // less specific
let c = a; // more specific
// a valid syntax but CANNOT be USED in React
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
// let myVal: string = addOrConcat(2,2,'concat') 
//      --> Type 'string | number' is not assignable to type 'string'.
//          Type 'number' is not assignable to type 'string
let myVal = addOrConcat(2, 2, 'concat');
// Be Careful! TS sees no problem - but a string is returned !
let nextVal = addOrConcat(2, 2, 'concat');
// It is possible we make mistakes with Assertions
console.log(nextVal); // 22
console.log(typeof nextVal); // nextVal is a STRING !!!
/*

10 as string  - a simple assertion

Conversion of type 'number' to type 'string' may be a mistake
because neither type sufficiently overlaps with the other.
If this was intentional, convert the expression to 'unknown' first.

Unknown - very similar to 'any' - except I can't use Unknown anywhere

UNLESS

we're using 'FORCE CASTING a.k.a. DOUBLE CASTING' - two assertions

*/
// 10 as string  - a simple assertion - WRONG
10; // CORRECT --> double casting  --> overrules TS
//  ---------------------  Assertions with the DOM
const img = document.querySelector('img'); // INFERS const img: HTMLImageElement | null  - HTMLImageElement
const img2 = document.querySelector('img');
const imgId = document.querySelector('#myId'); // const imgId: Element | null  - Element
const myImg = document.getElementById('#img'); // const myImg: HTMLElement | null  - HTMLElement
const myImg2 = document.getElementById('#img'); // using a  !  is called 'a non-null assertion' - but - better use Specific HTML element
const nextImage = document.getElementById('#img'); // valid but WILL NOT work in REACT
