let myName: string = 'Betty'

myName = '435'

let randomNumber: number;
let isLoading: boolean;

randomNumber = 234
isLoading = true


let album: any  // !!! Accepts any types 

album = 'Forgive them'
album = 1987
album = true


let age: number | string | boolean   // union types

age = 52
age = 'forty'
age = false

let postId: string | number
let isActive: number | boolean

let re = /\w+/g // TS infers this is a RegExp


const sum = (a: number, b: number) => {
    return a + b
}

console.log(sum(5, 19))


const sumNumberAndString = (a: number, b: string) => {
    return a + b
}

console.log(sumNumberAndString(15, "5"))  // 155 - all good both in TS and JS