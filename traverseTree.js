//
// Definition for binary tree:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

function traverseTree(t) {

  const vals = {};
  const breadthFirstVals = [];

  const checkNode = (node, level) => {
    if (node) {
      vals[level] ? vals[level].push(node.value) : vals[level] = [node.value]
      checkNode(node.left, level + 1);
      checkNode(node.right, level + 1);
    }
  }

  checkNode(t, 0);

  for (var key in vals) {
    vals[key].forEach(val => breadthFirstVals.push(val));
  }

  return breadthFirstVals;

}

t = {
    "value": 1,
    "left": {
        "value": 2,
        "left": null,
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 4,
        "left": {
            "value": 5,
            "left": null,
            "right": null
        },
        "right": null
    }
}

console.log(traverseTree(t))