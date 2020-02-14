// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {

    if (preorder.length === 0 && inorder.length === 0) return null;

    let rootVal = preorder[0]
    let root = new TreeNode(rootVal)

    let rootIdx = inorder.IndexOf(rootVal)

    const leftIO = inorder.slice(0, rootIdx)
    const rightIO = inorder.slice(rootIdx+1)

    const leftPO = preorder.filter((val) => leftIO.includes(val))
    const rightPO = preorder.filter((val) => rightIO.includes(val))

    const leftTree = buildTree(leftIO, leftPO);
    const rightTree = buildTree(rightIO, rightPO);

    root.left = leftTree;
    root.right = rightTree;

    return root;

}
