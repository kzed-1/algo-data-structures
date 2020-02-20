// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(node) {
        if (!this.top) {
            this.top = node
            this.bottom = node
        }else {
            let temp = this.top;
            this.top = node
            this.top.next = temp
        }
        return ++this.length
    }

    pop() {
        if(this.length===0) return null;
        if(this.top === this.bottom){
            let temp = this.top
            this.top = null
            this.bottom = null
            this.length --;
            return temp;
        }
        let temp = this.top;
        this.top = this.top.next;
        this.length --;
        return temp;
        
        
    }

    size() {
        return this.length
    }

}

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor(){
        this.inStack = null;
        this.outStack = null;
        this.front = null;
        this.back = null;
        this.length = 0
    }

    enqueue(val){
        let newNode = new Node(val)
        if (this.front === null) {
            this.back = newNode
            this.front = this.back
        }else {
            let temp = this.back 
            this.back = newNode
            temp.next = newNode
        }
        return ++this.length
    }

    dequeue(){
        let temp = this.front;
        if (this.length === 0) return null;
        if (this.front === this.back) {
            this.back = null;
            this.front = null;
            this.length --;
            return temp;
        }else {
            this.front = this.front.next;
            this.length --;
            return temp;
        }
        
    }

    size(){
        return this.length
    }

};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
