"use strict";
console.log(fibMemo(15));
console.log(fib(15));
// fibnoacci series upto nth term without memoization
function fib(n) {
    if (n <= 1)
        return n;
    return fib(n - 1) + fib(n - 2);
}
// fibnoacci series upto nth term with memoization
function fibMemo(n, memo = []) {
    if (memo[n] !== undefined)
        return memo[n];
    if (n <= 1)
        return n;
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}
