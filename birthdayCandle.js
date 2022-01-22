function birthdayCakeCandles(candles) {
	let max = Math.max(...candles)
	let count = candles.filter(candle => candle === max)
	return count.length
}
let candles = [3, 2, 1, 3]
console.log(birthdayCakeCandles(candles))