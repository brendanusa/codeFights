function nearestGreater(a) {

  const b = [];
  
  // naive
  // iterate outward from each index

  for (let i = 0; i < a.length; i++) {
    let j = 1;
    while (j !== null) {
      if (a[i - j] && a[i - j] > a[i]) {
        b.push(i - j);
        j = null;
      } else if (a[i + j] && a[i + j] > a[i]) {
        b.push(i + j);
        j = null;
      } else if (!a[i - j] && !a[i + j]) {
        b.push(-1);
        j = null;
      } else {
        j++;
      }
    }
  }

  return b;

}

a = [1, 4, 2, 1, 7, 6]

console.log(nearestGreater(a));