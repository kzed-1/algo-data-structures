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

function bsSearchTree(treeNode) {

   let queue = [treeNode];

   while (queue.length) {
       const node = queue.pop();

       if (node.left) {
            if (node.left.value > node.value) return false
           queue.unshift(node.left)

       }
       if (node.right) {
           if (node.right.value < node.value) return false
           queue.unshift(node.right)
       }
   }

   return true
}