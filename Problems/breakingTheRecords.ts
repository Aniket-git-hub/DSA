/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores: number[]): number[] {
    // Write your code here
    let max = scores[0];
    let min = scores[0];
    let maxCount = 0;
    let minCount = 0;
    scores.forEach(score => {
        if(score > max){
            max = score;
            maxCount++;
        }
        if(score < min){
            min = score;
            minCount++;
        }
    })
    return [maxCount, minCount];
}
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));