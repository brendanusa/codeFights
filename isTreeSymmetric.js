//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function isTreeSymmetric(t) {
    
    if (!t) {
        return true;
    }
    
    if (!t.left && !t.right) {
        return true;
    }
    
    if (t.left && !t.right || !t.left && t.right) {
        console.log('19')
        return false;
    }
    
    if (t.left.value !== t.right.value) {
        return false;
    }
    
    let result = true;
    
    const checkPath = (node1, node2) => {
        if (!node1.left && !node1.right && !node2.left && !node2.right) {
            return;
        }
        if (!node1.left || !node1.right || !node2.left || !node2.right) {
            result = false;
            return;
        }
        if (node1.left.value !== node2.right.value) {
            result = false;
            return;
        }
        if (node1.right.value !== node2.left.value) {
            result = false;
            return;
        }
        checkPath(node1.left, node2.right);
        checkPath(node1.right, node2.left);
    }
    
    checkPath(t.left, t.right);
    
    return result;
    
}