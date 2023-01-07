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
    const visited = {}
    const dfsRecursion = (graph, node, visited) => {
        if (!visited[node]) {
            visited[node] = true
            console.log(node)
            if (graph[node]) {
                for (let neighbor of graph[node]) {
                    dfsRecursion(graph, neighbor, visited)
                }
            }
        }
    }
    dfsRecursion(graph, start, visited)
}
traverse(graph, 'A'); //A B C D E F