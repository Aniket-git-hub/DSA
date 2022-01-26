/**
 * bubble Sort Algorithm
 */
let arr:Array<number> = []
for(let i = 0; i < 10; i++){
    arr.push(Math.floor(Math.random() * 100))
}
console.log(arr)
// bubble sort
function bubbleSort(array:Array<number>):Array<number>{
    let length:number = array.length
    for(let i = 0; i < length; i++){
        for(let j = 0; i < length - i - 1; j++){
            if(array[j] > array[j + 1]){
                let temp:number = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array
}
bubbleSort(arr)
console.log(arr)

