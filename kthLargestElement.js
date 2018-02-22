function kthLargestElement(nums, k) {
    // naive
    // return nums.sort((a, b) => b - a)[k - 1];

    // heaps
    function Heap() {
      this.storage = [];
    }

    Heap.prototype = {
      add: function(value) {
        this.storage.push(value);

        let index = this.storage.length - 1;
        let parentIndex = Math.floor((this.storage.length) / 2) - 1;

        while (value > this.storage[parentIndex]) {
          this.storage[index] = this.storage[parentIndex];
          this.storage[parentIndex] = value;
          index = parentIndex;
          parentIndex = Math.floor((parentIndex + 1) / 2) - 1;
        }

        return this.storage;
      }
    }

    var heap = new Heap();

    for (let i = 0; i < nums.length; i++) {
      heap.add(nums[i]);
      console.log(nums[i], heap)
    }

    let rowFirstIndex = 1;

    while (rowFirstIndex < k - 1) {
      rowFirstIndex *= 2;
    }

    console.log('41', rowFirstIndex)
    console.log(heap.storage.slice(rowFirstIndex - 1, (rowFirstIndex - 1) * 2 + 1).sort((a, b) => b - a))

    return heap.storage.slice(rowFirstIndex - 1, (rowFirstIndex - 1) * 2 + 1).sort((a, b) => b - a)[k - rowFirstIndex];
    
}

// nums = [3, 2, 1, 5, 6, 4]
// k = 2

// console.log(kthLargestElement(nums, k))
