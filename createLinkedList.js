const createList = (arr) => {

  function ListNode(x) {
    this.value = x;
    this.next = null;
  }

  var list = new ListNode(arr.shift());

  placeNode = (newNode, destinationNode) => {
    if (destinationNode.next === null) {
      destinationNode.next = newNode;
    } else {
      placeNode(newNode, destinationNode.next);
    }
  }

  createNode = () => {
    if (arr.length) {
      node = new ListNode(arr.shift());
      placeNode(node, list);
      createNode();
    }
    return;
  }

  createNode();

  return list;

}