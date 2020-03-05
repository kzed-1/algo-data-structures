function breadthFirstSearch(startingNode, targetVal) {
    let visited = new Set()
    let stack = [startingNode]

    while (stack.length > 0) {
        let currNode = stack.shift()
        if (visited.has(currNode)) continue

        visited.add(currNode)
        if (currNode.val === targetVal) return currNode

        stack.push(...currNode.neighbors)
    }

    return null
}


module.exports = {
    breadthFirstSearch
};