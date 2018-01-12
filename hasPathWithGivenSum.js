function hasPathWithGivenSum(t, s) {
    
    if (t === null) {
        return s === 0 ? true : false;
    }
    
    let result = false;
    
    const checkPath = (node, sum) => {
        sum += node.value;
        if (node.left) {
            checkPath(node.left, sum);
        }
        if (node.right) {
            checkPath(node.right, sum);
        }
        if (!node.left && !node.right && sum === s) {
            result = true;
        }
    }
    
    checkPath(t, 0);
    
    return result;
}