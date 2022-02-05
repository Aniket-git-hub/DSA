// Grading Students Problem from hackerrank
function gradingStudents(grades:Array<number>):Array<number> {
    // Write your code here
    let results:Array<number> = [];
    grades.forEach((grade)=>{
        if(grade >= 40 || grade+2 >= 40 || grade+1 >= 40){
            if((grade+2)%5 == 0){
                results.push(grade+2)
            }else if((grade+1)%5 == 0){
                results.push(grade+1)
            }else{
                results.push(grade)         
            }   
        }else{
            results.push(grade)
        }
    })
    return  results
}

console.log(gradingStudents([73,67,38,33]))// 