function findSubstrings(words, parts) {

// NAIVE, TOO SLOW
  parts.sort((a, b) => b.length - a.length);

  var result = words.map(word => {
    let i = 0;
    let index;
    const matches = {};
    while (i < parts.length) {
      index = word.indexOf(parts[i]);
      if (index !== -1) {
        if (!matches[parts[i].length]) {
          matches[parts[i].length] = {};
        }
        matches[parts[i].length][index] = word.replace(parts[i], `[${parts[i]}]`);
      }
      i++;
    }
    if (Object.keys(matches).length > 0) {
      return matches[Object.keys(matches).sort((a, b) => b - a)[0]][Object.keys(matches[Object.keys(matches).sort((a, b) => b - a)[0]]).sort((a, b) => a - b)[0]]
    }
    return word;
  })
  return result;
}



words = ["Apple", 
 "Melon", 
 "Orange", 
 "Watermelon"]
parts = ["a", 
 "mel", 
 "lon", 
 "el", 
 "An"]

 output =
["Apple", 
 "Me[lon]", 
 "Or[a]nge", 
 "Waterme[lon]"]
expectedOutput =
["Apple", 
 "Me[lon]", 
 "Or[a]nge", 
 "Water[mel]on"]

 console.log(findSubstrings(words, parts));