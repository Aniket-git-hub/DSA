"use strict";
/*
 * Complete the 'countSwaps' function below.
 *
 * The function accepts INTEGER_ARRAY a as parameter.
 */
function countSwaps(a) {
    // Write your code here 
    let swaps = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                swaps++;
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
    console.log(`Array is sorted in ${swaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length - 1]}`);
}
countSwaps([3, 2, 1]);
