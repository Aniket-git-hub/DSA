"use strict";
function bonAppetit(bill, k, b) {
    // Write your code here
    let total = 0;
    bill.forEach(item => total += item);
    let anna_total = total - bill[k];
    let fair_split = anna_total / 2;
    if (fair_split == b)
        console.log("Bon Appetit");
    else
        console.log(b - fair_split);
}
