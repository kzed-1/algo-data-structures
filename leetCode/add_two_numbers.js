/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {


    let num1 = "";
    let num2 = "";

    let currNodeL1 = l1
    let currNodeL2 = l2

    while (currNodeL1) {
        num1 = currNodeL1 + num1
    }

    while (currNodeL2) {
        num2 = currNodeL2 + num2
    }

    let total = parseInt(num1) + parseInt(num2)

    let stringTotal = total.toString();

    let totalNode = new ListNode(parseInt(stringTotal[stringTotal - 1]))

    let currTotalNode = totalNode;

    for (let i = stringTotal.length-2; i >= 0; i-- ) {
        currTotalNode.next = new ListNode(parseInt(stringTotal[i]));
        currTotalNode = currTotalNode.next
    }

    return totalNode


    // let ones = 0;
    // let tens = 0;
    // let hundreds = 0;
    // let thousands = 0;

    // let length1 = 0;
    // let length2 = 0;

    // let currentNode1 = l1
    // let currentNode2 = l2

    // while (currentNode1) {
    //     length1 += 1;
    //     currentNode1 = currentNode1.next
    // }

    // while (currentNode2) {
    //     length2 += 1;
    //     currentNode2 = currentNode2.next
    // }

    //     const maxLength = Math.max(length1, length2)


    //     for (let i = 0; i < maxLength; i++) {
    //         if (i === 0) {
    //             ones = l1.val + l2.val;
    //         };

    //         if (i === 1) {

    //             let tenl1 = 0;
    //             let tenl2 = 0;

    //             if (l1.next) {
    //                 tenl1 = l1.next.val
    //             }

    //             if (l2.next) {
    //                 tenl2 = l2.next.val
    //             }
    //             tens = tenl1 + tenl2
    //         }

    //         if (i === 2) {

    //             let hunl1 = 0;
    //             let hunl2 = 0;

    //             if (l1.next.next) {
    //                 hunl1 = l1.next.next.val
    //             }

    //             if (l2.next.next) {
    //                 hunl2 = l2.next.next.val
    //             }

    //             hundreds = hunl1 + hunl2

    //         }

    //     }

    //     if (ones > 9) {
    //         ones = 0
    //         tens += 1
    //     }

    //     if (tens > 9) {
    //         tens = 0
    //         hundreds += 1
    //     }

    //     if (hundreds > 9) {
    //         hundreds = 0
    //         thousands += 1
    //     }


    //     let numString = "" + thousands + hundreds + tens + ones

    //     let num = parseInt(numString);

    //     let newNumString = num.toString()

    //     let currNode = new ListNode(ones)
    //     let temp = currNode

    //     for (let i = newNumString.length; i > 0; i--) {
    //         currNode.next = new ListNode(newNumString[i])
    //         currNode = currNode.next
    //     }

    //     return temp


    //     if (!tens && !hundreds) {
    //         return new ListNode(ones)
    //     }

    //     let one = new ListNode(ones)
    //     one.next = new ListNode(tens)

    //     one.next.next = new ListNode(hundreds)

    //     if (thousands > 0) {
    //         one.next.next.next = thousands
    //     }

    //     return one


};


let num1 = "";
let num2 = "";

let currNodeL1 = l1
let currNodeL2 = l2

while (currNodeL1) {
    num1 = currNodeL1.val + num1
    currNodeL1 = currNodeL1.next
}

while (currNodeL2) {
    num2 = currNodeL2.val + num2
    currNodeL2 = currNodeL2.next
}


let total = parseInt(num1) + parseInt(num2)

let stringTotal = total.toString();


let totalNode = new ListNode(parseInt(stringTotal[stringTotal.length - 1]))

let currTotalNode = totalNode;

for (let i = stringTotal.length - 2; i >= 0; i--) {
    currTotalNode.next = new ListNode(parseInt(stringTotal[i]));
    currTotalNode = currTotalNode.next
}

return totalNode
    
    
};

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