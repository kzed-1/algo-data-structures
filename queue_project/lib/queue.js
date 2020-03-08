// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
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
    constructor(val, next = null){
        this.value = val,
        this.next = next
    }

}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(val) {
        let newNode = new Node(val)
        if (this.length === 0) {
            this.front = newNode
            this.back = newNode
        }else {
            this.back.next = newNode
            this.back = newNode
        }
        this.length++
        return this.length

    }

    dequeue() {
        let removedNode = this.front;
        if(this.length === 0) {
            return null;
        }

        if (this.length === 1) {
            this.front = null;
            this.back = null;
        }else {
            this.front = this.front.next
        }
        this.length --;
        return removedNode.value

    }

    size() {
        return this.length
    }


}

exports.Node = Node;
exports.Queue = Queue;


// constructor() {
//     this.front = null,
//         this.back = null,
//         this.length = 0;
// }

// enqueue(val) {
//     let node = new Node(val)
//     if (!this.front) {
//         this.front = node
//         this.back = this.front
//     } else {
//         this.back.next = node
//         this.back = node
//     }
//     this.length++;
//     return this.length
// }

// dequeue() {
//     if (!this.front) return null;

//     let temp;
//     if (this.length === 1) {
//         temp = this.front;
//         this.front = null;
//         this.back = null;
//         this.length--;
//         return temp.value
//     }

//     temp = this.front
//     this.front = temp.next
//     this.length--;
//     return temp.value

// }

// size() {
//     return this.length
// }