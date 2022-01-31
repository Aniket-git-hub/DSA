"use strict";
// Exponential Searching Algorithm in JavaScript TypeScript
// Steps of the algorithm
// 1. Find the length of the array
// 2. Calculate the value of the exponent
// 3. Calculate the index of the element
// 4. If the element is found, return the index
// 5. If the element is not found, return -1
function exponentialSearch(arr, x) {
    if (arr[0] == x)
        return 0;
    let i = 1;
    while (i < arr.length && arr[i] <= x) {
        i = i * 2;
    }
    return binarySearch(arr, i / 2, Math.min(i, arr.length), x);
}
console.log(exponentialSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
function binarySearch(arr, low, high, x) {
    if (high >= low) {
        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] == x)
            return mid;
        if (arr[mid] > x)
            return binarySearch(arr, low, mid - 1, x);
        return binarySearch(arr, mid + 1, high, x);
    }
    return -1;
}
