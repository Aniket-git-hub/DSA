"use strict";
function hourglassSum(arr) {
    // Write your code here
    let maxSum = -Infinity;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr.length - 2; j++) {
            let sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
            sum += arr[i + 1][j + 1];
            sum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            if (maxSum < sum)
                maxSum = sum;
        }
    }
    return maxSum;
}
console.log(hourglassSum([]));
