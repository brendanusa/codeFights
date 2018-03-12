function nextLarger(a) {
  // to store value and index of values that need to be replaced
  const prevVals = {};
  for (let i = 0; i < a.length; i++) {
    // store array of indexes for each value
    if (!prevVals[a[i]]) {
      prevVals[a[i]] = [i];
    } else {
      prevVals[a[i]].push(i);
    }
    // if current value is larger than any remaining stored values, replace them with current val
    for (var key in prevVals) {
      if (a[i] > key) {
        prevVals[key].forEach(index => {
          a[index] = a[i];
        })
        // delete replaced value from object
        delete prevVals[key];
      }
    }
  }
  // replace any unchanged elements with -1
  for (var key in prevVals) {
    a[prevVals[key]] = -1;
  }
  return a;
}

console.log(nextLarger([6, 7, 3, 8]))
