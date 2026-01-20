/*
Scenario:
A school system assigns grades based on scores.

Problem to Solve:
Determine grades using conditional logic.
*/

let scores = [23, 54, 56, 67, 98, 9, 56, 43, 23, 99, 78];

for (i = 0; i < scores.length; i++) {
    if (scores[i] <= 45) {
        console.log("Failed");
    } else if (scores[i] <= 60) {
        console.log("Fair");
    } else {
        console.log("Passed");
    }
}