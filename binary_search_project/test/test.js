const { expect } = require('chai');
const { binarySearch, binarySearchIndex } = require('../lib/binary_search.js');


describe('binarySearch', () => {
    // it should accept an sorted array of numbers and a target as an arg

    context('when the target is contained in the array', () => {
        it ('should return true', () => {
            expect(binarySearch([5, 10, 12, 15, 20, 30, 70], 12)).to.equal(true);
            expect(binarySearch([1, 2, 2, 3], 1)).to.equal(true);
        });
    });

    context('when the target is not contained in the array', () => {
        it('should return false', () => {
            expect(binarySearch([5, 10, 12, 15, 20, 30, 70], 24)).to.equal(false);
            expect(binarySearch([], 3)).to.equal(false);
        });
    });
});

describe('binarySearchIndex', () => {
    // it should accept an sorted array of unique numbers and a target as an arg

    context('when the target is contained in the array', () => {
        it('should return the index of where the target is found', () => {
            expect(binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 12)).to.equal(2);
            expect(binarySearchIndex([1, 2, 3], 1)).to.equal(0);
            expect(binarySearchIndex([1, 2, 3], 2)).to.equal(1);

        });
    });

    context('when the target is not contained in the array', () => {
        it('should return -1', () => {
            expect(binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 24)).to.equal(-1);
            expect(binarySearchIndex([], 3)).to.equal(-1);
        });
    });
});


// function binarySearch(array, target) {
//     if (array.length === 0) return false

//     let midIdx = Math.floor(array.length / 2);

//     if (array[midIdx] > target) {
//         return binarySearch(array.slice(0, midIdx), target)
//     } else if (array[midIdx] < target) {
//         return binarySearch(array.slice(midIdx + 1), target)
//     } else {
//         return true
//     }

// }

// function binarySearchIndex(array, target, hi = array.length - 1, lo = 0) {
//     if (hi === lo) return -1;

//     let midIdx = Math.floor((hi + lo) / 2);


//     if (array[midIdx] > target) {
//         return binarySearchIndex(array, target, midIdx, lo)
//     } else if (array[midIdx] < target) {
//         return binarySearchIndex(array, target, hi, midIdx + 1)
//     } else {
//         return midIdx
//     }
// }