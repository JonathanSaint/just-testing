// 1️⃣ Function Scope (Local vs Global)

/* 
📌 Scenario
You are building a messaging app. A message status is set inside a function, but you need to understand whether it can be accessed outside.
*/

let status = "offline";

function setStatus() {
    let status = "online";
    return status;
}
console.log(setStatus());
/*
The two outputs are different because the first status is 
set to a global scope and the second one to local meaning it 
only exists inside the function t has been declared in.
*/

/*
2️⃣ Passing by Value (Very Important)
📌 Scenario
A developer expects a function to update a number stored outside the function.
*/

let balance = 100;

function debutBalance(balance) {
    balance = balance - 50;
    console.log(balance);
}
debutBalance(balance)
console.log(balance);
/*
The original balance did not change because 
numbers in javascript are primitive meaning they 
can be reassigned but the original value does not 
change.
*/

/*
3️⃣ Default Parameters
📌 Scenario
You are creating user profiles. Some users don’t provide a username.
*/

function createUser(username = "Guest", role = "user") {
    return `My user name is ${username} and my role is ${role} `;
}
console.log(createUser());
console.log(createUser("Michael"));
console.log(createUser("EmilyDean", "admin"));

/*
4️⃣ Anonymous Functions
📌 Scenario
A system needs a function for a short, one-time task.
*/

const logMessage = function () {
    console.log("Message Logged");
}
logMessage();
/*
Anonymous functions are very important in this instance 
because they are not reusable and it is used to print a 
message to the user only once that does not need to be 
reused later
*/

/*
5️⃣ Functions as Arguments (Callback Intro)
📌 Scenario
A system runs a task and then performs an action afterward.
*/

function runTask(callback) {
    console.log("Task running");
    callback();
}
runTask(
    callback = function () {
        console.log("Task complete");
    }
);

/*
6️⃣ Immediate Invocation (IIFE)
📌 Scenario
You want to run setup code once without leaving variables in the global scope.
*/

(function () {
    let appName = "Circle";
    console.log(`App started: ${appName} `);
})();
//Trying to access appName outside the IIFE
//console.log(appName);
/*
AppName cannot be accessed outside of the IIFE because 
it is declared inside of it which make it only accessible 
inside the function.
*/

/*
7️⃣ Combining Concepts (Challenge)
📌 Scenario
You are calculating prices with tax, but the tax rate should be configurable.
*/

const price = 4000;

function createPriceCalculator(taxRate) {
     return function (price) {
        return price + price * taxRate;
    }
}
const tenPercent = createPriceCalculator(0.1);
const eighteenPercent = createPriceCalculator(0.18);
console.log(tenPercent(8900));
console.log(eighteenPercent(8900));

//🔟 Bonus (Optional) — Think & Explain

/*
Returning values is better than modifying outer variables because it causes less clatter in the code and does not mess up scope
I should use IIFE's when a function needs to run once.
Call backs are so common in javascript because most functions are dependent on others.
*/

/*
✔ Runs without errors
✔ Uses clear comments 
✔ Demonstrates understanding (not guessing) 
✔ Uses functions correctly 
✔ Shows scope awareness 
✔ Uses console.log() for output
*/