// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

//     Example:

// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"

// Note:

// If there is no such window in S that covers all characters in T, return the empty string "".
// If there is such window, you are guaranteed that there will always be only one unique minimum window in S.


var minWindow = function (s, t) {

    let seen = {};

    for (let i = 0; i < t.length; i++) {
        seen[t[i]] = seen[t[i]] + 1 || 1
    }

    let left = 0;
    let right = 0;
    let result = ""




    while (right < s.length) {
        let currentChar = s[right]

        if (seen[currentChar] !== undefined) {
            seen[currentChar] -= 1;


            while (Object.keys(seen).every((key) => seen[key] <= 0)) {
                let str = s.slice(left, right + 1)

                if (!result || result.length > str.length) {
                    result = str
                }

                if (seen[s[left]] !== undefined) {
                    seen[s[left]] += 1
                }

                left++
            }
        }

        right++

    }

    return result


};

