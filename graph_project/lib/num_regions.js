function numRegions(graph) {
    let connectedComponents = 0;
    let visited = new Set()

    for (let node in graph) {
        connectedComponents += localRegionSearch(node, graph, visited)
    }

    return connectedComponents
}

function localRegionSearch(node, graph, visited) {
    if (visited.has(node)) return 0;

    visited.add(node);

    graph[node].forEach(neighbor => {
        localRegionSearch(neighbor, graph, visited)
    })

    return 1;
}


module.exports = {
    numRegions
};