"use strict";
function repeatedString(s, n) {
    let count = 0;
    let times = n / s.length;
    for (let i = 0; i < s.length; i++)
        if (s[i] == "a")
            count++;
    return Math.ceil(count * times);
}
console.log(repeatedString('aba', 10));
