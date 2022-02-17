/*
 * Complete the 'circularArrayRotation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER k
 *  3. INTEGER_ARRAY queries
 */


function circularArrayRotation(a: number[], k: number, queries: number[]): number[] {
    // Write your code here
    for (let i = 0; i < k; i++) {
        a.unshift(a.pop())
    }
    return queries.map(q => a[q])
}
console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]))