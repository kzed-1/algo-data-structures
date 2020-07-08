// 125. Valid Palindrome
// Easy

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

//     Note: For the purpose of this problem, we define empty string as valid palindrome.

//         Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:

// Input: "race a car"
// Output: false


var isPalindrome = function (s) {

    let alpha = "abcdefghijklmnopqrstuvwxyz1234567890".split("")

        let str = ""
        let reverse = ""

        for (let i = 0; i < s.length; i++) {
            if (alpha.includes(s[i].toLowerCase())) {
                str += s[i].toLowerCase()
                reverse = s[i].toLowerCase() + reverse
            }
        }
        console.log(str)
        console.log(reverse)
        return str === reverse

};

var isPalindrome = function (s) {

    const alpha = new Set("abcdefghijklmnopqrstuvwxyz1234567890".split(""))

    let newStr = ""

    for (let i = 0; i < s.length; i++) {
        if (alpha.has(s[i].toLowerCase())) {
            newStr += s[i].toLowerCase();
        }
    }

    for (let i = 0; i < newStr.length / 2; i++) {
        if (newStr[i] !== newStr[newStr.length - i - 1]) return false
    }
    console.log(newStr)
    return true

};

var test = () => {
    
}

// This is a test to check on comments