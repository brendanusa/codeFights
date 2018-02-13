function restoreBinaryTree(inorder, preorder) {

//   each value represents its own tree
//   find vertex, left side, and right side for each value/tree
//   continue until no more values
//   
//   iterating through preorder, everything to the left side of that value in inorder is the left side of the value's tree (leftSide), everything to the right is rightSide
//

function restoreBinaryTree(inorder, preorder) {

//   each value represents its own tree
//   find vertex, left side, and right side for each value/tree
//   
//   iterating through preorder, everything to the left side of that value in inorder is the left side of the value's tree (leftSide), everything to the right is rightSide
//
//   the inorder being passed to Tree is the segment of inorder that belongs to that subtree
  function Tree(inorder) {
    this.value = preorder[0];
    this.left = null;
    this.right = null;
    const leftSide = [];
    const rightSide = [];
    
    // build 'inorder' lists for left and right sides of tree
    let i = 0;
    while (inorder[i] !== preorder[0]) {
      leftSide.push(inorder[i]);
      i++;
    }
    i++;
    while (i < inorder.length) {
      rightSide.push(inorder[i]);
      i++;
    }
    
    // remove value from preorder after it has been used
    preorder = preorder.slice(1);
    
    if (leftSide.length > 0) {
      this.left = new Tree(leftSide);
    }
    if (rightSide.length > 0) {
      this.right = new Tree(rightSide);
    }

  }
  return new Tree(inorder, preorder);
}

inorder = [4, 2, 1, 5, 3, 6]
preorder = [1, 2, 4, 3, 5, 6]

console.log(restoreBinaryTree(inorder, preorder))