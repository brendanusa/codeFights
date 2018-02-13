// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function isSubtree(t1, t2) {

    if (!t1 && t2) return false;
    if (!t2) return true;

  const compareTrees = (node1, node2) => {
    if (node1 && node2) {
      if (node1.value !== node2.value) {
        return false;
      } else {
        if (compareTrees(node1.left, node2.left) && compareTrees(node1.right, node2.right)) return true;
      }
    } else if (!node1 && !node2) {
        return true;
    } else {
      return false;
    }
  }
    
  const findT2 = (node) => {
    if (!node) return;
    if (node.value === t2.value) {
      if (compareTrees(node, t2)) return true;
    } else {
        if (findT2(node.left) || findT2(node.right)) return true;
    }
    return false;
  }

  return findT2(t1);

}

t1 = {
    "value": 1,
    "left": {
        "value": 2,
        "left": null,
        "right": null
    },
    "right": {
        "value": 2,
        "left": null,
        "right": null
    }
}
t2 = {
    "value": 2,
    "left": {
        "value": 1,
        "left": null,
        "right": null
    },
    "right": null
}

console.log(isSubtree(t1, t2))