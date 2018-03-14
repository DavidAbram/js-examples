var numbers = [0, 1, 2, 3];

var sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);