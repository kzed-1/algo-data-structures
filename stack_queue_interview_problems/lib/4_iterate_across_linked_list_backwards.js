// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Iterate over a Singly Linked List of primitives backwards. When finished, 
// return a string representing the original linked list's values backwards 
// in the following format:
//
//                             'A -> B -> C -> D' 
//
// ------------
// Constraints:
// ------------
//
// (1) Your function must be iterative, not recursive.
// (2) Your function must consume O(n) space.
// (3) Employee either a Stack, Queue, or some combination of the two in your
//     solution. (Implement any data structures you need, as you need them.)
//
//
// -----------
// Let's code!
// -----------

function iterateAcrossLinkedListBackwards(linkedList) {
    // TODO: Implement the iterateAcrossLinkedListBackwards function here
    // reverse = ""

    // const stack = [linkedList.head]

    // while (stack[0]) {
    //     let temp = stack.shift()
    //     // console.log(temp)
    //     stack.push(temp.next)
    //     reverse = " -> " + temp.value + reverse
    // }

    // return reverse.slice(4)

    
    // const stack = new Stack()
    // let reverse = "";
    // let current = linkedList.head

    
    // while (current !== null) {
    //     stack.push(current);
    //     current = current.next
    // }

    // while (stack.size() > 0) {
    //     if (stack.size() > 1) {
    //         reverse += `${(stack.pop().value)} -> `;
    //     } else {
    //         reverse += `${(stack.pop().value)}`;
    //     }
    // }

    // return reverse


    const stack = new Stack()
    let current = linkedList.head
    let reverse = ""
    
    while (current) {
        stack.push(current)
        current = current.next
    }

    while(stack.size() > 0) {
        if (stack.size() > 1) {
            reverse += stack.pop().value + " -> "
        } else {
            reverse += stack.pop().value
        }
    }

    return reverse

}

class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0
    }

    push (val) {
        const newNode = new Node(val);
        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode;
        }else {
            let temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }
        return ++this.length;
    }

    pop () {
        if (!this.top){
            return null;
        }
        const temp = this.top;
        if (this.top === this.bottom){
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length --;
        return temp.value;
     
    }

    size () {
        return this.length;
    }
}

exports.iterateAcrossLinkedListBackwards = iterateAcrossLinkedListBackwards;
