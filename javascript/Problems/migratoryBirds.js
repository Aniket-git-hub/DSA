"use strict";
/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function migratoryBirds(arr) {
    // Write your code here
    let birdCount = {};
    arr.forEach(bird => {
        if (birdCount[bird]) {
            birdCount[bird]++;
        }
        else {
            birdCount[bird] = 1;
        }
    });
    let max = 0;
    let maxBird = 0;
    for (let bird in birdCount) {
        if (birdCount[bird] > max) {
            max = birdCount[bird];
            maxBird = bird;
        }
    }
    return maxBird;
}
console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
