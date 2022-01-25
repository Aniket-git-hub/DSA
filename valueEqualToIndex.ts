function valueEqualToIndex(arr:Array<number>):Array<number>{
    //code here
    let n:number = arr.length
    let result:Array<number> = []
    for(let i = 0; i <= n; i++){
        if(arr[i] == i + 1){
            result.push(arr[i])	
        }  
    }
    return result
}

console.log(valueEqualToIndex([15, 2, 45, 12, 7]))
