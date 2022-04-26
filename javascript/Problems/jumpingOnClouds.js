"use strict";
// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
    let energy = 100;
    let i = k % c.length;
    energy -= c[i] * 2 + 1;
    while (i != 0) {
        i = (i + k) % c.length;
        energy -= c[i] * 2 + 1;
    }
    return energy;
}
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0], 2));
