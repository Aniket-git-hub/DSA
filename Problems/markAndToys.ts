/*
 * Complete the 'maximumToys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY prices
 *  2. INTEGER k
 */

function maximumToys(prices:Array<number>, k:number):number {
   // Write your code here 
    let total:number = 0
    prices.sort((a,b) => a - b)
    for(let i = 0; i < prices.length; i++){
        total += prices[i]
        if(total > k) return i 
    }
    return prices.length
}
console.log(maximumToys([1,12,5,111,200,1000,10], 50));

