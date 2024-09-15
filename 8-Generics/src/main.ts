// Generics - sometimes we don't know what types are passing to a function (f.ex) so 
// Generics allow us to provide a placeholder (could be characterizes even as a type of variable) to be even more specific


const stringEcho = (arg: string): string => arg // this is fine but it ONLY works with a string type
// what if we want to add a generic function and we make the arg more abstract so that it could be any type?



const echo = <T>(arg: T): T => arg   // T - type variable   --> now this function is Generic and it works with ANY type ! 


// useful in utility functions
const isObj = <T>(arg: T): boolean => {  // checking if it is an object or not
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(true));  // false
console.log(isObj('John')); // false
console.log(isObj([1, 2, 3, 4])); // false
console.log(isObj({ name: 'John' })); // true
console.log(isObj(null)); // false

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    {
        if (Array.isArray(arg) && !arg.length) {
            return { arg, is: false }
        }
        if ((isObj(arg)) && !Object.keys(arg as keyof T).length) {
            return { arg, is: false }
        }
        return { arg, is: !!arg }  // !!arg - double bang operator - takes a 0 and flips it 2 times and that makes it true or false
    }
}


console.log(isTrue(false))  // {arg: false, is: false}
console.log(isTrue(0))  // {arg: 0, is: false}
console.log(isTrue(true))  // {arg: true, is: true}
console.log(isTrue(1))   // {arg: 1, is: true}
console.log(isTrue('Dave'))   // {arg: 'Dave', is: true}
console.log(isTrue(''))  // {arg: '', is: false}
console.log(isTrue(null))   // {arg: null, is: false}
console.log(isTrue(undefined))  // {arg: undefined, is: false}
console.log(isTrue({}))  // {arg: {…}, is: false}
console.log(isTrue({ name: 'Dave' }))   // {arg: {…}, is: true}
console.log(isTrue([]))   // {arg: Array(0), is: false}
console.log(isTrue([1, 2, 3]))  // {arg: Array(3), is: true}
console.log(isTrue(NaN))  // {arg: NaN, is: false}
console.log(isTrue(-0))   // {arg: -0, is: false}




interface BoolCheck<T> {
    value: T,
    is: boolean
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    { 
        if (Array.isArray(arg) && !arg.length) {
            return { value: arg, is: false }
        }
        if ((isObj(arg)) && !Object.keys(arg as keyof T).length) {
            return { value: arg, is: false }
        }
        return { value: arg, is: !!arg }  // !!arg - double bang operator - takes a 0 and flips it 2 times and that makes it true or false
    }
}

//  ------------  Extending 
interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T) :T => { // we're narrowing the generic type to such that HAS to HAVE a prop id
    // process the user with logic here
    return user
}

console.log(processUser({id: 1, name: 'Dave'})) // {id: 1, name: 'Dave'}
// console.log(processUser({name: 'Dave'}))  // Object literal may only specify known properties, and 'name' does not exist in type 'HasID'


// --------------------------------------------


const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
]


// T - a user object which has a prop id, 
// K - the keys of that user object
// T[K][] - an array of the values from these user's keys
// f.ex. - searching for the "email" keys and get an array of all the emails of all the users

const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K) : T[K][] => {
    return users.map(user => user[key])
}

console.log(getUsersProperty(usersArray, "email"));  // ['Sincere@april.biz', 'Shanna@melissa.tv']
console.log(getUsersProperty(usersArray, "username"));  // ['Bret', 'Antonette']


// ---------- using a generic in a Class

class StateObject <T> {
    private data: T  // data will be the same type as specified in the Generic above

    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}


// const store = new StateObject(15) // if the data type is a number, below we cannot set it a string
const store = new StateObject("Dave") // if the data type is a string, below we cannot set it a number

console.log(store.state);  // John

store.state = "Livingston"  // it's ok cuz above we used a string --> will not accept any other type of data
// store.state = 12   --> not ok cuz above we used a string, therefore any other type is not accepted

// -----------------

// no we are specifying exactly what type we're using in our state
// it is accepting any string | number | boolean as long as it is in an array

const myState = new StateObject<(string | number | boolean)[]>([15]) // default parameter - [15]

console.log(myState.state = (['Dave', 42, true]))  // ['Dave', 42, true] 

