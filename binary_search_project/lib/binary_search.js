// function binarySearch(array, target) {
//     if (array.length === 0) return false;

//     let midIdx = Math.floor(array.length/2);
//     let left = array.slice(0, midIdx);
//     let right = array.slice(midIdx + 1)

//     if(array[midIdx] < target) {
//         return binarySearch(right, target)
//     }else if (array[midIdx] > target) {
//         return binarySearch(left, target)
//     }else {
//         return true 
//     }

// }

// function binarySearchIndex(array, target, lo=0, hi = array.length-1) {
//     if (lo === hi) return -1;

//     let midIdx = Math.floor((lo + hi) / 2);


//     if(array[midIdx] < target){
//         return binarySearchIndex(array, target, midIdx + 1, hi)
//     }else if (array[midIdx] > target) {
//         return binarySearchIndex(array, target, lo, midIdx)
//     }else {
//         return midIdx 
//     }

// }


function binarySearch (array, target) {
    if (array.length === 0) return false;

    let midIdx = Math.floor(array.length/2) 

    let left = array.slice(0,midIdx)
    let right = array.slice(midIdx+1)

    if (array[midIdx] > target) {
        return binarySearch(left, target)
    } else if (array[midIdx] < target) {
        return binarySearch(right, target)
    } else {
        return true 
    }

}

function binarySearchIndex(array, target, hi = array.length - 1 , lo = 0) {

    if (hi === lo) return -1;

    let midIdx = Math.floor((hi+lo)/2);

    if (array[midIdx] > target) {
        return binarySearchIndex(array, target, hi = midIdx, lo)
    } else if (array[midIdx] < target) {
        return binarySearchIndex(array, target, hi, lo = midIdx+1)
    } else {
        return midIdx 
    }


}

module.exports = {
    binarySearch,
    binarySearchIndex
};