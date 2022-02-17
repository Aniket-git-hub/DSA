function angryProfessor(k: number, a: number[]): string {
    let onTime = a.filter(x => x <= 0).length
    return onTime >= k ? "NO" : "YES"
}
console.log(angryProfessor(3, [-1, -3, 4, 2]))