// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

// For example, given:

// [1, 7, 3, 4]

// JavaScript
// your function would return:

// [84, 12, 28, 21]

// JavaScript
// by calculating:

// [7 * 3 * 4, 1 * 3 * 4, 1 * 7 * 4, 1 * 7 * 3]

// JavaScript
// Here's the catch: You can't use division in your solution!

// create array of product of all the number left of array 
// create array of product of all the number right of array 
// create new array of product of all number except at that index by multiplying number at that index of left and right 




function getProductsOfAllIntsExceptAtIndex(arr) {

    const right = [];
    const left = [1];

    right[arr.length-1] = 1;

    for (let i = 0; i < arr.length; i++) {
        
    }



}
