function possibleSums(coins, quantity) {
  const sums = {};

  for (let i = 0; i < coins.length; i++) {
    // iteration of current coin
    let j = 1;
    // sums already populated from prev coins
    let existingSums = Object.keys(sums).map(sum => parseInt(sum));
    while (j <= quantity[i]) {
      // add current coin value to existing sums
      existingSums.forEach(sum => {
        sums[coins[i] * j + sum] = null;
      })
      // add value to obj afterwards to avoid adding to itself
      sums[coins[i] * j] = null;
      j++;
    }
  }
  
  // number of unique sums
  return Object.keys(sums).length;
}

coins = [100, 500]
quantity = [2, 2]

// coins = [1, 2]
// quantity = [50000, 2]

// coins = [1, 2, 3]
// quantity = [2, 3, 10000]

// coins = [3, 1, 1]
// quantity = [111, 84, 104]

console.log(possibleSums(coins, quantity))