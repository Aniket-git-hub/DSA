const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
    
}

//bfs traversal in graph using recursion
const bfsRecursion = (graph, start) => {
    const visited = {};
    const queue = [start];
    visited[start] = true;
    
    const bfsRecursionHelper = (node) => {
        if(queue.length) {
            const node = queue.shift();
            console.log(node);
            for(let neighbor of graph[node]) {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                    bfsRecursionHelper(neighbor);
                }
            }
        }
    }
    bfsRecursionHelper(start);
}

bfsRecursion(graph, 'A');//A B C D E F
const color = '#fdf6e3'