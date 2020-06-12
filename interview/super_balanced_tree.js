// Write a function to see if a binary tree ↴ is "superbalanced"(a new tree property we just made up).

// A tree is "superbalanced" if the difference between the depths of any two leaf nodes ↴ is no greater than one.

//     Here's a sample binary tree node class:

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


// go through the tree
// save an array for dept;
// save an array for all the pairs of node and its depth
// if we reach the end, if there is no depth, add to it
// if a tree is unbalanced:
// 1) if there are more than 2 depths;
// 2) if ther are 2 depths and the difference is greater than 2;
// return false if any of those scenarios are true 
// other wise keep pushing left and right leaves 


function superBalanced(treeRoot) {

    const depths = [];
    const pairs = [[treeRoot, 0]];

    while (pairs) {
        const pair = pairs.pop();
        const node = pair[0];
        const depth = pair[1];

        if (!node.left && !node.right) {

            if (depths.indexOf(depth) < 0) {
                depths.push(depth);
            } else {
                if (depths.length > 2 || Math.abs(depths[0] - depths[1]) > 1) {
                    return false 
                }
            }
        } else {

            if (node.left) {
                pairs.push([node.left, depth+1])
            }

            if (node.right) {
                pairs.push([node.right, depth+1])
            }
        }

    }

    return true;

}

console.log(superBalanced())


