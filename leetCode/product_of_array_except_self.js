var productExceptSelf = function (nums) {

    let left = [];
    let right = [];
    let result = [];

    let length = nums.length

    left[0] = 1
    for (let i = 1; i < length; i++) {
        left[i] = left[i - 1] * nums[i - 1]
    }

    right[length - 1] = 1
    for (let i = length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1]
    }

    for (let i = 0; i < length; i++) {
        result[i] = left[i] * right[i];
    }

    return result;
    
};