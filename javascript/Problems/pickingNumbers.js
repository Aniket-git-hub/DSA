"use strict";
/**
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */
function pickingNumbers(a) {
    //  Write your code here
    let max = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (Math.abs(a[i] - a[j]) <= 1) {
                max++;
            }
        }
    }
    return max;
}
console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 4, 5, 5, 5]));
