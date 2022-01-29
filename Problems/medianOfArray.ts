// find medain of an araay of unsorted numbers
function median(arr:Array<number>):number{
    let mid:number = Math.floor(arr.length/2)
    arr.sort((a,b) => a - b)
    if(arr.length % 2 === 0){
        return (arr[mid] + arr[mid-1])/2
    }
    return arr[mid]
}
console.log(median([4,2,1,2,3]))