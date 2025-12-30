//1️⃣ Variables & Data Types
const myName = "Jonathan";
let myAge = 17;
let whetherStudent = true;

console.log(myName);
console.log(myAge);
console.log(whetherStudent);
console.log("----------------------------");

//2️⃣ Arithmetic Operators
let x = 5;
let y = 6;

let add = (x + y);
let subtract = (x - y);
let multiply = (x * y);
let divide = (x / y);

console.log(add);
console.log(subtract);
console.log(multiply);
console.log(divide);
console.log("----------------------------");

//3️⃣ String Concatenation
const firstName = "Jonathan";
const lastName = "Saint";

console.log(firstName, lastName);
console.log("----------------------------");

//4️⃣ Comparison Operators
let r = 45;
let l = 68;

console.log("Equal to:",r == l);
console.log("Equal value and equal type:",r === l);
console.log("Not equal:",r != l);
console.log("Greater than",r > l);
console.log("Less than:",r < l);

console.log("----------------------------");

//5️⃣ Conditional Statements
let age = 19;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

console.log("----------------------------");

//6️⃣ Switch Statement
let day = 4;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day.");
}

console.log("----------------------------");

//7️⃣ Loops
//? i = 1  ➡ start counting from 1
//? i <= 10 ➡ keeps looping until 10
//? i++  ➡ increase i by 1 each time
for (let i = 1; i <= 10; i++) { //!infinite loop created without i++
    console.log(i);
}
console.log("----------------------------");

//While looping for decreasing numbers.
let i = 10;

while (i >= 1) { //?condition ➡ i >= 1
    console.log(i); //?prints the number
    i--; //?decrease i by 1 and stop when i becomes 0
}
//! forgetting to decrease with (i--) creates an infinite loop.
console.log("----------------------------");

//8️⃣ Arrays
let favoriteFood = ["Pizza", "Eggos", "Chicken", "Meat", "Juice"];
console.log("Entire Array:", favoriteFood);
console.log("First item:", favoriteFood[0]);
console.log("Last item:", favoriteFood[4]);

console.log("----------------------------");

//9️⃣ Objects
//! Greetings from the whole Stranger things cast
const person = [
    { name: "Lucas Sinclair", age: 16, isStudent: true },
    { name: "Dustin Henderson", age: 16, isStudent: true },
    { name: "Michael Wheeler", age: 17, isStudent: true },
    { name: "Will Byers", age: 16, isStudent: true },
    { name: "Jane Hopper", age: 15, isStudent: true },
    { name: "Max Mayfield", age: 16, isStudent: true },
    { name: "Jim Hopper", age: 38, isStudent: false },
    { name: "Murray Bauman", age: 42, isStudent: false },
    { name: "Robin Buckley", age: 19, isStudent: false },
    { name: "Erica Sinclair", age: 10, isStudent: true },
    { name: "Steve Harrington", age: 18, isStudent: false },
    { name: "Nancy Wheeler", age: 18, isStudent: false },
    { name: "Jonathan Byers", age: 18, isStudent: false },
    { name: "Joyce Byers", age: 37, isStudent: false }
]
for (let i = 0; i < person.length; i++) {
    console.log("Name:", person[i].name,", Age:", person[i].age,", School ongoing:", person[i].isStudent);
}

console.log("----------------------------");

//🔟 Bonus Challenge (Optional)
const num = [34, 56, 74, 58, 93, 642, 84, 47, 64, 23, 45, 60];

for (i = 0; i < num.length; i = i + 1) {
    if (num[i] % 2 === 0) {
        console.log(num[i]);
    }
}

/*
✔ Runs without errors 
✔ Uses proper JavaScript syntax 
✔ Contains comments explaining your logic 
✔ Uses let and const appropriately 
✔ Outputs results clearly using console.log()
*/