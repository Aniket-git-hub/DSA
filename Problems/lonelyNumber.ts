/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a:Array<number>):number {
    // Write your code here
    let result:number = 0
    for(let i = 0; i < a.length; i++) result ^= a[i]
    return result
}
console.log(lonelyinteger([4,2,2,5,3,3,4]))
