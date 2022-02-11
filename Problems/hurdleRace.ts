function hurdleRace(k: number, height: number[]): number {
    height.sort((a, b) => a - b)
    if (height[height.length - 1] > k) return height[height.length - 1] - k
    return 0;
}
console.log(hurdleRace(4, [1, 6, 3, 5, 2]));
