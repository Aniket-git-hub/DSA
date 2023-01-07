// Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
const testG = {
    'A': ['B', 'C'],
    'B': ['D', 'F', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
}
        

// iterative implementation of breadth-first search

const path = (graph, start, end) => {
    if (start == end) return true
    
    const queue = [start];
    const visited = {};
    visited[start] = true;
    while (queue.length) {
        const node = queue.shift();
        const neighbors = graph[node];
        
        for (let i = 0; i < neighbors.length; i++) {
            if (!visited[neighbors[i]]) {
                if (neighbors[i] == end) { 
                    return true
                } else {
                    visited[neighbors[i]] = true;
                    queue.push(neighbors[i]);
                }
            }
        }
    }
    return false
}


// console.log(path(testG, 'A', 'B'))
// console.log(path(testG, 'A', 'C'))
// console.log(path(testG, 'A', 'D'))
// console.log(path(testG, 'A', 'E'))
// console.log(path(testG, 'A', 'F'))
// console.log(path(testG, 'F', 'A'))
// console.log(path(testG, 'E', 'B'))
// console.log(path(testG, 'C', 'A'))

// recursive DFS solution

const traverse = (graph, start) => {
    const visited = {};
    dfsRecursion(graph, start, visited);
}
const dfsRecursion = (graph, node, visited) => {
    if (!visited[node]) {
        visited[node] = true;
        console.log(node);
        for (let neighbor of graph[node]) {
            dfsRecursion(neighbor);
        }
    }
}