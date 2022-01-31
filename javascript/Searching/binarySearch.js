"use strict";
// Recursive binary Search Algorithm
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
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 10, 10));
