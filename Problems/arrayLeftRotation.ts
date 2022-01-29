function rotLeft(a:Array<number>, d:number):Array<number> {
    // Write your code here
    let temp = []
    for(let i = 0; i < a.length; i++) {
        temp.push(a[(i + d) % a.length])
    }
    a = temp
    return a
}
console.log(rotLeft([1, 2, 3, 4, 5], 2))