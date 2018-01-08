function areFollowingPatterns(strings, patterns) {
  const stringsObj = {};
  const patternsObj = {};

  for (let i = 0; i < strings.length; i++) {
    // if new string...
    if (stringsObj[strings[i]] === undefined) {
      // return false if not a new pattern
      if (patternsObj[patterns[i]] !== undefined) {
        return false;
      }
      // store identity (# unique) of string at string
      stringsObj[strings[i]] = Object.keys(stringsObj).length;
      // store last index of string at identity (# unique)
      stringsObj[stringsObj[strings[i]]] = i;
      patternsObj[patterns[i]] = Object.keys(patternsObj).length;
      patternsObj[patternsObj[patterns[i]]] = i;
    } else {
      if (stringsObj[stringsObj[strings[i]]] !== patternsObj[patternsObj[patterns[i]]]) {
        return false;
      }
      stringsObj[stringsObj[strings[i]]] = i;
      patternsObj[patternsObj[patterns[i]]] = i;
    }
  }

  return true;
}

strings = ["a", 
 "b", 
 "c"]
patterns = ["a", 
 "b", 
 "a"]

 console.log(areFollowingPatterns(strings, patterns))