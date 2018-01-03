function firstDuplicate(a) {
  let aObj = {};
  let result = -1;
  a.forEach((number) => {
    if (aObj[number.toString()]) {
      result === -1 ? result = number : null;
    } else {
      aObj[number] = 1;
    }
  })
  return result;
}

console.log(firstDuplicate([2, 3, 3, 1, 5, 2]))