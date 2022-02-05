function appleAndOranges(s:number, t:number, a:number, b:number, apples:number[], oranges:number[]):void{
    let appleCount = 0;
    let orangeCount = 0;
    apples.forEach(apple => {
        if(apple + a >= s && apple + a <= t) appleCount++  
    })
    oranges.forEach(orange => {
        if(orange + b >= s && orange + b <= t) orangeCount++  
    })
    console.log(appleCount);
    console.log(orangeCount);
}
appleAndOranges(7,11,5,15,[-2,2,1],[5,-6]);