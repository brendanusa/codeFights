function reverseNodesInKGroups(l, k) {
    
  let result = [];
  
  const origK = k;
  let startIndex = 0;

  const populateResult = (node, k) => {

    if (node === null) {

      if (origK - k === 0) {
        return;
      }

      var remainder = result.splice(-origK);
      result = result.concat(remainder.reverse());

      while (result[result.length - 1] === undefined) {
        result.pop()
      }

      return;
    }

    result[startIndex + k - 1] = node.value;

    if (k === 1) {
      startIndex += origK;
      return populateResult(node.next, origK)
    }

    if (node !== null && node !== undefined) {
      return populateResult(node.next, k - 1);
    }

  }

  populateResult(l, k);
  
  return result;

}

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

let l;
let k;

l = [1, 2, 3, 4, 5]
k = 2

l = [1, 2, 3, 4, 5]
k = 1

l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
k = 3

l = [1000000000, -849483855, -1000000000, 376365554, -847904832]
k = 4

console.log(reverseNodesInKGroups(createList(l), k))
