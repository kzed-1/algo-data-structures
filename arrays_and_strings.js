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

    return str1.split("").sort().join("") == str2
}

console.log(isPermutation("ca", "abc"))