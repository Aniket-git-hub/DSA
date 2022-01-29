"use strict";
//staircase function
function staircase(n) {
    for (let i = 0; i < n; i++) {
        let str = '';
        let str1 = '';
        for (let j = 0; j < n - i - 1; j++) {
            str += " ";
        }
        for (let k = 0; k <= i; k++) {
            str += "#";
        }
        console.log(str + str1);
    }
}
staircase(15);
