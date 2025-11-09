function counter(number) {
  let count = number;
  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    reset: function () {
      count = 0;
    },
    getValue: function () {
      return count;
    },
  };
}

const myCounter = counter(10);
myCounter.increment();
console.log(myCounter.getValue()); // Output: 11
myCounter.increment();
console.log(myCounter.getValue()); // Output: 12
myCounter.decrement();
console.log(myCounter.getValue()); // Output: 11
myCounter.reset();
console.log(myCounter.getValue()); // Output: 0