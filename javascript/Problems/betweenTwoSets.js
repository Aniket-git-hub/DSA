"use strict";
/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */
function getTotalX(a, b) {
    let maxA = Math.max(...a);
    let minB = Math.min(...b);
    let count = 0;
    for (let i = maxA; i <= minB; i++) {
        let isDivisible = true;
        a.forEach(aDiv => {
            if (i % aDiv !== 0)
                isDivisible = false;
        });
        if (isDivisible) {
            let isDivisibleB = true;
            b.forEach(bDiv => {
                if (bDiv % i !== 0)
                    isDivisibleB = false;
            });
            if (isDivisibleB)
                count++;
        }
    }
    return count;
}
console.log(getTotalX([2, 4], [16, 32, 96]));
