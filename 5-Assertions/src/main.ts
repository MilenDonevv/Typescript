// Type assertion and Type Casting are often used interchangeably - they're referring to the same thing

type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific

let a: One = 'Hello'
let b = a as Two  // less specific
let c = a as Three  // more specific


// a valid syntax but CANNOT be USED in React
let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}


// let myVal: string = addOrConcat(2,2,'concat') 

//      --> Type 'string | number' is not assignable to type 'string'.
//          Type 'number' is not assignable to type 'string

let myVal: string = addOrConcat(2,2,'concat') as string

// Be Careful! TS sees no problem - but a string is returned !
let nextVal: number = addOrConcat(2,2,'concat') as number

// It is possible we make mistakes with Assertions

console.log(nextVal);  // 22
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
(10 as unknown) as string   // CORRECT --> double casting  --> overrules TS



//  ---------------------  Assertions with the DOM

const img = document.querySelector('img')  // INFERS const img: HTMLImageElement | null  - HTMLImageElement
const img2 = document.querySelector('img') as HTMLImageElement
const imgId = document.querySelector('#myId')  // const imgId: Element | null  - Element

const myImg = document.getElementById('#img')  // const myImg: HTMLElement | null  - HTMLElement
const myImg2 = document.getElementById('#img')!    // using a  !  is called 'a non-null assertion' - but - better use Specific HTML element

const nextImage = <HTMLImageElement>document.getElementById('#img')  // valid but WILL NOT work in REACT












