// Write a function to find the 2nd largest element in a binary search tree.↴

// Here's a sample binary tree node class:

// class BinaryTreeNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }

//     insertLeft(value) {
//         this.left = new BinaryTreeNode(value);
//         return this.left;
//     }

//     insertRight(value) {
//         this.right = new BinaryTreeNode(value);
//         return this.right;
//     }
// }

// function find2ndlargestEle(treeNode) {

//     let stack = [treeNode];

//     while (stack.length) {
//         const node = stack.pop();

//         if (!node.right.right) {
//             return node
//         }

//         if (node.right) {
//             stack.unshift(node.right)
//         }
//     }



// }


function findLargest(treeNode) {

    if (!treeNode) {
        return new Error('Tree must have at least 1 node');
    }

    if (treeNode.right) {
        return findLargest(treeNode);
    }

    return treeNode.value;

}


function findSecond(treeNode) {

    if (!treeNode || (!treeNode.left && !treeNode.right)) {
        return new Error('There must have at least 2 nodes');
    }

    if (treeNode.left && !treeNode.right) {
        return findLargest(treeNode);
    }

    if (treeNode.right && !treeNode.right.left && !treeNode.right.right) {
        return treeNode.value
    }

    return findSecond(treeNode.right)
}