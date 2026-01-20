const user = {
    name: "Alex",
    age: 18,
    isLoggedIn: true
};

if (user.age >= 18 && user.isLoggedIn) {
    console.log("Access Granted");
} else if (user.age < 18 && user.isLoggedIn) {
    console.log("Access Denied");
} else if (user.age >= 18 && !user.isLoggedIn) {
    console.log("Access Denied")
}
