function findProfession(level, pos) {

    // keep track of which child relative to parent
    // if even, child has same profession as parent
    let toggle = 2;

    // iterate through parents
    while (level > 2) {
      pos % 2 === 0 ? toggle++ : null;
      pos = Math.floor((pos + 1) / 2);
      level--;
    }
    
    // check pos and toggle at level 2 for possible doctor
    if (pos === 1 && toggle % 2 === 1) {
      return 'Doctor';
    } else if (pos === 2 && toggle % 2 === 0) {
      return 'Doctor';
    } else {
      // else return engineer
      return 'Engineer';
    }
    
}

console.log(findProfession(20, 171971))