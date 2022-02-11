// largest number in the array 
function largest(arr: number[]): number {
    let largest: number = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
function smallest(arr: number[]): number {
    let smallest: number = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(largest(arr3));
console.log(smallest(arr3));