function kthLargestElement(nums, k) {
//  naive
    return nums.sort((a, b) => b - a)[k - 1];
}
