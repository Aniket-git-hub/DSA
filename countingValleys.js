function countingValleys(steps, path) {
    // Write your code here
    let level = 0, count = 0
   	for(let i = 0; i < steps; i++){
   		if(path[i] == "U")level++
   		if(path[i] == "D") level--
   		if(path[i] == "U" && level == 0) count++
   	}
   return count
}

console.log(countingValleys(12, "DDUUDDUDUUUD"))