/*
Scenario:
A profile system stores user data as an object.

Problem to Solve:
Create an object and access its properties.
*/

const user = [
    {name: "Jonathan", age: 17, Tel: +256705713089},
    {name: "Faith", age: 17, Tel: +256775793480},
    {name: "Paul", age: 18, Tel: +256705553069},
    {name: "Stephanie", age: 27, Tel: +256704130850},
    {name: "Jack", age: 23, Tel: +256705548130},
    {name: "Ashley", age: 36, Tel: +2567765130208},
]

console.log(user[0]);
console.log(user[1]);
console.log(user[2]);
console.log(user[3]);
console.log(user[4]);
console.log(user[5]);
console.log(user[0].name);
console.log(user[4].Tel);