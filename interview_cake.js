// Your company built an in-house calendar tool called HiCal. Y
// ou want to add a feature to see the times in a day when everyone is available.

// To do this, you’ll need to know when any team is having a meeting. 
// In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime. 
// These integers represent the number of 30-minute blocks past 9:00am.

// For example:

// { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
// { startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

// For example, given:

// [
//     { startTime: 0, endTime: 1 },
//     { startTime: 3, endTime: 5 },
//     { startTime: 4, endTime: 8 },
//     { startTime: 10, endTime: 12 },
//     { startTime: 9, endTime: 10 },
// ]

// your function would return:

// [
//     { startTime: 0, endTime: 1 },
//     { startTime: 3, endTime: 8 },
//     { startTime: 9, endTime: 12 },
// ]

// Do not assume the meetings are in order.The meeting times are coming from multiple teams.

// Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges.
// Here we've simplified our times down to the number of 30-minute slots past 9:00 am. 
// But we want the function to work even for very large numbers, like Unix timestamps. 
// In any case, the spirit of the challenge is to merge meetings where startTime and endTime don't have an upper bound.

function mergeCal(arr) { //O(n^2)

    let result = [];

    let mergedhappened = false

    for (let i = 0; i < arr.length; i++) {
        let iStart = arr[i].startTime;
        let iEnd = arr[i].endTime;

        for (let j = i + 1; j < arr.length; j++) {
            let jStart = arr[j].startTime;
            let jEnd = arr[j].endTime;
            

            let first, second;
             
            if (iStart > jStart) {
                first = arr[j];
                second = arr[i];
            } else {
                first = arr[i];
                second = arr[j];
            }

            if (first.endTime >= second.startTime) {
                let mergeTime = { startTime: first.startTime, endTime: (first.endTime > second.endTime) ? first.startTime : second.endTime};
                result.push(mergeTime); 
                mergedhappened = true
            } 
        }

        if (!mergedhappened) {
            result.push(arr[i])
        }
     }

    return result;
}



function mergeCal2(arr) { // O(nlog n)

    const meetingsCopy = JSON.parse(JSON.stringify(arr));

    let sorted = meetingsCopy.sort((a,b) => a.startTime - b.startTime)

    const mergedMeetings = [sorted[0]]

    for (let i = 1; i < sorted.length; i++) {
        let current = sorted[i];
        let lastmergedMeeting = mergedMeetings[mergedMeetings.length-1];

        if (current.startTime <= lastmergedMeeting.endTime) {
            lastmergedMeeting.endTime = Math.max(lastmergedMeeting.endTime, current.endTime)
        } else {
            mergedMeetings.push(current)
        }
    }

    return mergedMeetings
}

let cal = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
]


// console.log(mergeCal2(cal));
// console.log(Math.floor(5/2))


// Write a function that takes an array of characters and reverses the letters in place.↴

// Why an array of characters instead of a string ?

// The goal of this question is to practice manipulating strings in place.
// Since we're modifying the input, we need a mutable ↴ type like an array, 
// instead of JavaScript's immutable strings.


function reverseInPlace(chars) {

    midIndex = Math.floor(char.length/2)
    let even = chars.length % 2 === 0


    if (even) {
        for(let i = 0; i <= midIndex; i++) {
            let front = chars[i];
            let back = chars[chars.length-1-i];

            [front, back] = [back, front]
        }
    } else {
        for (let i = 0; i < midIndex; i++) {
            let front = chars[i];
            let back = chars[chars.length - 1 - i];

            [front, back] = [back, front]
        }
    }

    return chars
}

let strArr = 'hello'.split("")
let strArr2 = 'help'.split("")

console.log(reverseInPlace(strArr))
console.log(reverseInPlace(strArr2))