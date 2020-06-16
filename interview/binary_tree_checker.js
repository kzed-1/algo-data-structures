// Write a function to check that a binary tree ↴ is a valid binary search tree.↴

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

// function bsSearchTree(treeNode) {

//    let queue = [treeNode];

//    while (queue.length) {
//        const node = queue.pop();

//        if (node.left) {
//             if (node.left.value > node.value) return false
//            queue.unshift(node.left)

//        }
//        if (node.right) {
//            if (node.right.value < node.value) return false
//            queue.unshift(node.right)
//        }
//    }

//    return true
// }

function bsSearchTree(treeNode) {

    const nodeAndBoundsStack = [];

    nodeAndBoundsStack.push({
        node: treeRoot,
        lowerBound: -Infinity,
        upperBound: Infinity
    });

    while (nodeAndBoundsStack.length) {
        const { node, lowerBound, upperBound } = nodeAndBoundsStack.pop();

        if (node.value <= lowerBound || node.value >= upperBound) {
            return false;
        }
    }

    if (node.left) {
        nodeAndBoundsStack.push({
            node: node.left,
            lowerBound,
            upperBound: node.value
        })
    }

    if (node.right) {
        nodeAndBoundsStack.push({
            node: node.right,
            lowerBound: node.value, 
            upperBound
        })
    }

    return true;
}