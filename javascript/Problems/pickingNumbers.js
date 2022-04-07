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
    let temp = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = i; j < a.length; j++) {
            temp = a[j] - a[i];
            if (temp > max) {
                max = temp;
            }
        }
    }
    return max;
}
