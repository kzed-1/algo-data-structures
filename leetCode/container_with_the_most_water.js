// Given n non - negative integers a1, a2, ..., an, where each represents a point at coordinate(i, ai).
// n vertical lines are drawn such that the two endpoints of line i is at(i, ai) and(i, 0).Find two lines,
//  which together with x - axis forms a container, such that the container contains the most water.

//     Note: You may not slant the container and n is at least 2.



// The above vertical lines are represented by array[1, 8, 6, 2, 5, 4, 8, 3, 7].
// In this case, the max area of water(blue section) the container can contain is 49.



// Example:

// Input: [1, 8, 6, 2, 5, 4, 8, 3, 7]
// Output: 49

// brute force appraoch:

var maxArea = function (height) {

    // get all possible uniq pairs, then multiple area, keep track of the highest area   
    // time n^2
    // space 1

    if (height === null || height.length === 0) return 0

    let maxArea = 0;

    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let min = Math.min(height[i], height[j])
            let area = min * (j - i)

            maxArea = Math.max(maxArea, area)
        }
    }

    return maxArea

};

// 2 pointers
var maxArea = function (height) {

    //iterate through array 
    // keep track of the count (width) 
    // keep track of the 2 highest counts (height)
    // keep track of area


    //iterate going from front and back 
    // move the lower number towards the center until the start and end indexes are the same 

    let start = 0;
    let end = height.length - 1;
    let globalMax = 0;

    while (start < end) {
        let minHeight = Math.min(height[start], height[end])
        let localMax = minHeight * (end - start)

        globalMax = Math.max(localMax, globalMax)

        if (height[start] > height[end]) {
            end -= 1
        } else {
            start += 1
        }
    }

    return globalMax

};