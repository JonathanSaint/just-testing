## 📘 JavaScript Assignment — JavaScript Functions Deep Dive (Week 4)

**Due:** Next Saturday
**Topic:** Function Declarations, Function Expressions, Hoisting, Multiple Return Values, Functions as Values

---

## ⭐ Instructions

Complete all the tasks below in a **single JavaScript file** named:

```
week4_javascript_functions_assignment.js
```

For **each task**:

* Write valid JavaScript code
* Use `console.log()` to display output
* Add **comments** explaining what each part of the code does
* Run the file in the browser console or Node.js

---

## 📝 Assignment Tasks

### 1️⃣ Function Declarations & Hoisting

**Scenario:**
A system calls a function before it is defined in the code.

**Problem to Solve:**

1. Create a **function declaration** named `sayHello`
2. Call the function **before** it is defined
3. Print `"Hello, World!"` to the console
4. Add comments explaining **why this works**

---

### 2️⃣ Function Expressions & No Hoisting

**Scenario:**
A developer mistakenly calls a function before assigning it to a variable.

**Problem to Solve:**

1. Create a **function expression** called `sayHi`
2. Try calling it **before** the function is defined (comment this out)
3. Call it **after** the definition
4. Explain in comments **why hoisting does not work here**

---

### 3️⃣ Arrow Functions Comparison

**Scenario:**
Your team wants shorter syntax for simple functions.

**Problem to Solve:**

1. Write a normal function that adds two numbers
2. Rewrite the same function using an **arrow function**
3. Call both and log the results

---

### 4️⃣ Returning Multiple Values (Using Arrays)

**Scenario:**
A calculator needs to return more than one result.

**Problem to Solve:**

1. Create a function called `calculate`
2. Accept two numbers as parameters
3. Return **sum**, **difference**, and **product** using an **array**
4. Access and log each returned value

---

### 5️⃣ Returning Multiple Values (Using Objects)

**Scenario:**
A system needs named results for clarity.

**Problem to Solve:**

1. Create a function called `getUserInfo`
2. Return an object with:

   * `name`
   * `age`
   * `isStudent`
3. Access each property and log it

---

### 6️⃣ Functions as Values (Storing in Variables)

**Scenario:**
Functions need to be passed around like data.

**Problem to Solve:**

1. Assign a function to a variable called `greet`
2. Call the function using the variable
3. Log a greeting message

---

### 7️⃣ Functions as Arguments (Callback Functions)

**Scenario:**
A system performs an action after another task finishes.

**Problem to Solve:**

1. Create a function called `runTask`
2. Accept another function as a parameter
3. Execute the passed-in function
4. Demonstrate this with a callback

---

### 8️⃣ Returning a Function (Higher-Order Function)

**Scenario:**
A function generates other functions dynamically.

**Problem to Solve:**

1. Create a function called `multiplier`
2. It should return another function
3. The returned function multiplies a number by a preset value
4. Demonstrate usage with different multipliers

---

### 9️⃣ Immediately Invoked Function Expression (IIFE)

**Scenario:**
Some code should run immediately without being reused.

**Problem to Solve:**

1. Create an IIFE
2. Log `"IIFE Executed"` to the console
3. Explain why IIFEs are useful

---

### 🔟 Bonus Challenge (Optional)

**Scenario:**
A bug occurs due to misunderstanding hoisting.

**Problem to Solve:**

1. Write a function declaration and a function expression
2. Call both before they are defined
3. Observe and comment what happens
4. Explain the difference clearly in comments

---

## ✅ Before Submitting

Make sure your file:

✔ Runs without errors (except commented examples)
✔ Demonstrates function hoisting correctly
✔ Returns multiple values properly
✔ Treats functions as first-class values
✔ Contains clear, meaningful comments
✔ Uses `console.log()` to show outputs

---

## 🧠 What This Assignment Tests

✔ Deep understanding of **function behavior**
✔ Knowledge of **hoisting rules**
✔ Ability to return and destructure data
✔ Comfort using **functions as data**
✔ Readiness for **real-world JavaScript**
