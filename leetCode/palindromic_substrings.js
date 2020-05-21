// 647. Palindromic Substrings
// Medium

// Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as 
// different substrings even they consist of same characters.

//     Example 1:

// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".



//     Example 2:

// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".



//     Note:

// The input string length won't exceed 1000.

var countSubstrings = function (s) {

    let numPalStrs = 0;

    if (s === null || s.length < 1) {
        return 0
    }


    for (let i = 0; i < s.length; i++) {
        let count1 = expandFromCenter(s, i, i);
        let count2 = expandFromCenter(s, i, i + 1);

        numPalStrs += count1 + count2
    }

    return numPalStrs


};



var expandFromCenter = function (s, i, j) {

    let count = 0;

    while (i >= 0 && j < s.length && s[i] === s[j]) {
        count += 1;
        i--;
        j++;
    }

    return count
}