"use strict";
function valueEqualToIndex(arr) {
    //code here
    let n = arr.length;
    let result = [];
    for (let i = 0; i <= n; i++) {
        if (arr[i] == i + 1) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(valueEqualToIndex([15, 2, 45, 12, 7]));
