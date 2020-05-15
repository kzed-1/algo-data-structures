// Given an integer array nums, find the contiguous subarray within an array(containing at least one number) which has the largest product.

//     Example 1:

// Input: [2, 3, -2, 4]
// Output: 6
// Explanation: [2, 3] has the largest product 6.

// Example 2:

// Input: [-2, 0, -1]
// Output: 0
// Explanation: The result cannot be 2, because[-2, -1] is not a subarray.

var maxProduct = function (nums) {


    let length = nums.length

    let globalMax = nums[0];
    let localMin = nums[0];
    let localMax = nums[0];

    for (let i = 1; i < length; i++) {

        let temp = localMax

        localMax = Math.max(nums[i], nums[i] * localMax, nums[i] * localMin)
        localMin = Math.min(nums[i], nums[i] * temp, nums[i] * localMin)

        globalMax = Math.max(globalMax, localMax)
    }

    return globalMax

};