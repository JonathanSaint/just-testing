## 📘 C# Assignment — Methods & Syntax (Week 1)

**Due:** Next Saturday
**Topic:** Method Creation, Parameters, Return Values, Method Calls

---

## ⭐ Instructions

Complete all the tasks below in a **single C# console application file** named:

```
Week1_Methods_Assignment.cs
```

For **each task**:

* Write the method
* Call the method at least **twice**
* Use `Console.WriteLine()` to show results
* Add comments explaining what your method does

---

## 📝 Assignment Tasks

### 1️⃣ Welcome Message Method

Create a method called:

```
WelcomeUser
```

That:

* Takes a `string name`
* Prints:

```
Welcome, <name>!
```

Call it **twice** with different names.

---

### 2️⃣ Number Square Method

Create a method called:

```
SquareNumber
```

That:

* Takes one `int` number
* Returns its square

Log the result when called.

**Example:**

```
SquareNumber(6) → 36
```

---

### 3️⃣ Temperature Converter (Celsius → Fahrenheit)

Write a method:

```
ConvertToFahrenheit(double celsius)
```

Use the formula:

```
F = (C × 9 / 5) + 32
```

* Return the Fahrenheit value
* Call it with **3 different** Celsius values

---

### 4️⃣ Email Generator

Create a method:

```
GenerateEmail(string name)
```

That returns:

```
<name>@gmail.com
```

**Example:**

```
GenerateEmail("emmanuel") → "emmanuel@gmail.com"
```

---

### 5️⃣ Check Even or Odd

Write a method:

```
IsEven(int number)
```

It should return:

* `"Even"` if the number is even
* `"Odd"` if the number is odd

Call it with **5 different numbers**.

---

### 6️⃣ Mini Calculator Method

Create a method:

```
Calculate(string operation, double a, double b)
```

Where:

* `operation` can be:

  * `"add"`
  * `"subtract"`
  * `"multiply"`
  * `"divide"`
* `a` and `b` are numbers

The method should return the correct result based on the operation.

**Examples:**

```
Calculate("add", 4, 5) → 9
Calculate("multiply", 3, 6) → 18
```

---

### 7️⃣ Bonus Challenge (Optional)

#### Currency Converter

Write a method:

```
ConvertToDollars(double ugx)
```

Assume:

```
1 USD = 3800 UGX
```

Return the USD amount.

**Example:**

```
ConvertToDollars(7600) → 2
```

---

## ✅ Before Submitting

Make sure your file:

✔ Runs without errors
✔ Contains all method calls
✔ Includes comments explaining your logic
✔ Uses clean and meaningful variable names
✔ Uses correct C# syntax
