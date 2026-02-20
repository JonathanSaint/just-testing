console.log("Hello, Circle Builder");

let name = "Arinda Jonathan";
let age = 20;

console.log(name);
console.log(age);

let score = 10;
console.log(score);

score = 25;
console.log(score);

const yourName = "Arinda Jonathan";
let yourAge = 17;
let isStudent = true;

console.log(yourName);
console.log(yourAge);
console.log(isStudent);

//Thinking Exercise

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); //This will print 1 because the two numbers are not divisible.

let temperature = 25;

if (temperature > 30) {
  console.log("It's hot");
} else {
  console.log("It's normal");
}

//Exercise 6

score = 85;

if (score >= 90) {
  console.log("Excellent");
} else if (score < 70) {
  console.log("Keep improving");
} else {
  console.log("Good");
}

//?Better Exercise 6

score = 45;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 70) {
  console.log("Good");
} else {
  console.log("Keep improving");
}

let number = 8;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

//Functions

function sayHello() {
  console.log("Hello Circle Builder");
}
sayHello();

// function that accepts a parameter

function greetUser(name) {
  console.log("Hello" + " " + name);
}
greetUser("Arinda");
greetUser("Jonathan");

function add(a, b) {
  return a + b;
}
let result = add(8, 9);
console.log(result);

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
let outcome = isEven(45);
console.log(outcome);

//?Simplified version of 👆

function isEven(number) {
  return number % 2 === 0;
}
let outcome2 = isEven(45);
console.log(outcome);

function getGrade(score) {
  if (score >= 90) {
    return "Excellent";
  } else if (score >= 70) {
    return "Good";
  } else {
    return "Keep improving";
  }
}
console.log(getGrade(95));
console.log(getGrade(80));
console.log(getGrade(50));

for (let i = 1; i < 11; i++) {
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

function sumToNumber(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}
console.log(sumToNumber(8));

let fruits = ["Apple", "Banana", "Orange", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let numbers = [4, 19, 2, 99, 23];

//!Always use arr because it creates a reusable function
function largestNumber(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}
console.log(largestNumber(numbers));

function evenNumberCounter(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }

  return count;
}
console.log(evenNumberCounter(numbers));

//Array Transformation

const nums = [1, 2, 3, 4, 5];

function doubleNumbers(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}

console.log(doubleNumbers([1, 2, 3, 4, 5]));

function getEvenNumbers(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(getEvenNumbers(nums));
