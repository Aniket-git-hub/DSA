
function getMoneySpent(keyboards:number[], drives:number[], b:number):number{
    let max:number = -1
    for(let i = 0; i < keyboards.length; i++){
        for(let j = 0; j < drives.length; j++){
            let total:number = keyboards[i] + drives[j]
            if(total > max && total <= b) max = total
        }
    }
    return max
}