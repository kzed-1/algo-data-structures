// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor (val, next = null){
        this.next = next,
        this.value = val
    }

}

class Stack {
    constructor () {
        this.bottom = null,
        this.top = null,
        this.length = 0;
    }

    push (val) {
        const node = new Node(val)

        if (this.length === 0) {
            this.bottom = node 
            this.top = node
            this.length ++;
            return this.length
        }else {
            let temp = this.top
            this.top = node 
            this.top.next = temp
            this.length ++;
            return this.length
        }

    }

    pop () {
        if(this.length === 0) return null;

        let temp;

        if (this.length === 1){
            temp = this.bottom
            this.bottom = null
            this.top = null;
            this.length --;
        }else {
            temp = this.top
            this.top = temp.next
            temp.next = null
            this.length --;
        }
        return temp.value
    }

    size () {
        return this.length
    }


}

exports.Node = Node;
exports.Stack = Stack;
