// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Modify the definition of the Stack class provided to create an enhanced 
// version of a Stack data structure called MinMaxStack.
//
// A MinMaxStack has all of the same behavior as a Stack, but can also return
// the node with the minimum or maximum value in constant time.
//
// You may alter any of the original Stack's methods, including the 
// constructor.
//  
// Values of nodes of the MinMaxStack are always guaranteed to be numbers.
//
//
// ------------
// Constraints:
// ------------
//
// (1) All MinMaxStack methods must run in constant time, O(1).
//
//
// --------
// Example:
// --------
//
// const minMaxStack = new MinMaxStack();
//
// minMaxStack.push(10);
// minMaxStack.push(12);
// minMaxStack.push(8);
// minMaxStack.push(2);
// minMaxStack.push(20);
//
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 20
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 8
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 10
//
// minMaxStack.pop();
// console.log(minMaxStack.min());   => null
// console.log(minMaxStack.max());   => null
//
//
// -----------
// Let's code!
// -----------





class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

// Refactor the regular Stack below into a MinMaxStack!
class MinMaxStack { 
    // constructor() {
    //     this.top = null;
    //     this.bottom = null;
    //     this.length = 0;
    //     this.minStore = [];
    //     this.maxStore = [];
    // }

    // push(val) {
    //     let newNode = new Node(val)

    //     if (this.minStore.length === 0 || newNode.value <= this.minStore[this.minStore.length - 1].value) {
    //         this.minStore.push(newNode)
    //     }

    //     if (this.maxStore.length === 0 || newNode.value >= this.maxStore[this.maxStore.length - 1].value) {
    //         this.maxStore.push(newNode)
    //     }

    //     if(this.length === 0){
    //         this.top = newNode;
    //         this.bottom = newNode;
    //     } else {
    //         newNode.next = this.top;
    //         this.top = newNode;
    //     }
    //     this.length ++;
    //     return this.length

    // }

    // pop() {
    //     let removedNode = this.top;
    //     if(this.length === 0) {
    //         return null;
    //     }

    //     if (this.minStore[this.minStore.length - 1] === this.top.value) {
    //         this.minStore.pop()
    //     }

    //     if (this.maxStore[this.maxStore.length - 1] === this.top.value) {
    //         this.maxStore.pop()
    //     }

    //     if (this.length ===1) {
    //         this.top = null;
    //         this.bottom = null;
    //     } else {
    //         this.top = this.top.next
    //     }
    //     this.length --;
    //     return removedNode;

    // }

    // size() {
    //     return this.length
    // }

    // min() {
    //     return this.minStore[this.minStore.length - 1] || null;
    // }

    // max() {
    //     return this.maxStore[this.maxStore.length - 1] || null;
    // }
 
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
        this.minValueStorage = [];
        this.maxValueStorage = [];

    };

    push(val) {
        const newNode = new Node(val);

        if (this.minValueStorage.length === 0 || newNode.value <= this.minValueStorage[this.minValueStorage.length - 1].value) {
            this.minValueStorage.push(newNode)
        }
        if (this.maxValueStorage.length === 0 || newNode.value >= this.maxValueStorage[this.maxValueStorage.length - 1].value) {
            this.maxValueStorage.push(newNode)
        }

        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }
        return ++this.length;
    };

    pop() {
        if (!this.top) {
            return null;
        }
        const temp = this.top;
        if (this.top === this.bottom) {
            this.bottom = null;
        }

        if (this.top.value === this.maxValueStorage[this.maxValueStorage.length - 1].value) {
            this.maxValueStorage.pop();
        }

        if (this.top.value === this.minValueStorage[this.minValueStorage.length - 1].value) {
            this.minValueStorage.pop();
        }
        this.top = this.top.next;
        this.length--;
        return temp;
    };

    min() {
        return this.minValueStorage[this.minValueStorage.length - 1] || null;
    };

    max() {
        return this.maxValueStorage[this.maxValueStorage.length - 1] || null;
    };

    size() {
        return this.length;
    };
}

// Forgetting something down here? 
exports.Node = Node;
exports.MinMaxStack = MinMaxStack;

