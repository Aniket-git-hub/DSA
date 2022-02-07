"use strict";
function getMoneySpent(keyboards, drives, b) {
    let max = -1;
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            let total = keyboards[i] + drives[j];
            if (total > max && total <= b)
                max = total;
        }
    }
    return max;
}
