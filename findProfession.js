function findProfession(level, pos) {

    let positionsTotal = 1;

    let i = 1;

    // calculate total number of vals in given level
    while (i < level) {
      positionsTotal *= 2;
      i++;
    }

    console.log(positionsTotal)

    // vals for level = 2
    let levelVals = 'ED';

    // build string for given level
    let origLength = 2;
    while (levelVals.length < positionsTotal) {
      origLength = levelVals.length;
      for (i = origLength - 1; i >= 0; i--) {
        levelVals += levelVals[i];
      }

    }

    return levelVals[pos];
    
}

console.log(findProfession(20, 171971))