function merge(array1, array2) {
    const merged = []

    while (array1.length || array2.length) {
        let num1 = array1.length ? array1[0] : Infinity;
        let num2 = array2.length ? array2[0] : Infinity;
        
        let next;
        if (num1 < num2) {
            next = array1.shift()
        }else {
            next = array2.shift()
        }
        merged.push(next);

    }

    return merged
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    let midIdx = Math.floor(array.length / 2)
    let left = mergeSort(array.slice(0,midIdx))
    let right = mergeSort(array.slice(midIdx))

    return merge(left, right)
}

module.exports = {
    merge,
    mergeSort
};