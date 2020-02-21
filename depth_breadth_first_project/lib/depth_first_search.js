function depthFirstSearch(root, targetVal) {
    // if (!root) return;
    // if (root.val === targetVal) return root

    // depthFirstSearch(root.left, targetVal)
    // depthFirstSearch(root.right, targetVal)
    // return null;


    stack = [root]

    while(stack.length) {
        let node = stack.pop()
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
        if (node.val === targetVal) return node
    }
    return null;
    
}


module.exports = {
    depthFirstSearch
};