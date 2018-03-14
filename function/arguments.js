function sum(a, b) {
  return a + b;
}

sum(2, 3);


function sumAll() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
      result = result + arguments[i];
    }
    return result;
}
sumAll(1, 2, 3, 4, 25);