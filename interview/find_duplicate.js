// Find a duplicate, Space Edition™.

// We have an array of integers, where:

// The integers are in the range 1..n
// The array has a length of n + 1
// It follows that our array has at least one integer which appears at least twice.
// But it may have several duplicates, and each duplicate may appear more than twice.

// Write a function which finds an integer that appears more than once in our array. 
// (If there are multiple duplicates, you only need to find one of them.)

// We're going to run this function on our new, super-hip MacBook Pro With Retina Display™. 
// Thing is, the damn thing came with the RAM soldered right to the motherboard, 
// so we can't upgrade our RAM.So we need to optimize for space!

// function findDup(arr) {

//     const sorted = arr.sort();

//     for (let i = 0; i < sorted.length; i++) {
//         if (sorted[i] === sorted[i+1]) {
//             return sorted[i]
//         }
//     }


// }

function findDup(arr) {

    let floor = 1;
    let ceiling = arr.length-1;

    while (floor < ceiling) {
        let mid = Math.floor(floor + (ceiling-floor) / 2);

        let lowerRangeFloor = floor;
        let lowerRangeCeiling = mid;
        let upperRangeFloor = mid+1;
        let upperRangeCeiling = ceiling;

        let count = 0;

        arr.forEach(element => {
           if (element >= lowerRangeFloor && element <= lowerRangeCeiling) {
               count+=1;
           } 
        });

        if (count > (lowerRangeCeiling-lowerRangeFloor+1)) {
            floor = lowerRangeFloor;
            ceiling = lowerRangeCeiling;
        } else {
            floor = upperRangeFloor;
            ceiling = upperRangeCeiling;
        }
    }

    return floor 

}


console.log(findDup([1,1,2,3,4,5,]))