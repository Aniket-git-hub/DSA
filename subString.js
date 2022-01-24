"use strict";
/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */
function twoStrings(s1, s2) {
    if (s1.length > s2.length) {
        return subString(s1, s2);
    }
    return subString(s2, s1);
}
function subString(s1, s2) {
    for (let i = 0; i < s1.length; i++) {
        if (s1.includes(s2[i]))
            return "YES";
    }
    return "NO";
}
console.log(twoStrings('hello', 'world'));
