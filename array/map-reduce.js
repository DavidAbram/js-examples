var persons = [
  { name: 'Ivo', age: 22 },
  { name: 'Marko', age: 25},
  { name: 'Dinko', age: 32 }, 
]

var totalAge = persons.map(function(person) {
  return person.age;
}).reduce(function(accumulator, currentValue) {
  accumulator += currentValue;
  return accumulator;
}, 0)

var averageAge = totalAge / persons.length;