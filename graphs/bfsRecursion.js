const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
}

//bfs traversal in graph using recursion
const traverse = (graph, start) => {
    const visited = {};
    const queue = [start];
    visited[start] = true;
    const bfsRecursion = (node) => {
        if (queue.length) {
            const node = queue.shift();
            console.log(node);
            for (let neighbor of graph[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                    bfsRecursion(neighbor);
                }
            }
        }
    }
    bfsRecursion(start);
}
traverse(graph, 'A'); //A B C D E f