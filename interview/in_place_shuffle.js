// Write a function for doing an in -place ↴ shuffle of an array.

// The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.

// Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.



// iterate through array, and use get random function to generate a random number 
// use set to hold numbers that have been seen 
// if not in seen list use that number as index the new index 


function shuffle(arr) {

    const seen = new Set;

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        seen.add(i);

        let newIdx;

        while(seen.has(i)) {
            newIdx = getRandom(0, arr.length)
        };

        result[newIdx] = arr[i]
    }

    return result;

}

function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * ceiling) + floor
}

const nums = [1,2,3,4,5]

console.log(shuffle(num))