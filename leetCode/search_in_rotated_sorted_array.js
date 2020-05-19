// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0, 1, 2, 4, 5, 6, 7] might become[4, 5, 6, 7, 0, 1, 2]).

// You are given a target value to search.If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0
// Output: 4

// Example 2:

// Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 3
// Output: -1


var search = function (nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (target === nums[mid])
            return mid;

        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;

};

var search = function (nums, target) {

    if (nums === null || nums.length === 0) return -1;

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2)

        if (nums[mid] > nums[right]) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    let start = left;
    let left2 = 0;
    let right2 = nums.length - 1;



    if (target >= nums[start] && target <= nums[right2]) {
        left2 = start;
    } else {
        right2 = start;
    }

    while (left2 <= right2) {
        let midpt = left2 + Math.floor((right2 - left2) / 2)

        if (nums[midpt] === target) {
            return midpt
        } else if (nums[midpt] < target) {
            left2 = midpt + 1
        } else {
            right2 = midpt - 1
        }
    }

    return -1

};