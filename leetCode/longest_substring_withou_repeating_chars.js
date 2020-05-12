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
    
    let hash = {};

    let maxCount = 0

    for (let i = 0; i < str.length; i++) {
        if (!hash[str[i]]) {
            hash[str[i]] = true 
        } else {
            if (hash.length > maxCount) {
                maxCount = hash.length
                hash = {};
            }
        }
    }

    return maxCount

}

let input = "bbbbb"

console.log(longestNonReapeatSubstring(input))
