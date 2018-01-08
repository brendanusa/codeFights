function containsCloseNums(nums, k) {
  const numsObj = {};
  let result = false;

  nums.forEach((num, i) => {

    if (numsObj[num] !== undefined) {
      numsObj[num].old = numsObj[num].new;
      numsObj[num].new = i;
    } else {
      numsObj[num] = {old: 0, new: i}
    }

    if (numsObj[num].new - numsObj[num].old <= k) {
      result = true;
    }

  });

  return result;
}

nums = [1, 0, 1, 1]
k = 1

console.log(containsCloseNums(nums, k));