/*
Scenario:
A data processor must remove odd numbers.

Problem to Solve:
Loop through numbers and print only even ones.
*/
 let numbers = [753, 546, 3467834, 34687, 3467,23, 235, 3, 456, 654, 4332, 23, 32, 434, 2123, 43];

 for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
 }