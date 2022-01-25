/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr:Array<Array<number>>):number {
    // Write your code here
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    for(let i = 0; i < arr.length; i++){
        leftDiagonal += arr[i][i];
        rightDiagonal += arr[i][arr.length - 1 - i];
    }
    return Math.abs(leftDiagonal - rightDiagonal);
}
console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]))//15