function breadthFirstArray(root) {

    const queue = [root]

    const result = []

    // while (queue.length) {
    //     let node = queue.shift()
    //     result.push(node.val)

    //     if (node.left) queue.push(node.left)
    //     if (node.right) queue.push(node.right)
    // }
    // return result 

    for (let i = 0; i < queue.length; i++){
        let node = queue[i]
        result.push(node.val)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    return result
}

module.exports = {
    breadthFirstArray
};