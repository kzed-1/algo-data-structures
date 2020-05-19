// Longest Substring Without Repeating Characters
// Medium

// Given a string, find the length of the longest substring without repeating characters.

//     Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


// iterate through string
// keep track of start of substring and end of substring when it reachs a char that is a repeat 
// keep track of max count 
// return maxCount


const longestNonReapeatSubstring = (str) => {

    if (str === "") {
        return 0
    } else if (str === " ") {
        return 1
    }
    
    let seen = new Set();

    let maxCount = seen.size();

    for (let i = 0; i < str.length; i++) {
        if (!seen.has(str[i])) {
            seen.add(str[i])
        } else {
            let substrLength = seen.size()
            if (substrLength > maxCount) {
                maxCount = substrLength
                hash = {};
                hash[str[i]] = true
            }
        }
    }

    return maxCount

}

var lengthOfLongestSubstring = function (s) {

    let length = s.length

    let left = 0;
    let right = 0;
    let max = 0;

    let seen = new Set()

    while (left < length && right < length) {
        if (!seen.has(s[right])) {
            seen.add(s[right++])
            max = Math.max(max, right - left)
        } else {
            seen.delete(s[left++])
        }
    }

    return max
};



let input = "bbbbb"
let input2 = "abcabcbb"
let input3 = "pwwkew"
let object = {
    " ": true,
}

console.log(longestNonReapeatSubstring(""))
// console.log(Object.keys(object).length)
