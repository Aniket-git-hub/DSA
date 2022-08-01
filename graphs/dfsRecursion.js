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
traverse(graph, 'A'); //A B C D E F