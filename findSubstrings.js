function findSubstrings(words, parts) {

  parts.sort((a, b) => b.length - a.length);

  return words.map(word => {
    let i = 0;
    let prevIndex = word.length;
    let match = null;
    while (i < parts.length) {
      const newIndex = word.indexOf(parts[i]);
      if (newIndex !== -1 && newIndex < prevIndex) {
        match = word.replace(parts[i], `[${parts[i]}]`);
        prevIndex = newIndex;
      }
      if (i === parts.length - 1 || parts[i].length > parts[i + 1].length) {
        if (match) {
          return match;
        }
      }
      i++;
    }
    return word;
  })

}

words = ["Aaaaaaaaa", 
 "bcdEFGh"]
parts = ["aaaaa", 
 "Aaaa", 
 "E", 
 "z", 
 "Zzzzz"]

 console.log(findSubstrings(words, parts));