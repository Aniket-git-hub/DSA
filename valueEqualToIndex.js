function valueEqualToIndex(arr, n){
    //code here
    let result = []
    for(let i = 0; i <= n; i++){
        if(arr[i] == i + 1){
            result.push(arr[i])	
        }  
    }
    return result
}

let array = [15, 2, 45, 12, 7]
console.log(valueEqualToIndex(array, array.length))
