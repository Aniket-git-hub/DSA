"use strict";
// insertion sort Algorihtm
function insertionSort(a) {
    for (let i = 0; i <= a.length - 1; i++) {
        let key = i;
        while (key > 0 && a[key] < a[key - 1]) {
            let temp = a[key];
            a[key] = a[key - 1];
            a[key - 1] = temp;
            key--;
        }
    }
    return a;
}
let a = [12, 11, 13, 5, 6];
console.log("Insertion Sort");
console.log(`Given array:
[ ${a} ]`);
console.log(`Sorted Array: 
[ ${insertionSort(a)} ]`);
