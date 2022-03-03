const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
    
}

//dfs traversal in graph using recursion
const traverse = (graph, start) => {
    const visited = {};
    dfsRecursionHelper(graph, start, visited);
}
const dfsRecursionHelper = (graph, node, visited) => {
    if(!visited[node]) {
        visited[node] = true;
        console.log(node);
        for(let neighbor of graph[node]) {
            dfsRecursionHelper(neighbor);
        }
    }
}
traverse(graph, 'A');//A B C D E F
