"use strict";
/**
 * quick Sort Algorithm
 */
function quickSort(arr) {
    let low, high, pivot, left, right;
    low = 0;
    high = arr.length - 1;
    pivot = arr[Math.floor((low + high) / 2)];
    left = [];
    right = [];
    while (low <= high) {
        while (arr[low] < pivot) {
            low++;
        }
        while (arr[high] > pivot) {
            high--;
        }
        if (low <= high) {
            [arr[low], arr[high]] = [arr[high], arr[low]];
            low++;
            high--;
        }
    }
    if (low < high) {
        left = quickSort(arr.slice(0, low));
        right = quickSort(arr.slice(low, arr.length));
        return left.concat(right);
    }
    return arr;
}
let a = [];
for (let i = 0; i < 100; i++) {
    a.push(Math.floor(Math.random() * 100));
}
console.log(quickSort(a));
