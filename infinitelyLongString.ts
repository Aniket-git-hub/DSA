function repeatedString(s:String, n:number):number{
    let count:number = 0
    let times:number = n/s.length
    for(let i = 0; i < s.length; i++) if(s[i] == "a") count++
    return Math.ceil(count * times)
}

console.log(repeatedString('aba', 10))