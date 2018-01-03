function addTwoHugeNumbers(a, b) {

  var nodeToNumber = (node, string) => {
    let stringPart = node.value.toString();
    while (stringPart.length < 4) {
      stringPart = '0' + stringPart;
    }
    string += stringPart;
    if (node.next) {
      return nodeToNumber(node.next, string);
    } else {
      console.log(parseInt(string));
      return parseInt(string);
    }
  }

  const sum = nodeToNumber(a, '') + nodeToNumber(b, '');

  const removeLeadingZeroes = (string) => {
    while (string[0] === '0' && string.length > 1) {
      string[0] = '';
    }
  }

  const stringToNode = (num) => {
    var string = num.toString();
    // array?
    var result = [];
    let len = string.length;
    while (string.length > 4) {
      // string.slice??
      let snippet = string[len - 4] + string[len - 3] + string[len - 2] + string[len - 1];
      removeLeadingZeroes(snippet);
      result.push(parseInt(snippet));
    }
    if (len) {
      result.push(parseInt);
    }
    return result.reverse();
  }

  return stringToNode(sum);

}

