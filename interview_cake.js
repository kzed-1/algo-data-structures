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


function reverseInPlace(chars) { // o(n)t o(1)s

    midIndex = Math.floor(chars.length/2)


    for(let i = 0; i < midIndex; i++) {
        let front = chars[i];
        let back = chars[chars.length-1-i];

        let temp = front 
        chars[i] = back;
        chars[chars.length - 1 - i] = temp 
    }

    return chars
}

// let strArr = 'helop'.split("")
// let strArr2 = 'help'.split("")

// console.log(reverseInPlace(strArr))
// console.log(reverseInPlace(strArr2))

// function reverseWords(arr) {
//     let words = arr.join("").split(" ")
//     let front = 0;
//     let back = words.length - 1

//     while (front < back) {
//         let temp = words[front];

//         words[front] = words[back]
//         words[back] = temp

//         front ++;
//         back --;
//     }

//    return words.join(" ")

// }

function reverse(chars, startIdx, endIdx) {

    let front = startIdx;
    let back = endIdx

    while (front < back) {
        let temp = chars[front];

        chars[front] = chars[back]
        chars[back] = temp

        front ++;
        back --;
    }
}

function reverseInPlace(arr) {

    reverse(arr, 0, arr.length-1);



    let currentwordStartIdx = 0;
    for (let i = 0; i <= arr.length; i++) {

        if (i === arr.length || arr[i] === " ") {
            reverse(arr, currentwordStartIdx, i - 1);
            currentwordStartIdx = 1 + i
        }
    }

    return arr.join(" ")
    
}




// const message = ['c', 'a', 'k', 'e', ' ',
//     'p', 'o', 'u', 'n', 'd', ' ',
//     's', 't', 'e', 'a', 'l'];

// console.log(reverseInPlace(message))

// In order to win the prize for most cookies sold, 
// my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

// Each order is represented by an "order id"(an integer).

// We have our lists of orders sorted numerically already, in arrays.
// Write a function to merge our arrays of orders into one sorted array.

// For example:

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

// console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

function mergeArrays(arr1, arr2) {

    const merged = [];

    while (arr1.length || arr2.length) {
        const ele1 = (arr1[0]) ? arr1[0] : Infinity
        const ele2 = (arr2[0]) ? arr2[0] : Infinity
    
        let nextEle 
        
        if (ele1 > ele2) {
            nextEle = arr2.shift() 
        } else if (ele1 === ele2) {
            nextEle = arr1.shift()
            arr2.shift()
        } else {
            nextEle = arr1.shift()
        }
    
        merged.push(nextEle)
    }
    
    return merged
    
}

// console.log(mergeArrays(myArray, alicesArray));

function mergeArrays2(arr1, arr2) {

    const merged = [];

    let currentArr1Idx = 0;
    let currentArr2Idx = 0;
    let currentMergedIdx = 0;

    while (currentMergedIdx < (arr1.length + arr2.length)) {

        const arr1Exhausted = currentArr1Idx >= arr1.length 
        const arr2Exhausted = currentArr2Idx >= arr2.length 

        if ( !arr2Exhausted && ( arr1Exhausted || arr1[currentArr1Idx] > arr2[currentArr2Idx])) {
            merged[currentMergedIdx] = arr2[currentArr2Idx]
            currentArr2Idx++
            
        } else {
            merged[currentMergedIdx] = arr1[currentArr1Idx]
            currentArr1Idx++
        }

        currentMergedIdx++
    }

    return merged
}

// console.log(mergeArrays2(myArray, alicesArray));


// My cake shop is so popular,
// I'm adding some tables and hiring wait staff so folks can have a cute sit-down cake-eating experience.

// I have two registers: one for take - out orders, and the other for the other folks eating inside the cafe.
// All the customer orders get combined into one list for the kitchen, 
// where they should be handled first - come, first - served.

// Recently, some customers have been complaining that people who placed orders after them are getting their food first.
// Yikes—that's not good for business!

// To investigate their claims, one afternoon I sat behind the registers with my laptop and recorded:

// The take - out orders as they were entered into the system and given to the kitchen. (takeOutOrders)
// The dine -in orders as they were entered into the system and given to the kitchen. (dineInOrders)
// Each customer order(from either register) as it was finished by the kitchen. (servedOrders)

// Given all three arrays, write a function to check that my service is first - come, first - served.
// All food should come out in the same order customers requested it.

//     We'll represent each customer order as a unique integer.

// As an example,

//     Take Out Orders: [1, 3, 5]
// Dine In Orders: [2, 4, 6]
// Served Orders: [1, 2, 4, 6, 5, 3]
// would not be first - come, first - served, since order 3 was requested before order 5 but order 5 was served first.

//     But,

//     Take Out Orders: [1, 3, 5]
// Dine In Orders: [2, 4, 6]
// Served Orders: [1, 2, 3, 5, 4, 6]
// would be first - come, first - served.

function checkOrder(takeOutOrders, dineInOrders, servedOrders) {

    let takeOutOrdersIdx = 0;
    let dineInOrdersIdx = 0;

   for (let i = 0; i < servedOrders.length; i++) {
       let currentOrder = servedOrders[i]
       if (takeOutOrders[takeOutOrdersIdx] && currentOrder === takeOutOrders[takeOutOrdersIdx]) {
            takeOutOrdersIdx++
       } else if (dineInOrders[dineInOrdersIdx] && currentOrder === dineInOrders[dineInOrdersIdx]) {
            dineInOrdersIdx++
        } else {
            return false
        }
   }

   if (takeOutOrdersIdx != takeOutOrders.length || dineInOrdersIdx != dineInOrders.length) {
       return false 
   }

   return true 

}


