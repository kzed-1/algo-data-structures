function treeSum(root) {
    // if (!root) return 0
    // let sum = root.val

    // sum += treeSum(root.left) + treeSum(root.right)
    // return sum
    
    if (!root) return 0
    let sum = 0;

    let queue = [root];

    while (queue.length > 0) {
        let node = queue.shift();

        sum += node.val;
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }

    return sum
}


module.exports = {
    treeSum
};