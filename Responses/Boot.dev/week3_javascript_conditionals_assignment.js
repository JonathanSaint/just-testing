//📝 Assignment Tasks 1️⃣ Comparison Operators

let x = 7;
let y = 9;

const looseComparison = x == y;
const strictComparison = x === y;
const isNotEqual = x != y
const lessThan = x < y;
const isGreaterOrEqual = x >= y;     //!Variable name isEqual does not match what it does (>= is not equality).
const isLessOrEqual = x <= y;

console.log(looseComparison);
console.log(strictComparison);
console.log(isNotEqual);
console.log(lessThan);
console.log(isGreaterOrEqual);
console.log(isLessOrEqual);


//2️⃣ Basic if...else Condition
//! Use Parameters and Arguements for reusability.
function ageChecker(age) {
    if (age >= 18) {
        console.log("You are allowed to vote");
    } else {
        console.log("You are not allowed to vote");
    }
}
ageChecker(17);

function gradingSystem() {
    let score = 90;

    if (score >= 80) {
        console.log("Grade A");
    } else if (score >= 60) {
        console.log("Grade B");
    } else if (score >= 40) {
        console.log("Grade C");
    } else {
        console.log("Fail")
    }
}
gradingSystem();

//4️⃣ Logical Operators (&&, ||, !)

function grantAccess() {
    let isLoggedIn = true;
    let hasPermission = false;
    let isAdmin = true;

    if ((isLoggedIn && hasPermission) || isAdmin) {
        console.log("Access Granted");
    } else {
        console.log("Access Denied");
    }
    console.log(!isLoggedIn); //Fixed from isLoggedIn != true to better version
}
grantAccess()

//5️⃣ Nested Conditional Statements

function temperatureChecker(temperature) {
    if (temperature > 20) {
        if (temperature > 30) {
        console.log("It's hot");
        } else {
        console.log("It's warm");
        }
    } else {
        console.log("It's cold");
    }
}
temperatureChecker(16);

//6️⃣ Ternary Operator

let isStudent = true;

console.log(isStudent ? "Student Discount Applied" : "No Discount");

//7️⃣ Switch Statement (Day of the Week)

let dayNumber = 2;

switch(dayNumber) {
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
        console.log("Invalid Day");
        break;
}

// 8️⃣ Switch Statement (User Role)

let userRole = "admin";

switch(userRole) {
    case "admin":
        console.log("Admins can access all files.");
        break;
    case "editor":
        console.log("Editors can only read and write files.");
        break;
    case "user":
        console.log("Users can only read files.");
        break;
    default:
        console.log("You are not recognized by the system");
}

//9️⃣ Nullish Coalescing Operator (??)

let username = null;

console.log(username ?? "Guest User");

// 🔟 Bonus Challenge (Optional)
//0 is flasey so logic breaks if used wrongly

function balanceChecker() {
    const balance = null;
    const safeBalance = balance ?? 0

    if (safeBalance > 0) {
        console.log("Balance Available");
    } else {
        console.log("No Balance");
    }
}
balanceChecker()


/*
✔ Runs without errors 
✔ Uses proper JavaScript conditional syntax 
✔ Demonstrates comparison, logical, ternary, switch, and nullish coalescing operators 
✔ Contains clear comments explaining your logic 
✔ Uses console.log() for all outputs
*/