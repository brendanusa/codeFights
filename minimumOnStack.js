function minimumOnStack(operations) {

  function Stack() {
    this.storage = [];
    this.minStorage = {};
  }

  Stack.prototype = {

    min: function() {
      return parseInt(Object.keys(this.minStorage).sort((a, b) => a - b)[0]);
    },

    add: function(value) {
      this.storage.push(value);
      if (this.minStorage[value]) {
        this.minStorage[value]++;
      } else {
        this.minStorage[value] = 1;
      }
    },

    pop: function() {
      const value = this.storage[this.storage.length - 1];
      if (this.minStorage[value] = 1) {
        delete this.minStorage[value];
      } else {
        this.minStorage[value]--;
      }
      return this.storage.pop();
    }

  }

  var stack = new Stack();

  const mins = [];

  operations.forEach(operation => {
    let operationType = operation.slice(0, 4);
    if (operationType === 'push') {
      stack.add(parseInt(operation.slice(5, operation.length)));
    }
    if (operationType === 'pop') {
      stack.pop();
    }
    if (operationType === 'min') {
      mins.push(stack.min());
    }
  })

  return mins;

}

operations = ["push 10", "min", "push 5", "min", "push 8", "min", "pop", "min", "pop", "min"]

console.log(minimumOnStack(operations))
