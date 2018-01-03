// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }


class Node {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(x) {
    var node = new Node(x);
    if (this.head !== null) {
      node.next = this.head;
    }
    this.head = node;
    this.length++;
  }
}

// version 5
function removeKFromList(l, k) {
    if (l === null) {
        return null;
    }
    console.log(l.value)
    if (l.value === k) {
        if (l.next !== null) {
            l.value = l.next.value;
            if (l.next.next !== null) {
                l.next = l.next.next;
            } else {
                return l = null;
            }
            removeKFromList(l, k);
        } else {
            return null;
        }
    } else if (l.next !== null) {
        if (l.next.value === k && l.next.next === null) {
            return l.next = null;
        }
        removeKFromList(l.next, k);
    }
    
    return l;

}

// version 7
function removeKFromList(l, k) {

    var inner = (node) => {
        console.log('#', l)
        if (node === null) {
            return l;
        }
        if (node.value === k) {
            if (node.next !== null) {
                node = node.next;
                console.log('$$$', node.value)
                return inner(node);
            } else {
                node = null;
                return l;
            }
        }
        if (node.next !== null) {
            return inner(node.next);
        } else {
            return l;
        }
    }
        
    return inner(l);
    
}

var list = new LinkedList();
list.insert(5);
list.insert(4);
console.log(list.head, list.length)
removeKFromList(list, 5);
console.log(list.head, list.length)