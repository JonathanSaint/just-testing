const name = "Arinda Jonathan Saint";
let age = 17;
let isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);

let a = 4;
let b = 9;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

const firstName = "Jonathan";
const lastName = "Arinda";

console.log(lastName, "" + firstName);

let x = 8;
let y = 6;

console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x > y);
console.log(x < y);

let ageOfUser = 17;

if (ageOfUser >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

let day = 3;

switch(day) {
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
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


let i = 10;

while (i >= 1 ) {
    console.log(i);
    i--;
}

const favoriteFoods = ["Pizza", "Chicken", "Juice", "Soda", "Meat"];

console.log(favoriteFoods);
console.log(favoriteFoods[0]);
console.log(favoriteFoods[4]);

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

console.log(person[0].name);
console.log(person[6].age);
console.log(person[4].isStudent);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 29, 487, 48, 266, 36, 217];

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 ) {
        console.log(numbers[i]);
    }
}

