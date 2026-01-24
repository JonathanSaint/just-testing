## 📘 JavaScript Assignment — Functions Deep Dive (Week X)

**Due:** Next Saturday
**Topic:**
Function Scope, Anonymous Functions, Default Parameters, Passing by Value, IIFE

---

## ⭐ Instructions

Complete all the tasks below in a **single JavaScript file** named:

```
weekX_javascript_functions_assignment.js
```

For **each task**:

- Write valid JavaScript code
- Use `console.log()` to show outputs
- Add **comments explaining what is happening**
- Read the **hints carefully** before coding
- Run the file in Node.js or the browser console

⚠️ **Do NOT skip the hints** — they are part of the learning.

---

## 📝 Assignment Tasks

---

## 1️⃣ Function Scope (Local vs Global)

### 📌 Scenario

You are building a messaging app. A message status is set inside a function, but you need to understand whether it can be accessed outside.

### 🧩 Problem to Solve

- Create a global variable called `status` with value `"offline"`
- Create a function called `setStatus`
  - Inside it, create a variable also called `status` with value `"online"`
  - Print the inner `status`

- Outside the function, print `status`

### ❓ Question to Answer (in comments)

- Why are the two outputs different?

### 💡 Hints

- Variables declared inside a function are **local**
- Same variable names ≠ same variable
- Think about **scope boundaries**

---

## 2️⃣ Passing by Value (Very Important)

### 📌 Scenario

A developer expects a function to update a number stored outside the function.

### 🧩 Problem to Solve

- Create a variable `balance` set to `100`
- Create a function `deductBalance`
  - It accepts a parameter
  - Inside, subtract `50` from it
  - Log the value inside the function

- Call the function with `balance`
- Log `balance` after the function call

### ❓ Question to Answer (in comments)

- Why didn’t the original `balance` change?

### 💡 Hints

- Numbers are **primitive values**
- JavaScript passes primitives **by value**
- Changing a parameter does NOT change the original variable

---

## 3️⃣ Default Parameters

### 📌 Scenario

You are creating user profiles. Some users don’t provide a username.

### 🧩 Problem to Solve

- Create a function `createUser`
- It should accept:
  - `username` (default: `"Guest"`)
  - `role` (default: `"user"`)

- Return a string describing the user
- Call the function:
  - With no arguments
  - With one argument
  - With both arguments

### 💡 Hints

- Default parameters are used when arguments are `undefined`
- Order of parameters matters
- Defaults should usually come **after required parameters**

---

## 4️⃣ Anonymous Functions

### 📌 Scenario

A system needs a function for a short, one-time task.

### 🧩 Problem to Solve

- Create a variable called `logMessage`
- Assign it an **anonymous function**
- The function should print `"Message logged"`
- Call the function

### ❓ Question to Answer (in comments)

- Why might anonymous functions be preferred here?

### 💡 Hints

- Anonymous functions have **no name**
- They are often stored in variables
- Very common in callbacks and event handlers

---

## 5️⃣ Functions as Arguments (Callback Intro)

### 📌 Scenario

A system runs a task and then performs an action afterward.

### 🧩 Problem to Solve

- Create a function `runTask`
  - It accepts another function as a parameter
  - It logs `"Task running"`
  - Then calls the passed-in function

- Pass an anonymous function that logs `"Task complete"`

### 💡 Hints

- Functions are **values**
- You can pass them like variables
- The passed function is called a **callback**

---

## 6️⃣ Immediate Invocation (IIFE)

### 📌 Scenario

You want to run setup code once without leaving variables in the global scope.

### 🧩 Problem to Solve

- Write an IIFE that:
  - Declares a variable `appName`
  - Logs `"App started: appName"`

- Try accessing `appName` outside (comment it out)

### ❓ Question to Answer (in comments)

- Why can’t `appName` be accessed outside?

### 💡 Hints

- IIFE = Immediately Invoked Function Expression
- Creates a private scope
- Runs exactly once

---

## 7️⃣ Combining Concepts (Challenge)

### 📌 Scenario

You are calculating prices with tax, but the tax rate should be configurable.

### 🧩 Problem to Solve

- Create a function `createPriceCalculator`
  - It accepts `taxRate`
  - Returns an anonymous function

- The returned function:
  - Accepts `price`
  - Returns the final price including tax

- Create two calculators:
  - One for 10%
  - One for 18%

- Test both

### 💡 Hints

- This uses **closures**
- Returned functions remember values
- This is a **higher-order function**

---

## 🔟 Bonus (Optional) — Think & Explain

In comments, answer:

- Why is returning values better than modifying outer variables?
- When should you use IIFEs today?
- Why are callbacks so common in JavaScript?

---

## ✅ Before Submitting

Make sure your file:

✔ Runs without errors
✔ Uses clear comments
✔ Demonstrates understanding (not guessing)
✔ Uses functions correctly
✔ Shows scope awareness
✔ Uses `console.log()` for output
