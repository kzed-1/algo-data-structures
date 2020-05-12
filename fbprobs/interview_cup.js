// Given an array of integers greater than zero, 
// find if it is possible to split it in two(without reordering the elements), 
// such that the sum of the two resulting arrays is the same.
// Print the resulting arrays.

//

function splitInTwo(array) { // O(n)

    let totalSum = array.reduce((sum, n) => sum + n, 0);

    let sum1 = 0;

    for (let i = 0; i < array.length; i++) {
        sum1 += array[i]
        totalSum -= array[i]

        if (sum1 === totalSum) {
            return true
        }
    }

    return false
    
}

const testCases = [
    [1, 2, 3, 4, 5, 6, 21],
    [1, 90, 50, 30, 5, 3, 2, 1],
    [1, 50, 900, 1000],
];

console.log(splitInTwo(testCases[1]))