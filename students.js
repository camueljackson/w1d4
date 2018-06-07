var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 },
  { id: 5, name: "bruce",    age: 29 }
];

function sortTheStudents(arr) {

  var sortedName = arr.sort(function(a, b){
    return a.name > b.name;
  });
  return sortedName;
}



console.log(sortTheStudents(students));