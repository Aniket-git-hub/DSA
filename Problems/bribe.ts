function minimumBribes(q:Array<number>):void {
    // Write your code here
    let result = 0
    for(let i = 0; i < q.length; i++) {
        if(q[i] - (i + 1) > 2) console.log("Too chaotic") 
        for(let j = Math.max(0, q[i] - 2); j < i; j++) {
            if(q[j] > q[i]) result++
        }
    }
    console.log(result)
}

console.log(minimumBribes([1, 5, 2, 3, 4]))
