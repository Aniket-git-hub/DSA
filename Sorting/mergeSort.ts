// merge sort algorithm

function merge(arr: number[], l: number, m: number, r: number): void {
    let i: number = l;
    let j: number = m + 1;
    let k: number = l;
    let temp: number[] = [];
    while (i <= m && j <= r) {
        if (arr[i] < arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }
    while (i <= m) {
        temp[k++] = arr[i++];
    }
    while (j <= r) {
        temp[k++] = arr[j++];
    }
    for (let i: number = l; i <= r; i++) {
        arr[i] = temp[i];
    }
}

function mergeSort(arr: number[], l: number, r: number): void {
    if (l < r) {
        let m: number = Math.floor((l + r) / 2);
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}

let ar = [12, 11, 13, 5, 6, 7];
mergeSort(ar, 0, ar.length - 1);
console.log(ar);
