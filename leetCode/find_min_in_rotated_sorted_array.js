// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0, 1, 2, 4, 5, 6, 7] might become[4, 5, 6, 7, 0, 1, 2]).

// Find the minimum element.

// You may assume no duplicate exists in the array.

//     Example 1:

// Input: [3, 4, 5, 1, 2]
// Output: 1

// Example 2:

// Input: [4, 5, 6, 7, 0, 1, 2]
// Output: 0

function findMin(nums) {
    
    if (nums[0] > nums[nums.length-1]) {
        // regular bsearch
    }

    let startIdx;
    let endIdx;
    let first = nums[0]
    let midIdx = Math.floor(nums.length /2);
    
    if (nums[midIdx+1] < nums[midIdx]) {
        return nums[midIdx+1]
    } else if (nums[midIdx] > first) {
        startIdx = midIdx 
        endIdx = nums.length-1
    } else if (nums[midIdx] < first) {
        startIdx = 0;
        endIdx = midIdx;
    }
}