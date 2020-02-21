function treeHeight(root) {
    if (!root) return -1
    
    let max = 0
    let countLeft = 0
    let countRight = 0

    const stack = [root]

    while (stack.length){
        let node = stack.pop()
        if (root.left) {
            stack.push(node)
            countLeft += 1
        }else {
            if (countLeft > max) {
                max = countLeft
                countLeft = 0
            }
        }
        if (root.right) {
            stack.push(node)
            countRight += 1
        } else {
            if (countRight > max) {
                max = countRight
                countRight = 0
            }
        }
    }
    return max
}


module.exports = {
    treeHeight
};