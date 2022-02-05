/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s:number[], d:number, m:number):number {
    //create sub array of length m and check if sum is equal to d
    let count = 0;
    for(let i = 0; i < s.length; i++){
        let subArray = s.slice(i, i + m);
        if(subArray.reduce((a, b) => a + b) === d){
            count++;
        }
    }
    return count;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));