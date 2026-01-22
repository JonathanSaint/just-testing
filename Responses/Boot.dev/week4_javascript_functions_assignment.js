// 1️⃣ Function Declarations & Hoisting

//Function call before declaration
//JavaScript scans file for the function and calls it which is not for python. 
sayHello();

function sayHello() {
    console.log("Hello, World!"); //Prints Hello, World! on to the console.
}

//2️⃣ Function Expressions & No Hoisting

//! This works beacause javascript hoists the function.
/*
sayHi();

function sayHi() {
    console.log("Hi!")
}
*/

//This out puts an error because the function is not hoisted
//instead the valuable is hoisted and is undefined.


//Function expression
const sayHi = function() {
    console.log("Hi!");
}
sayHi();

//3️⃣ Arrow Functions Comparison

function addTwoNumbers(a, b) {
    return a + b;
}
console.log(addTwoNumbers(5, 8));
 
//Arrow function of the same expression.
const addTwoNumbs = (a, b) => {
    return a + b;
}
console.log(addTwoNumbs(6, 2));

//4️⃣ Returning Multiple Values (Using Arrays)

const calculate = (x, y) => {
    return [x + y, x - y, x * y];
}
console.log(calculate(5, 6));

// 5️⃣ Returning Multiple Values (Using Objects)
const getUserInfo = () => {
    return {
        name: "Arinda Jonathan",
        age: 17,
        isStudent: true
    };
}
console.log(getUserInfo());

//6️⃣ Functions as Values (Storing in Variables)

const greet = greetingMessage = () => {
    return "Hi there";
}
console.log(greet(greetingMessage()));

//7️⃣ Functions as Arguments (Callback Functions)

//Function that takes a function as a parameter
function runTask(callback) {
    console.log("Task is running...");

    //execution of passed in  function
    callback();

    console.log("Task complete!");
}

//Call back function
function informUser() {
    console.log("Notification: Your task has been completed successfully.");
}

//calling of function thats takes call back function as an argument. 
runTask(informUser);


//8️⃣ Returning a Function (Higher-Order Function)
