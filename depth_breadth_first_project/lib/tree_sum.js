function treeSum(root) {
    sum = 0 

    if (!root) return 0
    
    sum += root.val
    sum += treeSum(root.left) + treeSum(root.right)
    return sum 
}


module.exports = {
    treeSum
};