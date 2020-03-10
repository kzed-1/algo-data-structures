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

function inOrderArray(root) {
    if (!root) {
        return []
    }
    return inOrderArray(root.left).concat([root.val]).concat(inOrderArray(root.right))
}


function postOrderArray(root) {
    if (!root) return []
    return postOrderArray(root.left).concat(postOrderArray(root.right)).concat([root.val])
}



module.exports = {
    inOrderArray,
    postOrderArray
};