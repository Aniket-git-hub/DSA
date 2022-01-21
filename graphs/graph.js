const graph = {
    'A': ['B', 'C'],
    'B': ['D','F', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
    
}
//bfs traversal in graph
const bfs = (graph, start) => {
    const queue = [start];
    const visited = {};
    visited[start] = true;
    while(queue.length) {
        const node = queue.shift();
        console.log(node);
        const neighbors = graph[node];
        for(let i = 0; i < neighbors.length; i++) {
            if(!visited[neighbors[i]]) {
                visited[neighbors[i]] = true;
                queue.push(neighbors[i]);
            }   
        }
    }
}
bfs(graph, 'A');

//dfs traversal in graph
const dfs = (graph, start) => {
  const visited = {};
  const stack = [start];
  visited[start] = true;
  while (stack.length) {
    const node = stack.pop();
    console.log(node);
    for (let neighbor of graph[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    }
  }
}
dfs(graph, 'A')

