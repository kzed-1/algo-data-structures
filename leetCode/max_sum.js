var maxSubArray = function (nums) {

    let localMax = 0;
    let globalMax = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        localMax = Math.max(nums[i], localMax + nums[i])
        if (localMax > globalMax) {
            globalMax = localMax
        }
    }

    return globalMax

};