function possibleSums(coins, quantity) {
  const sums = {};

  for (let j = 0; j < coins.length; j++) {
    let l = 1;
    while (l <= quantity[j]) {
      Object.keys(sums).forEach(sum => {
        sums[parseInt(sum) + coins[j]] = null;
      });
      sums[coins[j]] = null;
      l++;
    }
  }

  // let str = '';
  // Object.keys(sums).forEach(sum => {
  //   str += sum + ', '
  // })

  // console.log(str)

  return Object.keys(sums).length;
}

coins = [100, 500]
quantity = [2, 2]

// coins = [1, 2]
// quantity = [50000, 2]

coins = [1, 2, 3]
quantity = [2, 3, 10000]

// coins = [3, 1, 1]
// quantity = [111, 84, 104]

console.log(possibleSums(coins, quantity))