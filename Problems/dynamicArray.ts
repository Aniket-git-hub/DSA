/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n:number,  queries:number[][]):number[] {
    // Write your code here
    let seqList:number[][] = [];
    for(let i = 0; i < n; i++){
        seqList.push([])
    }
    let lastAnswer:number = 0;
    let result:number[] = [];
    for(let i = 0; i < queries.length; i++){
        let query = queries[i];
        let seq = (query[1] ^ lastAnswer) % n;
        if(query[0] == 1){
            seqList[seq].push(query[2]);
        }else{
            let index = query[2] % seqList[seq].length;
            lastAnswer = seqList[seq][index];
            result.push(lastAnswer);
        }
    }
    return result;
}
console.log(dynamicArray(2, [[1,0,5],[1,1,7],[1,0,3],[2,1,0],[2,1,1]])) // [7,3]

