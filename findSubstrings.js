function findSubstrings(words, parts) {

// NAIVE, TOO SLOW
  parts.sort((a, b) => b.length - a.length);

  var result = words.map(word => {
    let i = 0;
    let index;
    const matches = {};
    let matchExists = false;
    while (i < parts.length) {
      index = word.indexOf(parts[i]);
      if (index !== -1) {
        if (!matches[parts[i].length]) {
          matches[parts[i].length] = {};
        }
        matches[parts[i].length][index] = word.replace(parts[i], `[${parts[i]}]`);
        matchExists = true;
      }
      if (matchExists) {
        if (i === parts.length - 1 || parts[i].length > parts[i + 1].length) {
          console.log(parts[i], matches[parts[i].length])
          return matches[parts[i].length][Object.keys(matches[parts[i].length]).sort((a, b) => a - b)[0]];
        }
      }
      i++;
    }
    return word;
  })
  return result;

    // OLD RETURN
    // if (Object.keys(matches).length > 0) {
    //   return matches[Object.keys(matches).sort((a, b) => b - a)[0]][Object.keys(matches[Object.keys(matches).sort((a, b) => b - a)[0]]).sort((a, b) => a - b)[0]]
    // }

// // EVEN SLOWER!
//   // sort parts by length
//   partsObj = {};
//   parts.forEach(part => {
//     if (!partsObj[part.length]) {
//       partsObj[part.length] = [];
//     }
//     partsObj[part.length].push(part);
//   })

//   const partLengths = Object.keys(partsObj).sort((a, b) => b - a);
//   console.log(partsObj)

//   words = words.map(word => {
//     const matches = {};
//     for (let i = 0; i < partLengths.length; i++) {
//       console.log('word', word)
//       console.log('partLength', partLengths[i])
//       partsObj[partLengths[i]].forEach(part => {
//         const matchIndex = word.indexOf(part);
//         if (matchIndex !== -1) {
//           matches[matchIndex] = word.replace(part, `[${part}]`);
//         }
//       })
//       const matchIndexes = Object.keys(matches).sort((a, b) => a - b);
//       if (matchIndexes.length > 0) {
//         return matches[matchIndexes[0]];
//       }
//     }
//     return word;
//   })

//   return words;

}

words = ["Aaaaaaaaa", 
 "bcdEFGh"]
parts = ["aaaaa", 
 "Aaaa", 
 "E", 
 "z", 
 "Zzzzz"]

 console.log(findSubstrings(words, parts));