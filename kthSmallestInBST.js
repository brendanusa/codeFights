//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

function kthSmallestInBST(t, k) {

  const values = [];

  const storeValue = (node) => {
    if (node) {
      values.push(node.value);
      storeValue(node.left);
      storeValue(node.right);
    }
  }

  storeValue(t);

  return values.sort((a, b) => a > b ? 1 : -1)[k - 1];

}