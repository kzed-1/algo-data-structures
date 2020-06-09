// I want to learn some big words so people think I'm smart.

// I opened up a dictionary to a page in the middle and started flipping through, 
// looking for words I didn't know. I put each word I didn't know at increasing indices in a huge array I created in memory.
// When I reached the end of the dictionary, I started from the beginning and did the same thing until I reached the page I started at.

// Now I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, 
// and then start from the beginning of the alphabet.In other words, this is an alphabetically ordered array that has been "rotated." For example:

// const words = [
//     'ptolemaic',
//     'retrograde',
//     'supplant',
//     'undulate',
//     'xenoepist',
//     'asymptote',  // <-- rotates here!
//     'babka',
//     'banoffee',
//     'engender',
//     'karpatka',
//     'othellolagkage',
// ];

//  4567 123

// JavaScript
// Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary.
// This array is huge(there are lots of words I don't know) so we want to be efficient here.

// create a alpha so that we can use to find order 
// start in the middle of the arr then use custom BS to find rotation point 
// if word at that index comes after the word at the index right after, then the word at the next index is the rotation point 
// if the word at the index comes before the word before it then we know that word at that index is where the rotation is 

function findRotation(array) {

    const alpha = "abcdefghijklmnopqrstuvwxyz".split("");

    let floor = 0;
    let ceiling = array.length-1;

    while (floor <= ceiling) {
        let midPoint = floor + Math.floor((ceiling-floor)/2);
        let currentWord = array[midPoint];

        if (alpha.indexOf(currentWord[0]) > alpha.indexOf(array[midPoint+1][0])) {
            return midPoint+1
        } else if (alpha.indexOf(currentWord[0]) < alpha.indexOf(array[midPoint - 1][0])) {
            return midPoint
        }

        if (alpha.indexOf(array[midPoint][0]) > alpha.indexOf(array[0][0])) {
            floor = midPoint+1
        } else {
            ceiling = midPoint-1
        }
    }

}

const words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',  // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];

console.log(findRotation(words))