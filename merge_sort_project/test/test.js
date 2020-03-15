const { expect } = require('chai');
const { merge, mergeSort } = require('../lib/merge_sort.js');


describe('merge()', () => {
    // it should accept two sorted arrays as args

    it('should return a single array containing elements of the original sorted arrays, in order', () => {
        expect(merge([1, 5, 10, 15], [0, 2, 3, 7, 10])).to.eql([0, 1, 2, 3, 5, 7, 10, 10, 15]);
        expect(merge([10, 13, 15, 25], [])).to.eql([10, 13, 15, 25]);
    });
});

describe('mergeSort()', () => {
    // it should accept an array of numbers as an arg
    context('when the input array contains 0 or 1 elements', () => {
        it('should return the array', () => {
            expect(mergeSort([])).to.eql([]);
            expect(mergeSort([2])).to.eql([2]);
        });
    });

    context('when the input array contains more than 1 element', () => {
        it('should return an array containing the elements in increasing order', () => {
            expect(mergeSort([2, -1, 4, 3, 7, 3])).to.eql([-1, 2, 3, 3, 4, 7]);
        });
    });
});


// function merge(array1, array2) {
//     const merged = []

//     while (array1.length || array2.length) {
//         let num1 = array1.length ? array1[0] : Infinity;
//         let num2 = array2.length ? array2[0] : Infinity;

//         let next;
//         if (num1 < num2) {
//             next = array1.shift()
//         } else {
//             next = array2.shift()
//         }
//         merged.push(next);

//     }

//     return merged
// }

// function mergeSort(array) {
//     if (array.length <= 1) return array;

//     let midIdx = Math.floor(array.length / 2)
//     let left = mergeSort(array.slice(0, midIdx))
//     let right = mergeSort(array.slice(midIdx))

//     return merge(left, right)
// }

