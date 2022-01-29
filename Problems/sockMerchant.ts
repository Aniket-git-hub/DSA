function sockMerchant(n:number, ar:Array<number>):number {
    let ones = {}, pairs:number = 0;
    for (let i = 0; i < n; i++) {
        if (ones.hasOwnProperty(ar[i])) {
            pairs++;
            delete ones[ar[i]];
        } else {
            ones[ar[i]] = 0;
        }
    }
    return pairs
}
console.log(sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]))