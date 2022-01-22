// Grading Students Problem from hackerrank
function gradingStudents(grades) {
    // Write your code here
    let results = [];
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

let grades = [73,67,38,33]

let result = gradingStudents(grades)
console.log(result)