/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year:number):string {
    // Write your code here
    let day = "13";
    let month = "09";
    if(year < 1918){
        if(year % 4 === 0){
            day = "12";
        }
    } else if(year === 1918){
        day = "26";
        month = "09";
    }
    else if(year % 400 === 0){
        day = "12";
    }
    else if(year % 4 === 0 && year % 100 !== 0){
        day = "12";
    }
    return `${day}.${month}.${year}`;
}
console.log(dayOfProgrammer(1918));