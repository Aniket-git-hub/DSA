/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function flippingMatrix(matrix:number[][]): number {
    // Write your code here
    let max = Math.max(...matrix.map(row => Math.max(...row)));
    let count: number[] = [];
    for (let i = 0; i <= max; i++) {
        count.push(0);
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] > max) {
                continue;
            }
            count[matrix[i][j]]++;
        }
    }
    for (let i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }
    for (let i = matrix.length - 1; i >= 0; i--) {
        for (let j = matrix[i].length - 1; j >= 0; j--) {
            if(matrix[i][j] > max) {
                continue;
            }
            matrix[count[matrix[i][j]] - 1][j] = matrix[i][j];
            count[matrix[i][j]]--;
        }
    }
    return matrix.map(row => row.join('')).join('').length;

}
