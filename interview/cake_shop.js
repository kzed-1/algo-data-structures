// My cake shop is so popular, I'm adding some tables and hiring wait staff so folks can have a cute sit-down cake-eating experience.

// I have two registers: one for take - out orders, and the other for the other folks eating inside the cafe.All the customer orders get combined into one list for the kitchen, where they should be handled first - come, first - served.

//     Recently, some customers have been complaining that people who placed orders after them are getting their food first.Yikes—that's not good for business!

// To investigate their claims, one afternoon I sat behind the registers with my laptop and recorded:

// The take - out orders as they were entered into the system and given to the kitchen. (takeOutOrders)
// The dine -in orders as they were entered into the system and given to the kitchen. (dineInOrders)
// Each customer order(from either register) as it was finished by the kitchen. (servedOrders)
// Given all three arrays, write a function to check that my service is first - come, first - served.All food should come out in the same order customers requested it.

//     We'll represent each customer order as a unique integer.

// As an example,

//     Take Out Orders: [1, 3, 5]
// Dine In Orders: [2, 4, 6]
// Served Orders: [1, 2, 4, 6, 5, 3]
// would not be first - come, first - served, since order 3 was requested before order 5 but order 5 was served first.

//     But,

//     Take Out Orders: [17, 8, 24]
// Dine In Orders: [12, 19, 2]
// Served Orders: [17, 8, 12, 19, 24, 2]
// would be first - come, first - served.


// function inOrder(dineIn, takeOut, served) {

//     for (let i = 0; i < served.length; i++) {

//         if (takeOut.length === 0 && dineIn.length === 0 ) return true

//         if (served[i] === dineIn[0] && dineIn.length > 0) {
//             dineIn.shift();
//         } else if (served[i] === takeOut[0] && takeOut.length > 0) {
//             takeOut.shift();
//         } else {
//             return [dineIn, takeOut, served]
//         }
//     }

//     return true 
// }

function inOrder(dineIn, takeOut, served) {

    let dineInIdx = 0;
    let takeOutIdx = 0;
    let lastTakeOutIdx = takeOut.length - 1;
    let lastDineInIdx = dineIn.length - 1;

    for (let i = 0; i < served.length; i++) {
        let order = served[i];

        if (dineInIdx <= lastDineInIdx && order === dineIn[dineInIdx]) {
            dineInIdx++;
        } else if (takeOutIdx <= lastTakeOutIdx && order === takeOut[takeOutIdx]) {
            takeOutIdx++;
        } else {
            return false;
        }

    }

    if (dineInIdx !== dineIn.length || takeOutIdx !== takeOut.length) {
        return false
    }

    return true

}

const di = [12, 19, 2];
const to = [17, 8, 24];
const so = [17, 8, 12, 19, 24, 2];

console.log(inOrder([2, 4, 6], [1, 3, 5], [1, 2, 4, 6, 5, 3]))
console.log(inOrder(di, to, so));
console.log(inOrder(di, [17], [17,12,19,2]));

