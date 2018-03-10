function decodeString(s) {

  // to keep track of nested strings
  let children = 0;
  // used to check for numerals
  const numbers = {0:1, 1:1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1}
  
  const decodeSubstring = (string, iterations) => {
    // to build the number of iterations for each substring
    let newIterations = '';
    // string being built by the current call of decodeSubstring
    let substring = '';
    // substring to be passed to next call of decodeSubstring
    let newSubstring = '';
    let i = 0;
    while (i < string.length) {
      if (children > 0) {
        // if bracket closes current nested substring (i.e. one level down)
        if (string[i] === ']' && children === 1) {
          children--;
          // add current nested substring to current substring
          substring += decodeSubstring(newSubstring, newIterations);
          // reset iterations and substring for next decodeSubstring call
          newIterations = '';
          newSubstring = '';
          i++;
        } else {
          // new open bracket indicates new nested substring (move down one level)
          if (string[i] === '[') {
            children++;
          }
          // closed bracket ends nested substring (move up one level)
          if (string[i] === ']') {
            children--;
          }
          // add character to nested string
          newSubstring += string[i];
          i++;
        }
      } else {
        // build number of iterations
        if (numbers[string[i]]) {
          newIterations += string[i];
          // if no more numerals
          if (string[i + 1] === '[') {
            // indicate start of nested substring (move down one level)
            children++;
            // convert numeral charaters to number
            newIterations = parseInt(newIterations);
            // advance to beginning of nested substring
            i += 2;
          } else {
            i++;
          }
        } else {
          // add character to current substring
          substring += string[i];
          i++;
        }
      }
    }
    // repeat substring
    return substring.repeat(iterations);
  }

  // pass entire string to inner function, iterated one time
  return decodeSubstring(s, 1);

}

var s = "10[hello]";

console.log(decodeString(s));