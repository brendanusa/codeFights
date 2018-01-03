function isCryptSolution(crypt, solution) {

  const cryptObj = solution.reduce((acc, val) => {
    acc[val[0]] = val[1];
    return acc;
  }, {})

  if (crypt[0].length > 1 && cryptObj[crypt[0][0]] === '0') {
    return false;
  }

  if (crypt[1].length > 1 && cryptObj[crypt[1][0]] === '0') {
    return false;
  }

  if (crypt[2].length > 1 && cryptObj[crypt[2][0]] === '0') {
    return false;
  }

  const findWordValue = word => {
    let wordNum = '';
    for (var i = 0; i < word.length; i++) {
      wordNum += cryptObj[word[i]];
    }
    return parseInt(wordNum);
  }

  if (findWordValue(crypt[0]) + findWordValue(crypt[1]) === findWordValue(crypt[2])) {
    return true;
  }

  return false;

}

var crypt = ["SEND", 
 "MORE", 
 "MONEY"]
var solution = [["O","0"], 
 ["M","1"], 
 ["Y","2"], 
 ["E","5"], 
 ["N","6"], 
 ["D","7"], 
 ["R","8"], 
 ["S","9"]]

console.log(isCryptSolution(crypt, solution));