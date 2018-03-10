function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

var array = [1, 30, 39, 29, 10, 13];

array.every(isBelowThreshold);
