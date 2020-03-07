// Implement a trie with insert, search, and startsWith methods.

//     Example:

// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");
// trie.search("app");     // returns true

// Note:

// You may assume that all inputs are consist of lowercase letters a - z.
// All inputs are guaranteed to be non - empty strings.


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

    searchRecur(word, root = this.root) {

        let letter = word[0];

        if (word.length === 0) {
            if (root.isTerminal) {
                return true
            } else {
                return false
            }
        }

        if (letter in root.children) {
            return this.searchRecur(word.slice(1), root.children[letter])
        } else {
            return false
        }
    }

    startsWith(prefix, root=this.root) {
        if (prefix.length === 0 ) return true 
      
        let letter = prefix[i]

        if (letter in root.children) {
            return this.startsWith(prefix.slice(1), root.children[letter])
        } else {
            return false
        }
  
    }
}

module.exports = {
    Node,
    Trie
};

//asd