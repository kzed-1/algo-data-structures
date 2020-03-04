// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height - balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10, -3, 0, 5, 9],

//     One possible answer is: [0, -3, 9, -10, null, 5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function sortedArrayToBST(nums) {
    if (nums.length === 0) return null;
    let midIdx = Math.floor(nums.length / 2)

    let root = new TreeNode(nums[midIdx])

    const leftSubTree = nums.slice(0, midIdx)
    const rightSubTree = nums.slice(midIdx + 1)

    root.left = sortedArrayToBST(leftSubTree)
    root.right = sortedArrayToBST(rightSubTree)

    return root
}