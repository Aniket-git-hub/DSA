
function catAndMouse(x:number, y:number, z:number):void{
    let catA:number = Math.abs(x - z)
    let catB:number = Math.abs(y - z)
    if(catA < catB) console.log("Cat A")
    else if(catA > catB) console.log("Cat B")
    else console.log("Mouse C")
}