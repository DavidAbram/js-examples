var users = [
  { name: 'Ivo', age: 22 },
  { name: 'Marko', age: 25},
  { name: 'Dinko', age: 32 }, 
]

var names = users.map(function(person) {
  return person.name;
});