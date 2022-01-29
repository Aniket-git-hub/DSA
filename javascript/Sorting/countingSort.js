"use strict";
//counting sort algorithm
function countingSort(arr) {
    let max = Math.max(...arr);
    let output = [];
    let count = [];
    for (let i = 0; i <= max; i++) {
        count.push(0);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            continue;
        count[arr[i]]++;
    }
    for (let i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > max)
            continue;
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }
    return output;
}
let arr1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(`Before sorting: ${arr1}
    After sorting: ${countingSort(arr1)}`);
