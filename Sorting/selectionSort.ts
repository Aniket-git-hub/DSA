//selection sort algorithm
function selectionSort(a: number[]): number[] {
    for (let i = 0; i <= a.length - 1; i++) {
        let min = i
        for (let j = i + 1; j <= a.length - 1; j++) {
            if (a[j] < a[min]) {
                min = j
            }
        }
        let temp = a[i]
        a[i] = a[min]
        a[min] = temp
    }
    return a
}
let a1: number[] = [12, 11, 13, 5, 6];
console.log("Selection Sort");
console.log(`Given array:
[ ${a1} ]`);
console.log(`Sorted Array:
[ ${selectionSort(a1)} ]`);