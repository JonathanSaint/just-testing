## 📘 C Programming Assignment — Functions & Syntax (Week 1)

**Due:** Next Saturday
**Topic:** Function Creation, Parameters, Return Values, Function Calls

---

## ⭐ Instructions

Complete all the tasks below in a **single C source file** named:

```
week3_functions_assignment.c
```

For **each task**:

* Write the function
* Call the function at least **twice**
* Use `printf()` to display results
* Add comments explaining what your function does

---

## 📝 Assignment Tasks

### 1️⃣ Welcome Message Function

Create a function called:

```
welcomeUser
```

That:

* Takes a `char name[]`
* Prints:

```
Welcome, <name>!
```

Call it **twice** with different names.

---

### 2️⃣ Number Square Function

Create a function called:

```
squareNumber
```

That:

* Takes one `int` number
* Returns its square

Print the result when called.

**Example:**

```
squareNumber(6) → 36
```

---

### 3️⃣ Temperature Converter (Celsius → Fahrenheit)

Write a function:

```
convertToFahrenheit(float celsius)
```

Use the formula:

```
F = (C × 9 / 5) + 32
```

* Return the Fahrenheit value
* Call it with **3 different** Celsius values

---

### 4️⃣ Email Generator

Create a function:

```
generateEmail
```

That:

* Takes a `char name[]`
* Prints:

```
<name>@gmail.com
```

**Example:**

```
generateEmail("emmanuel") → emmanuel@gmail.com
```

---

### 5️⃣ Check Even or Odd

Write a function:

```
isEven
```

That:

* Takes an `int number`
* Returns:

  * `1` if the number is even
  * `0` if the number is odd

Print `"Even"` or `"Odd"` based on the returned value.

Call it with **5 different numbers**.

---

### 6️⃣ Mini Calculator Function

Create a function:

```
calculate
```

That:

* Takes:

  * `char operator[]` (`"add"`, `"subtract"`, `"multiply"`, `"divide"`)
  * Two `float` numbers `a` and `b`
* Returns the correct result based on the operator

**Examples:**

```
calculate("add", 4, 5) → 9
calculate("multiply", 3, 6) → 18
```

---

### 7️⃣ Bonus Challenge (Optional)

#### Currency Converter

Write a function:

```
convertToDollars(float ugx)
```

Assume:

```
1 USD = 3800 UGX
```

Return the USD amount.

**Example:**

```
convertToDollars(7600) → 2
```

---

## ✅ Before Submitting

Make sure your file:

✔ Compiles without errors
✔ Contains all function calls
✔ Includes comments explaining your logic
✔ Uses meaningful variable and function names
✔ Uses correct C syntax (`#include <stdio.h>`, `main()` function, etc.)
