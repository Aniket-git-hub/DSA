"use strict";
function viralAdvertising(n) {
    let shared = 5;
    let liked = 0;
    let cumulative = 0;
    for (let i = 0; i < n; i++) {
        liked = Math.floor(shared / 2);
        cumulative += liked;
        shared = liked * 3;
    }
    return cumulative;
}