// const tOO = [1, 3, 5];
// const dIO = [2, 4, 6];
// const sO = [1, 2, 4, 6, 5, 3];
// const sO2 = [1, 2, 3, 5, 4, 6];

// console.log(checkOrder(tOO, dIO, sO2))

// You've built an inflight entertainment system with on-demand movie streaming.

// Users on longer flights like to start a second movie right when their first one ends, 
// but they complain that the plane usually lands before they can see the ending.
// So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

// Write a function that takes an integer flightLength(in minutes) 
// and an array of integers movieLengths(in minutes) 
// and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

// When building your function:

// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory

let movies = [60, 120, 60, 30, 40, 50, 100, 90]

// function moviePick(flightLength, movieLengths) {
//     let set = {}

//     for (let i = 0; i < movieLengths.length; i++) {
//         set[movieLengths[i]] = i
//     }

//     for (let i = 0; i < movieLengths.length; i++) {
//         let secondMov = flightLength - movieLengths[i]
        
//         if (set[secondMov] != undefined && set[secondMov] != i) {
//             return true
//         }
//     }


//     return false
// }


function moviePick2(flightLength, movieLengths) { // O(n) space and time 
    let seenMovies = new Set()

    for (let i = 0; i < movieLengths.length; i++) {
        let firstMovLength = movieLengths[i]
        let secondMovLength = flightLength - firstMovLength

        if (seenMovies.has(secondMovLength)) {
            return true 
        }

        seenMovies.add(firstMovLength)
    }

    return false
}

// console.log(moviePick2(300, movies))

// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome.↴

// You can assume the input string only contains lowercase letters.

//     Examples:

// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false

function isPalindrome(str) {
    
    let midIdx = Math.floor(str.length /2)
    for (let i = 0; i < midIdx; i++) {
        if (str[i] != str[str.length-1-i]) {
            return false 
        }
    } 

    return true;
}

function hasPalindrome(str) {
    
    let charCount = {};
    let oddCount = 0

    for (let i = 0; i < str.length; i++) {
        let char = str[i]

        if (charCount[char]) {
            charCount[char] += 1
        } else {
            charCount[char] = 1
        }
    }

    for (let char in charCount) {

        if (charCount[char] % 2 != 0) {
            oddCount += 1
        }
    }

    return  oddCount <= 1
}

function hasPalindrome2(str) { // time and space = O(n) 
    // space can be O(k) or O(1)
    // this depends on what you consider a character
    // in ASCII there are 128 diff chars 
    // in unicode 110,000

    let unpairedChar = new Set();

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (unpairedChar.has(char)) {
            unpairedChar.delete(char)
        } else {
            unpairedChar.add(char)
        }
    }

    return unpairedChar.size <= 1;
}

// console.log(hasPalindrome2('ivicc'))
// console.log(hasPalindrome2('civic'))
// console.log(hasPalindrome2('civil'))
// console.log(hasPalindrome2('livci'))

// Writing programming interview questions hasn't made me rich yet ... 
// so I might give up and start trading Apple stocks all day instead.

// First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.

// So I grabbed Apple's stock prices from yesterday and put them in an array called stockPrices, where:

// The indices are the time(in minutes) past trade opening time, which was 9: 30am local time.
// The values are the price(in US dollars) of one share of Apple stock at that time.
// So if the stock cost $500 at 10: 30am, that means stockPrices[60] = 500.

// Write an efficient function that takes stockPrices and 
// returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

// For example:

// const stockPrices = [10, 7, 5, 8, 11, 9];

// getMaxProfit(stockPrices);
// // Returns 6 (buying for $5 and selling for $11)

// No "shorting"—you need to buy before you can sell.Also, 
// you can't buy and sell in the same time step—at least 1 minute has to pass.

function getMaxProfit(stockPrices) {

    if(stockPrices.length < 2) {
        throw new Error('Getting a profit requires at least 2 prices');
    }

    let min = stockPrices[0];
    let maxDiff = stockPrices[1] - stockPrices[0]

    for (let i = 1; i < stockPrices.length; i++) {
        let currPrice = stockPrices[i];
        let pontentialProfit = currPrice - min
       
        maxDiff = Math.max(maxDiff, pontentialProfit)

        min = Math.min(currPrice, min)

    }

    return maxDiff
}

// const stockPrices = [10, 7, 5, 8, 11, 9];
// const stockPrices2 = [10, 5,4,3,2,1];

// console.log(getMaxProfit(stockPrices2));

// Given an array of integers, find the highest product you can get from three of the integers.

// The input arrayOfInts will always have at least three integers.

function maxProduct(arrOfInts) {
    const maxNums = [arrOfInts[0], arrOfInts[1], arrOfInts[2]];
    let maxProduct = maxNums[0] * maxNums[1] * maxNums[2]
    let product1 = maxNums[0] * maxNums[1]
    let product2 = maxNums[1] * maxNums[2]
    let product3 = maxNums[0] * maxNums[2]

    for(let i = 3; i < arrOfInts.length; i++) {
        let currentNum = arrOfInts[i]
       
        if (currentNum * product1 > maxProduct) {
            maxNums = [maxNums[0],maxNums[1], currentNum]
        } else if (currentNum * product2 > maxProduct) {
            maxNums = [maxNums[2], maxNums[1], currentNum]
        } else if (currentNum * product3 > maxProduct) {
            maxNums = [maxNums[2], maxNums[10, currentNum]
        }


    }

    return maxProduct
}

const arrOfInts = [2,4,6,9,1,0,34,6]

console.log(maxProduct(arrOfInts));