// Find the peak index of an array that is first increasing then decreasing.
//     i.e.input: [1, 3, 5, 7, 6, 4] output: 3



function findPeak(arr) {
    
    if (arr.length === 0) return -1
    if (arr.length === 1) return 0

    let left = 0;
    let right = arr.length-1;

    while (left <= right) {
        let mid = left + Math.floor((right-left) / 2);

        if (arr[mid+1] < arr[mid] && arr[mid-1] < arr[mid]) {
            return mid
        } else if (arr[mid] < arr[mid+1]) {
            left = mid+1
        } else if (arr[mid+1] < arr[mid] ) {
            right = mid-1
        }
    }

}

// console.log(findPeak([1, 3, 5, 7, 6, 4]))



// Select all customers, order them by City in descending order

// select * 

// from customers 

// order by city desc


// Write a query that will return the following information for agents from Germany:
//     Customer Name, Customer City, Customer Country, Payment Amount, Order Date, Order Amount, Agent Code, Agent Commission, Agent Country


// select Customer Name, Customer City, Customer Country, Payment Amount, Order Date, Order Amount, Agent Code, Agent Commission, Agent Country

// Edit Question

// from customers 

// where country = "Germany"


// select 

// from customers a

// join agents b on a.agent_code = b.agent_code

// and a.cust_code = b.cust_code 

// inner join orders c on a.cust_code = c.cust_code 

// where country = "germany"


// Given an array, for example[1, 2, 3], how can you determine the number of 3s present ?

function find3s(arr) {

    let left = 0;
    let right = arr.length-1;

    let first;
    let last;

    while (left <= right) {

        let mid = left + Math.floor((right-left)/2)

        // if (arr[mid] === 3 && arr[mid + 1] !== 3 && arr[mid - 1] !== 3) 

        if (arr[mid] === 3 && arr[mid + 1] !== 3 && arr[mid - 1] !== 3) {
            return 1
        } else if (arr[mid] === 3 && arr[mid+1] !== 3) {
            last = mid
            right = mid-1
            left = 0
        } else if (arr[mid] === 3 && arr[mid - 1] !== 3)  {
            first = mid
            left = mid + 1
            right = arr.length - 1
        } else if (arr[mid] > 3) {
            right = mid - 1
        } else if (arr[mid] < 3) {
            left = mid + 1
        }

    }
   
    console.log(first)
    console.log(last)

}

// console.log(find3s([1,2,3,3]))


function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    let midIdx = Math.floor(arr.length/2);
    let left = arr.slice(0,midIdx)
    let right = arr.slice(midIdx)

    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight)

}

function merge(left, right) {

    let merged = [];

    while ( left.length || right.length) {
        let leftVal = left[0] ? left[0] : Infinity;
        let rightVal = right[0] ? right[0] : Infinity;

        let push;

        if (leftVal > rightVal) {
            push = right.shift();
        } else {
            push = left.shift();
        }

        merged.push(push)
    }

    return merged


}

// console.log(mergeSort([1,9,3,6,3,2]))


function quickSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr.shift();
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]

}

// console.log(quickSort([6,5,4,3,2,1]))

function bSearch(arr, target) {
    
    let left = 0;
    let right = arr.length-1;

    while (left <= right) {
        let mid = left + Math.floor((right-left)/2);

        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] > target) {
            right = mid-1
        } else if (arr[mid] < target) {
            left = mid+1
        }
    }

    return -1 

    // let mid = Math.floor((arr.length/ 2));

    // if (arr[mid] === target) {
    //     return mid;
    // } else if (arr[mid] > target ) {
    //     return bSearch(arr.slice(0,mid), target);
    // } else if (arr[mid] < target) {

    //     return bSearch(arr.slice(mid+1), target);
    // }


}

// console.log(bSearch([1,2,3,4], 4))


function countingSort(arr, max) {
    const result = [];

    const counters = new Array(max+1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        counters[num]++
    }

    for(let i = 0; i < counters.length; i++) {
        while(counters[i] > 0) {
            result.push(i)
            counters[i]--
        }
 
    }

    return result

}

console.log(countingSort([1,2,3,5,6,2,1,8,6,9,4,3,], 9))
console.log(quickSort([1,2,3,5,6,2,1,8,6,9,4,3,]))