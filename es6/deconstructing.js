var programmer = {
  name: 'Ivica',
  surname: 'Ivić',
  age: 25,
  height: 180.0,
  isCurrentlyProgramming: true,
  languages: ['JavaScript', 'Python', 'Go', 'C++']
}

var programmerName = programmer.name;
var programmerSurname = programmer.surname;

var {programmerName, programmerSurname} = programmer;