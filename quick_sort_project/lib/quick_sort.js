function quickSort(array) {
    if (array.length <= 1) return array;
    
    let pivot = array.shift()
    let left = [];
    let right = [];

    for(let i = 0; i < array.length; i++){
        if (array[i] < pivot){
            left.push(array[i])
        }else {
            right.push(array[i])
        }
    }

    let sortLeft = quickSort(left) 
    let sortRight = quickSort(right) 

    return sortLeft.concat(pivot).concat(sortRight)

}


module.exports = {
    quickSort
};