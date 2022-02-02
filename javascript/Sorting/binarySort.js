"use strict";
//binary Sort Algorithms
function binarySort(arr) {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);
    while (start <= end) {
        if (arr[mid] > arr[mid + 1]) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
        mid = Math.floor((start + end) / 2);
    }
    return arr;
}
console.log(binarySort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
