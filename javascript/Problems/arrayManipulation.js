"use strict";
/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */
function arrayManipulation(n, queries) {
    let arr = new Array(n + 1).fill(0);
    let max = 0;
    for (let i = 0; i < queries.length; i++) {
        let [a, b, k] = queries[i];
        arr[a - 1] += k;
        if (b <= n)
            arr[b] -= k;
    }
    for (let i = 1; i < arr.length; i++) {
        arr[i] += arr[i - 1];
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
}
console.log(arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]])); // 200
