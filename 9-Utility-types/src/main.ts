// Utility types

// 1 - Partial -  we can update just 1 of the properties of an object

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

// keyword  'Partial'
const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate }
}


const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
}

console.log(updateAssignment(assign1, { grade: 93 }))  // {studentId: 'compsci123', title: 'Final Project', grade: 93}

const assignGraded: Assignment = updateAssignment(assign1, { grade: 100 })

console.log(assignGraded);  // {studentId: 'compsci123', title: 'Final Project', grade: 100}



// 2 - Required and Readonly  - all of the properties are required, not just 1 

// keyword  'Required'
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database, etc..
    return assign
}

// keyword  'Readonly'
const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true
}

/*

assignVerified.grade = 88  //  Cannot assign to 'grade' because it is a read-only property.

---
recordAssignment(assignGraded)

Argument of type 'Assignment' is not assignable to parameter of type 'Required<Assignment>'.
  Types of property 'verified' are incompatible.
    Type 'boolean | undefined' is not assignable to type 'boolean'.
      Type 'undefined' is not assignable to type 'boolean'.

*/

recordAssignment({ ...assignGraded, verified: true })  // it's ok now cuz it has ALL THE PROPERTIES


// 3 - Record type


const hexColorMap: Record<string, string> = {  // keys - strings  && values - strings
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
}

// creating a string literal type
type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {   // ok
    Sara: "B",
    // Kelly: "Z" --> Type '"Z"' is not assignable to type 'LetterGrades'.
    Kelly: "U"
}



// ---------
interface Grades {
    assign1: number,
    assign2: number,

}


const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 75, assign2: 15 }
}

//  --------------------- 4,5  -        Pick and Omit      ---------------------


// keyword 'pick'

// picking the properties we would like to use
type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "k123",
    grade: 85,
}

// ------------



// keyword 'omit'

// choosing the properties we would like to omit


type AssignPreview = Omit<Assignment, "grade" | "verified">  // omitting 'grade' and 'verified' from the Assignment interface

const preview: AssignPreview = {
    studentId: "k123",
    title: "Final project"
}


// All of the above work with INTERFACES !!!


// ----------------------------------------- // -------------------------------------------// ------------------------ //

// ------------------------- 6, 7 -  Exclude & Extract -------------------------


// keyword 'Exclude'
type adjustedGrade = Exclude<LetterGrades, "U"> // Excluding "U"


// keyword 'Extract'
type highGrades = Extract<LetterGrades, "A" | "B">  // ONLY "A" and "B"


// ---------------- 8 - Non-nullable ------------------

type AllPossibleGrades = 'Dave' | "John" | null | undefined


// keyword 'NonNullable'
type NamesOnly = NonNullable<AllPossibleGrades> // 'Dave' | "John"   -->  null | undefined  are EXCLUDED


// -------------- // ----------------- // ----------------------- //
// 9 -  ReturnType

type NewAssign = { title: string, points: number }  // create this ahead of time before creating a fn

const createNewAssign = (title: string, points: number): NewAssign => {
    return { title, points }
}

// keyword 'Extract'
// type NewAssign = ReturnType<typeof createNewAssign>  // Type alias 'NewAssign' circularly references itself.


const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign)


// 10  - Parameters


type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)

console.log(tsAssign2);  // {title: 'Generics', points: 100}




// 11 - Awaited - helps us with the return type of a Promise

interface User { 
    id: number,
    name: string,
    username: string, 
    email: string
}


const fetchUsers = async (): Promise<User[]> => { // return type is a Promise and will be an array of users
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })

    return data
}


// When we use 'Awaited' then we remove the promise-like nature of the this type!
// And we have only the result instead !! 
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>


fetchUsers().then(users => console.log(users))






























