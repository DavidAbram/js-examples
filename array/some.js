var array = [1, 2, 3, 4, 5];

var even = function(element) {
  return element % 2 === 0;
};

array.some(even);
