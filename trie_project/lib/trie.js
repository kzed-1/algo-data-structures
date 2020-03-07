class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }

}

class Trie {
    constructor() {
        this.root = new Node()
    }

    insertRecur(word, root = this.root) {
     
        let letter = word[0];

        if (!(letter in root.children)) {
            root.children[letter] = new Node();
        } 
        
        if (word.length === 1) {
            root.children[letter].isTerminal = true 
        } else {
            this.insertRecur(word.slice(1), root.children[letter])
        }
    }

    insertIter(word, root = this.root) {
        
        while (word.length > 0) {
            let letter = word[0]
            if (!(letter in root.children)) {
                root.children[letter] = new Node()
            }

            if (word.length === 1) {
                root.children[letter].isTerminal = true 
            }
            word = word.slice(1)
            root = root.children[letter]
        }
    }

    searchRecur(word, root = this.root) {

        let letter = word[0];

        if (word.length === 0) {
            if (root.isTerminal) {
                return true
            }else {
                return false
            }
        } 

        if (letter in root.children) {
            return this.searchRecur(word.slice(1), root.children[letter])
        } else {
            return false 
        }
    }

    searchIter(word, root = this.root) {

        while (word.length >= 0) {
            let letter = word[0]
            if (word.length === 0) {
                if (root.isTerminal) {
                    return true
                }else {
                    return false
                }
            }

            if (letter in root.children) {
                word = word.slice(1)
                root = root.children[letter]
            }else {
                return false 
            }
        }
    }

    wordsWithPrefix(prefix, root=this.root) {

        if (prefix.length === 0) {
            let allWords = []
            
            if (root.isTerminal) allWords.push('')

            for (let letter in root.children) {
                let child = root.children[letter]
                let suffixes = this.wordsWithPrefix(prefix, child)
                let words = suffixes.map(suffix => letter + suffix)
                allWords.push(...words)
            }

            return allWords
 
        }else {
            let letter = prefix[0];
            let child = root.children[letter];

            if (child === undefined) {
                return [];
            } else {
                let suffixes = this.wordsWithPrefix(prefix.slice(1), child)
                let words = suffixes.map(suffix => letter + suffix)
                return words;
            }
        }
    }
}

module.exports = {
    Node,
    Trie
};

//asd