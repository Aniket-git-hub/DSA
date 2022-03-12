"use strict";
// save the prisoner
function saveThePrisoner(n, m, s) {
    return ((s - 1 + m - 1) % n) + 1;
}
console.log(saveThePrisoner(5, 2, 1));
