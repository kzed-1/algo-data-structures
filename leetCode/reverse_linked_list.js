// 206. Reverse Linked List
// Easy

// Reverse a singly linked list.

//     Example:

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL

// Follow up:

// A linked list can be reversed either iteratively or recursively.Could you implement both ?

var reverseList = function (head) {

    if (head === null) return null

    let stack = [];

    let currentNode = head

    while (currentNode) {
        stack.push(currentNode.val)
        currentNode = currentNode.next
    }

    if (stack.length === 0) return null

    let newHead = new ListNode(stack.pop())

    let node = newHead


    while (stack.length > 0) {
        let val = stack.pop();

        node.next = new ListNode(val)
        node = node.next


    }

    return newHead

};

var reverseList = function (head) {

    if (head === null || head.next === null) return head;

    let p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p
};