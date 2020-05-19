// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0 ? 
// Find all unique triplets in the array which gives the sum of zero.

//     Note:

// The solution set must not contain duplicate triplets.

//     Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

//     A solution set is:
// [
//     [-1, 0, 1],
//     [-1, -1, 2]
// ]

function sum3(nums) {


    let target = 0;
    nums.sort((a, b) => (a - b));
    let triplets = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let potentialMatch = nums[i] + nums[left] + nums[right];
            if (potentialMatch === target) {
                triplets.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right--;
                left += 1;
                right -= 1;
            }
            else if (potentialMatch < target) {
                left += 1;
            }
            else if (potentialMatch > target) {
                right -= 1;
            }
        }
    }
    return triplets;
};


}



let target = 0;
nums.sort((a, b) => (a - b));
let triplets = [];
for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
        let potentialMatch = nums[i] + nums[left] + nums[right];
        if (potentialMatch === target) {
            triplets.push([nums[i], nums[left], nums[right]]);
            while (nums[left] === nums[left + 1]) left++;
            while (nums[right] === nums[right - 1]) right--;
            left += 1;
            right -= 1;
        }
        else if (potentialMatch < target) {
            left += 1;
        }
        else if (potentialMatch > target) {
            right -= 1;
        }
    }
}
return triplets;
};