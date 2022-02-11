// Quick Sort Algorithm
function partition(arr: number[], start: number, end: number) {
    let pivot: number = arr[start]
    while (start < end) {
        while (arr[start] < pivot) start++
        while (arr[end] > pivot) end--
        if (start < end) {
            let temp: number = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
        }
    }
    return start
}
function quickSort(arr: number[], start: number, end: number) {
    if (start >= end) return
    let pivot: number = partition(arr, start, end)
    quickSort(arr, start, pivot - 1)
    quickSort(arr, pivot + 1, end)
    return arr
}

let demoArr: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log("Quick Sort");
console.log(`Given array:
[ ${demoArr} ]`);
console.log(`Sorted Array:
[ ${quickSort(demoArr, 0, demoArr.length - 1)} ]`);