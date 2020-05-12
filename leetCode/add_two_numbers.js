// strat with a dummy head here you will append the new linked list
// keep track of the carry, the 2 heads of the linked list, and the current node of the new linked list
// loop through the linked list of l2 and l1 
//      add the val of l2 and l1 and carry 
//        make new carry eqaul to rounded sum / 10 
//      next node = new ndoe with val of sum % 10 
//      make currNode the next node 
//      make the next linked list node l1, l2 to its respective next node 
// if carry is a one then the next node will be 1 
// return dummy node.next

var addTwoNumbers = function (l1, l2) { // O(Max(m,n))T O(Max(m,n))S 

    let dummyHead = new ListNode(0);
    let carry = 0; 
    let p = l1;
    let q = l2;
    let currNode = dummyHead;

    while (p != null || q != null) {
        let x = (p) ? p.val : 0;
        let y = (q) ? q.val : 0;
        let sum = x + y + carry

        carry = Math.floor(sum / 10)

        currNode.next = new ListNode(sum % 10);
        currNode = currNode.next;

        if (p != null) p = p.next;
        if (q != null) q = q.next;
    }

    if (carry > 0) {
        currNode.next = new ListNode(carry);
    }

    return dummyHead.next
};