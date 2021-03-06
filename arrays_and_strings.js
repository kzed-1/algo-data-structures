//Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
//cannot use additional data structures? 


// function isUnique(str) {
//     if (str.length > 128) return false // 128 unique chars in the alphabet
    
//     let hash = {}

//     for (let i = 0; i < str.length; i++) {
//         let val = str[i];
        
//         if(hash[val]) return false 

//         hash[val] = true 
//     }

//     return true 
// } 

//dont use data structure 
function isUnique(str) {
    if (str.length > 128) return false 

    const sorted = str.split("").sort().join("")

    for (let i = 0; i < str.length; i++) {
        if (sorted[i] === sorted[i+1]) return false 
    }

    return true
}

// console.log(isUnique("sagfbb"))


function isPermutation(str1, str2) {

    if (str1.length != str2.length) return false 

    return str1.split("").sort().join("") === str2 // big O depends on the sorting algo
}

function isPermutation2(str1, str2) { 

    if (str1.length != str2.length) return false;

    const hash1 = {};

    for(let i = 0; i < str1.length; i++) {
        if (hash1[str1[i]]) {
            hash1[str1[i]] += 1;
        } else {
            hash1[str1[i]] = 1;
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (hash1[str2[i]]) {
            hash1[str1[i]] -= 1;
        } else {
            return false 
        }
    }

    return Object.values(hash1).filter(num => num != 0).length === 0 
    // time: O(n)
    // space: O(1) because we know there are only 128 cahracters
}

// console.log(isPermutation2("abcc", "abc"))

// URLify: Write a method to replace all spaces in a string with '%20'.You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string. (Note: If implementing in Java, please use a character array so that you can
// perform this operation in place.)
// EXAMPLE
// Input: "Mr John Smith ", 13
// Output: "Mr%20John%20Smith"


// iterate through string length 
// check if the char is a space, if so, replace with %20
function urlify(str, length) {
    
    let newStr = ""
    for (let i = 0; i < length; i++) {
        if (str[i] === " ") {
            newStr += "%20";
        } else {
            newStr += str[i];
        }

    }

    return newStr;
}

// console.log(urlify("Mr John Smith ", 13))

// time: O(n)
// space = O(n)

function iterBSearch (arr, target) {
    
    let min = 0;
    let max = arr.length - 1;

    
    while (min < max) {
        const distance = max - min
        let halfdistance = Math.floor(distance/2)
        let guessIdx = min + halfdistance
        const guess = arr[guessIdx]

        if (guess < target) {
            min = guessIdx
        } else if (guess === target) {
            return true 
        } else {
            max =  guessIdx
        }
    }

    return false 
}
// const nums = [1,2,3,4,5,6]
// console.log(iterBSearch(nums, 4))


function mergeSort(arr) {

    if (arr.length < 2) return arr

    let midIdx = Math.floor(arr.length / 2)

    let left = mergeSort(arr.slice(0, midIdx));
    let right = mergeSort(arr.slice(midIdx));

    return merge(left, right)
}

function merge(arr1, arr2) {
    const sorted = [];

    while (arr1.length || arr2.length) {
        let ele1 = arr1.length ? arr1[0] : Infinity
        let ele2 = arr2.length ? arr2[0] : Infinity

        let push;

        if (ele1 > ele2) {
            push = arr2.shift()
        } else {
            push = arr1.shift()
        }
        sorted.push(push)
    }

    return sorted
}

const unsorted = [6,2,9,7,5,3,0,1]

console.log(mergeSort(unsorted))

