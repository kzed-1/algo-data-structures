// Find the kth largest element in an unsorted array.Note that it is the kth largest element in the sorted order, not the kth distinct element.

//     Example 1:

// Input: [3, 2, 1, 5, 6, 4] and k = 2
// Output: 5

// Example 2:

// Input: [3, 2, 3, 1, 2, 4, 5, 5, 6] and k = 4
// Output: 4

// Note:
// You may assume k is always valid, 1 ≤ k ≤ array's length.


var findKthLargest = function (nums, k) {

    //heapify the array
    for (let i = nums.length - 1; i >= 0; i--) {
        heapify(nums, nums.length, i)
    }

    for (let endOfHeaps = nums.length - 1; endOfHeaps >= 0; endOfHeaps--) {
       swap(nums, endOfHeaps, 0);
       heapify(nums, endOfHeaps, 0);
   }

   return nums[nums.length - k]
};

function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]]
}

function heapify(array, n, i) {
    let leftIdx = i * 2 + 1;
    let rightIdx = i * 2 + 2;

    let leftVal = array[leftIdx];
    let rightVal = array[rightIdx];

    if (leftIdx >= n) leftVal = -Infinity
    if (rightIdx >= n) rightVal = -Infinity

    if (leftVal < array[i] && rightVal < array[i]) return;

    let swapIdx;

    if (leftVal > rightVal) {
        swapIdx = leftIdx;
    } else {
        swapIdx = rightIdx
    }

    swap(array, i, swapIdx);
    heapify(array, n, swapIdx);
}

