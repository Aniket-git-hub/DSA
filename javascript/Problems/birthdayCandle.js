"use strict";
function birthdayCakeCandles(candles) {
    let max = Math.max(...candles);
    let count = candles.filter(candle => candle === max);
    return count.length;
}
console.log(birthdayCakeCandles([3, 2, 1, 3]));
