function inOrderArray(root) {
    const result = [];

    if (!root) return result;

    const left = result.concat(inOrderArray(root.left));
    const right = result.concat(inOrderArray(root.right));

    return result.concat(left).concat([root.val]).concat(right);
}

function postOrderArray(root) {
    const result = [];

    if (!root) return result;

    const left = result.concat(postOrderArray(root.left));
    const right = result.concat(postOrderArray(root.right));

    return result.concat(left).concat(right).concat(root.val)

}


module.exports = {
    inOrderArray,
    postOrderArray
};