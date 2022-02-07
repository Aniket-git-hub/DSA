function displayPathToPrincess(dimension: number, grid: string[]) {
    let m = dimension;
    let n = dimension;
    let princess = [0, 0];
    let bot = [0, 0];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "p") {
                princess = [i, j];
            }
            if (grid[i][j] === "m") {
                bot = [i, j];
            }
        }
    }
    let path = [];
    let x = bot[0] - princess[0];
    let y = bot[1] - princess[1];
    if (x < 0) {
        for (let i = 0; i < Math.abs(x); i++) {
            path.push("LEFT");
        }
    } else if (x > 0) {
        for (let i = 0; i < x; i++) {
            path.push("RIGHT");
        }
    }
    if (y < 0) {
        for (let i = 0; i < Math.abs(y); i++) {
            path.push("UP");
        }
    } else if (y > 0) {
        for (let i = 0; i < y; i++) {
            path.push("DOWN");
        }
    }
    return path;
}
console.log(displayPathToPrincess(3, [
    "---",
    "-m-",
    "p--"
]));