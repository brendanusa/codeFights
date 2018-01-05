// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function rearrangeLastN(l, n) {
    var newList = [];
    var startIndex = n;
    
    const populateList = (node, n) => {
        if (node) {
            newList[n] = node.value;
            populateList(node.next, n + 1);
        } else {
            while (startIndex > 0) {
                newList[startIndex - 1] = newList.pop();
                startIndex--;
            }
        }
    }
    
    populateList(l, n);
    
    return newList;
}