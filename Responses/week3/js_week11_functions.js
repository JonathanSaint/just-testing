/* 
Scenario:
Developers want reusable blocks of code.

Problem to Solve:
Write functions that perform common tasks.
 */

const students = [
    {name: "Arinda Jonathan", age: 17, studentStatus: true},
    {name: "Jane Hopper", age: 16, studentStatus: true},
    {name: "Michael Wheeler", age: 18, studentStatus: true},
    {name: "Chris Rock", age: 24, studentStatus: false},
    {name: "JJ Maybank", age: 26, studentStatus: false},
    {name: "Emily Fisher", age: 19, studentStatus: true},
    {name: "Mwesigye Timothy", age: 20, studentStatus: false},
    {name: "Narinda Renee", age: 25, studentStatus: true},
    {name: "Paul Scholes", age: 15, studentStatus: false},
    {name: "Lucas Sinclair", age: 18, studentStatus: true},
    {name: "Max Mayfield", age: 28, studentStatus: true},
]

function printsAdultStudents() {
    for (i = 0; i < students.length; i++) {
        if (students[i].age >= 18 && students[i].studentStatus == true) {
            console.log(students[i].name);
        }
    }
}
printsAdultStudents()