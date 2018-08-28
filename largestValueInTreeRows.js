//
// Definition for binary tree:

function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

function largestValuesInTreeRows(t) {

  const rows = {};
  const largestVals = [];

  const checkNode = (node, level) => {
    if (node) {
      rows[level] ? rows[level].push(node.value) : rows[level] = [node.value];
      checkNode(node.left, level + 1);
      checkNode(node.right, level + 1);
    }
  }

  checkNode(t, 0);

  console.log(rows)

  for (var key in rows) {
    largestVals.push(rows[key].sort((a, b) => a - b)[rows[key].length - 1])
  }

  return largestVals;

}

t = {
    "value": -1,
    "left": {
        "value": 5,
        "left": {
            "value": -1,
            "left": {
                "value": 10,
                "left": null,
                "right": null
            },
            "right": null
        },
        "right": null
    },
    "right": {
        "value": 7,
        "left": null,
        "right": {
            "value": 1,
            "left": {
                "value": 5,
                "left": null,
                "right": null
            },
            "right": null
        }
    }
}

console.log(largestValuesInTreeRows(t))