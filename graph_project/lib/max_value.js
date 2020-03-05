function maxValue(node, visited=new Set()) {

    let stack = [node];
    let max = 0;

    while (stack.length > 0) {
        let currNode = stack.shift()
        if (visited.has(currNode)) continue;

        visited.add(currNode)
        if (currNode.val > max) max = currNode.val;

        stack.push(...currNode.neighbors)
    }

    return max;
}

module.exports = {
    maxValue
};