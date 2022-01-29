/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */
function matchingStrings(strings:string[], queries:string[]):number[] {
    // Write your code here
    let result:number[] = [];
    for(let i = 0; i < queries.length; i++){
        let count = 0;
        for(let j = 0; j < strings.length; j++){
            if(queries[i] == strings[j]){
                count++;
            }
        }
        result.push(count);
    }
    return result;
}
console.log(matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"])) // [2, 1, 0]