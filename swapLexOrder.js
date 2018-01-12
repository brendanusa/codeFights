function swapLexOrder(str, pairs) {
  const charMap = {};
  let mostConnections = 1;

  // function to store connections between indices
  const mapNum = (index1, index2) => {
    if (!charMap[index1]) {
      charMap[index1] = {[index1]: null, [index2]: null};
      charMap[index1].connections = 1;
    } else {
      charMap[index1][index2] = null;
      charMap[index1].connections++;
    }
    // iterations required to store all the connections
    charMap[index1].connections > mostConnections ? mostConnections = charMap[index1].connections : null;
  }

  pairs.forEach(pair => {
    mapNum(pair[0], pair[1]);
    mapNum(pair[1], pair[0])
  })

  while (mostConnections > 0) {
    for (let index1 in charMap) {
      delete charMap[index1].connections
      for (let index2 in charMap[index1]) {
        Object.keys(charMap[index1]).forEach(index => {
          charMap[index2][index] = null;
        })
      }
    }
    mostConnections--;
  }

  // will need to delete available chars but preserve connections
  const linkMap = JSON.parse(JSON.stringify(charMap));

  let largestStr = '';

  for (let i = 1; i < str.length + 1; i++) {
    if (charMap[i]) {
      // list of available chars - [char, index]
      var chain = Object.keys(charMap[i]).map(num => {
        return [str[num - 1], num];
      }).sort();
      largestStr += chain[chain.length - 1][0];
      // remove char from available chars
      Object.keys(linkMap[chain[chain.length - 1][1]]).forEach(num => {
        delete charMap[num][chain[chain.length - 1][1]];
      })
    } else {
      // if no pair for this index, use existing char
      largestStr += str[i - 1];
    }
  }

  return largestStr;
}

str = "abdc"
pairs = [[1,4], 
 [3,4]]

str = "abcdefgh"
pairs = [[1,4], 
 [7,8]]

str = "acxrabdz"
pairs = [[1,3], 
 [6,8], 
 [3,8], 
 [2,7], [3, 6]]

 str = "fixmfbhyutghwbyezkveyameoamqoi"
pairs = [[8,5], 
[10,8], 
[4,18], 
[20,12], 
[5,2], 
[17,2], 
[13,25], 
[29,12], 
[22,2], 
[17,11]]

 console.log(swapLexOrder(str, pairs));