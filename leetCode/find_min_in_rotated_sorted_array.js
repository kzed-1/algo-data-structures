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
    
    if (nums[0] > nums[nums.length - 1]) {
        let startIdx = 0
        let endIdx = nums.length - 1
        let first = nums[0]

        while (startIdx <= endIdx) {
            let midIdx = startIdx + Math.floor((endIdx - startIdx) / 2)

            if (nums[midIdx + 1] < nums[midIdx]) {
                return nums[midIdx + 1]
            }

            if (nums[midIdx - 1] > nums[midIdx]) {
                return nums[midIdx]
            }

            if (nums[midIdx] > first) {
                startIdx = midIdx + 1
            } else {
                endIdx = midIdx - 1;
            }

        }
    } else {
        return nums[0]
    }

 
}
let test = [4, 5, 6, 7, 0, 1, 2];
let test2 = [0, 1, 2, 4, 5, 6, 7];

console.log(findMin(test))
console.log(findMin(test2))