"use strict";
// Utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// keyword  'Partial'
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 93 })); // {studentId: 'compsci123', title: 'Final Project', grade: 93}
const assignGraded = updateAssignment(assign1, { grade: 100 });
console.log(assignGraded); // {studentId: 'compsci123', title: 'Final Project', grade: 100}
// 2 - Required and Readonly  - all of the properties are required, not just 1 
// keyword  'Required'
const recordAssignment = (assign) => {
    // send to database, etc..
    return assign;
};
// keyword  'Readonly'
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
/*

assignVerified.grade = 88  //  Cannot assign to 'grade' because it is a read-only property.

---
recordAssignment(assignGraded)

Argument of type 'Assignment' is not assignable to parameter of type 'Required<Assignment>'.
  Types of property 'verified' are incompatible.
    Type 'boolean | undefined' is not assignable to type 'boolean'.
      Type 'undefined' is not assignable to type 'boolean'.

*/
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true })); // it's ok now cuz it has ALL THE PROPERTIES
// 3 - Record type
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const finalGrades = {
    Sara: "B",
    // Kelly: "Z" --> Type '"Z"' is not assignable to type 'LetterGrades'.
    Kelly: "U"
};
const gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 75, assign2: 15 }
};
const score = {
    studentId: "k123",
    grade: 85,
};
const preview = {
    studentId: "k123",
    title: "Final project"
};
const createNewAssign = (title, points) => {
    return { title, points };
};
// keyword 'Extract'
// type NewAssign = ReturnType<typeof createNewAssign>  // Type alias 'NewAssign' circularly references itself.
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2); // {title: 'Generics', points: 100}
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
