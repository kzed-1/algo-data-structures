// Write a function for doing an in -place ↴ shuffle of an array.

// The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.

// Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.



// iterate through array, and use get random function to generate a random number 
// use set to hold numbers that have been seen 
// if not in seen list use that number as index the new index 


// function shuffle(arr) {

//     const seen = new Set();
//     let newIdx;

//     const result = [];

//     for (let i = 0; i < arr.length; i++) {

//         newIdx = getRandom(0, arr.length)

//         while (seen.has(newIdx) && seen.size !== arr.length) {
//             newIdx = getRandom(0, arr.length)
//         };

//         seen.add(newIdx)

//         console.log(seen)
//         result[newIdx] = arr[i]
//     }

//     return result;

// }

// function getRandom(floor, ceiling) {
//     return Math.floor(Math.random() * ceiling) + floor
// }

// const nums = [1,2,3,4,5]



// console.log(shuffle(nums))
// console.log(getRandom(0,5))

// solution:

// use the random function to pick random number for the index we want to replace at 
// iterate through the array:
// if the rendom generated number != our current, swap the numbers 
// continue to do the swap until the end of the for loop

function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling-floor + 1)) + floor;
};


function shuffle(arr) {

    if (arr.length < 2) return arr;

    for (let indexWeArePicking = 0; indexWeArePicking < arr.length-1; indexWeArePicking++) { 
        // end at the index before the last index because we are alwasy swapping 2 numbers, 
        // so we have to swap the last index with whatever number is last 

        const randomIdx = getRandom(indexWeArePicking, arr.length-1);

        if (randomIdx !== indexWeArePicking) {
            const valueRandomIdx = arr[randomIdx];
            arr[randomIdx] = arr[indexWeArePicking];
            arr[indexWeArePicking] = valueRandomIdx;
        }
    }

    return arr 
}

const nums = [1, 2, 3, 4, 5]



console.log(shuffle(nums))