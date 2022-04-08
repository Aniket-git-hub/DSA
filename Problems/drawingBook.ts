function pageCount(n: number, p: number) {
    let count = 0;
    let start = 1;
    let end = n;
    if (p === 1 || p === n) return 0;
    if (p - 1 > n - p) {
        console.log(n - p - 1)
    } else {
        console.log(p - 1 - 1)
    }
    return count;
}
console.log(pageCount(6, 2))