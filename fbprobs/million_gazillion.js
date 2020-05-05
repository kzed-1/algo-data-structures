// I'm making a search engine called MillionGazillion™.

// I wrote a crawler that visits web pages, stores a few keywords in a database, and follows links to other web pages.
// I noticed that my crawler was wasting a lot of time visiting the same pages over and over, so I made a set, visited, 
// where I'm storing URLs I've already visited.Now the crawler only visits a URL if it hasn't already been visited.

// Thing is, the crawler is running on my old desktop computer in my parents' basement (where I totally don't live anymore), 
// and it keeps running out of memory because visited is getting so huge.

// How can I trim down the amount of space taken up by visited ?

class Node {
    constructor() {
        this.children = {}
        this.isTerminal = false;
    }
}

class Trie {
    constructor () {
        this.root = new Node();
    }

    insert(word, root = this.root) { // O(m) m is length of target

        let letter = word[0];

        if (!(letter in root.children)) {
            root.children[letter] = new Node;
        }

        if (word.length === 1) {
            root.children[letter].isTerminal = true;
        } else {
            this.insert(word.slice(1), root.children[letter]);
        }
    }

    search(word, root = this.root) {  // O(m) m is length of target

        if (word.length === 0) {
            if (root.isTerminal) {
                return true
            } else {
                return false 
            }
        }

        let letter = word[0];

        if (letter in root.children) {
            return this.search(word.slice(1), root.children[letter])
        } else {
            return false;
        }
    }
}