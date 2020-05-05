// You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.

// To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a map ↴ ,
// where the keys are words and the values are the number of times the words occurred.

// We'll use a JavaScript Map instead of an object because it's more explicit—we're mapping words to counts. 
// And it'll be easier and cleaner when we want to iterate over our data.

// Think about capitalized words.For example, look at these sentences:

// "After beating the eggs, Dana read the next step:"
// "Add milk and eggs, then add flour and sugar."

// What do we want to do with "After", "Dana", and "add" ? 
// In this example, your final map should include one "Add" or "add" with a value of 22. 
// Make reasonable(not necessarily perfect) decisions about cases like "After" and "Dana".

// Assume the input will only contain words and standard punctuation.

function wordCloud(str) {
    const words = {}

    const wordsArr = isWord(str);

    for (let i = 0; i < wordsArr.length; i++) {
        let word = wordsArr[i]
        if (!words[word]) {
            words[word] = 1;
        } else {
            words[word] += 1;
        }
    }

    return words

    
}

function isWord(str) {
    const words = [];
    const alpha = new Set("abcdefghijklmnopqrstuvwxyz-".split(""))

    let currentWord = "";

    let currentIndex = 0

    while (currentIndex < str.length) {
        let char = str[currentIndex].toLowerCase();
        
        if (alpha.has(char)) {
            currentWord += char 
            currentIndex++
        } else {
            // if (currentWord === "") currentIndex++
            if (char === "'") {
                currentIndex++
            } else if (char === "'" && str[currentIndex+1] === "s") {
                currentIndex += 2
            }

            if (currentWord != "") words.push(currentWord)
            currentWord = ""
            currentIndex += 1
        }
    }

    return words
}

// const test = "After beating the eggs, Dana read the next step:"
// const test2 = "Add milk and eggs, then add flour and sugar."
const test3 = "We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake."
const test4 = "The bill came to five dollars."

console.log(wordCloud(test3))
console.log(wordCloud(test4))