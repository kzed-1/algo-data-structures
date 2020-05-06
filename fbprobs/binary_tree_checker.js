// Write a function to check that a binary tree ↴ is a valid binary search tree.↴

// Here's a sample binary tree node class:

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertLeft(value) {
        this.left = new BinaryTreeNode(value);
        return this.left;
    }

    insertRight(value) {
        this.right = new BinaryTreeNode(value);
        return this.right;
    }
}

function inorder(root, arr = []) {
    if (!root) return true;
    
    if (arr[arr.length-1] < arr[arr.length-2]) return false 

    inorder(root.left, arr);
    arr.push(root.val)
    inorder(root.right, arr);
}

function isBST(root) {
    let queue = [root];
    let prevVal = -Infinity;

    while (queue.length) {
        let node = queue.pop()
        if (node.val > prevVal) {
            prevVal = node.val
        } else {
            return false 
        }

        if (node.right) queue.push(node.right)
        if (node.left) queue.push(node.left)
    }

    return true 
}