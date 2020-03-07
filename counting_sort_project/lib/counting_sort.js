// function countingSort(arr, max) {
//     const result = [];
//     const counters = new Array(max + 1).fill(0);

//     for(let i = 0; i < arr.length; i++){
//         counters[arr[i]]++;
//     }

//     for(let i = 0; i < counters.length; i++){
//         while(counters[i] > 0) {
//             result.push(i);
//             counters[i]--;
//         }
//     }

//     return result;

// }

function countingSort(arr, max) {
    if (arr.length <= 1) return arr;
    let counters = new Array(max+1).fill(0);
    let result = []

    for (let i = 0; i < arr.length; i++) {
        counters[arr[i]] ++;
    }

    for (let i = 0; i < counters.length; i++) {
        while (counters[i] > 0) {
            result.push(i)
            counters[i] --;
        }
    }

    return result
}


module.exports = {
    countingSort
};