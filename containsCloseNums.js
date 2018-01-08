function containsCloseNums(nums, k) {
  const numsIndices = {};

  for (let i = 0; i < nums.length; i++) {
    if (i - numsIndices[nums[i]] <= k) {
      return true;
    }
    numsIndices[nums[i]] = i;
  }
  return false;
}

nums = [0, 1, 2, 3, 5, 2]
k = 2

console.log(containsCloseNums(nums, k));