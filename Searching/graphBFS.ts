// graph Breadth First Search(BFS)
let graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
}

 function bfs(graph: any, start: string): string[] {
    let visited = []
    let queue = [start]
    while (queue.length > 0) {
        let node = queue.shift()
        if (!visited.includes(node)) {
            visited.push(node)
            queue = queue.concat(graph[node])
        }
    }
    return visited
}