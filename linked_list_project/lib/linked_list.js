// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val,
        this.next = null
    }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.tail = null,
        this.head = null,
        this.length = 0
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const nextNode = new Node(val)
        if (this.length === 0) {
            this.tail = nextNode
            this.head = nextNode
            this.length ++
        }else {
            this.tail.next = nextNode
            this.tail = nextNode
            this.length ++
        }
        // return {
        //     head: this.head,
        //     tail: this.tail,
        //     length: this.length
        // }
        return this;

    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.length === 0) return undefined;
        if (this.tail == this.head) {
            let temp = this.head
            this.tail = null;
            this.head = null;
            this.length --;
            return temp;
        }
        this.tail.next = null;

        let next = this.head
        
        while (next) {
            if (next.next === this.tail) break;
            next = next.next 
        }
        let returnTail = this.tail;
        next.next = null;
        this.tail = next;
        this.length --;
        return returnTail

    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        const newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length ++;
        }else {
            newNode.next = this.head;
            this.head = newNode;
            this.length ++;
        }
        return {
            head: this.head,
            tail: this.tail, 
            length: this.length
        }
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (this.length === 0){
            return undefined;
        }else if (this.length === 1){
            let temp = this.head;
            this.head = null;
            this.tail = null;
            this.length --;
            return temp
        }else {
            let temp = this.head
            this.head = this.head.next 
            this.length --;
            return temp;
        }
    }

    // TODO: Implement the contains method here
    contains(target) {
        let next = this.head;
        while(next) {
            if (next.value === target) return true;
            next = next.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (this.length-1 < index) return null;
        let LinkedList = [this.head]
        let counter = 0

        while (counter < index) {
            LinkedList.push(LinkedList[counter].next)
            counter ++;
        }

        return LinkedList[index]
    }

    // TODO: Implement the set method here
    set(index, val) {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.value = val;
            return true;
        }
        return false 
        
    }

    // TODO: Implement the insert method here
    insert(index, val) {

        if (index < 0 || index >= this.length) return false; // if the index is out of bounds, return false 
        if (index === this.length) return !!this.addToTail(val); //if the index is === the length, add to the tail
        if (index === 0) return !!this.addToHead(val); //if the index is 0 add to the head 
        
        const newNode = new Node(val);
        const prevNode = this.get(index - 1)
        const temp = prevNode.next
        prevNode.next = newNode;
        newNode.next = temp;
        this.length ++;
        return true;

    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.removeHead();
        if (index === this.length - 1) return this.removeTail();

        const prev = this.get(index-1);
        const removedNode = this.get(index);
        prev.next = removedNode.next;
        this.length -= 1;
        return removedNode;

    }

    // TODO: Implement the size method here
    size() {
        return this.length
    }
}


exports.Node = Node;
exports.LinkedList = LinkedList;
