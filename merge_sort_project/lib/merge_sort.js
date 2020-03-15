function merge(array1, array2) {
    let merged = [];

    while(array1.length || array2.length) {
        let ele1 = array1.length ? array1[0] : Infinity;
        let ele2 = array2.length ? array2[0] : Infinity;

        let nextEle;

        if (ele1 > ele2) {
            nextEle = array2.shift()
        } else {
            nextEle = array1.shift()
        }
        
        merged.push(nextEle);
    }

    return merged;
}

function mergeSort(array) {
    
    if (array.length <= 1) return array

    let midIdx =  Math.floor(array.length/2)

    let left = mergeSort(array.slice(0,midIdx));
    let right = mergeSort(array.slice(midIdx));

    return merge(left, right)
}

let arr = [5,8,2,9,1]

console.log(mergeSort(arr))


module.exports = {
    merge,
    mergeSort
};