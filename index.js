//Block Scope
{
  let Name = "Shola";
  const Age = 12;
}
//console.log(Age);
//console.log(Name);
//Age and Name throws a ReferenceError because it cannot be acccessible outside the block

//Array of Students Objects
  const students = [
    { id: 1, name: "John", score: 38 },
    { id: 2, name: "Sam", score: 45 },
    { id: 3, name: "Kate", score: 72 },
    { id: 4, name: "Pam", score: 80 },
    { id: 5, name: "Zac", score: 60 },
  ];
 
const AverageScore = 50;

document.getElementById("studentsList").addEventListener("click", () => {
  console.log(students);
});

//Arrow function and reduce to find students above average score
document.getElementById("passingStudents").addEventListener("click", () => {
  const highScorers = students.reduce((aboveAverage, student) => {
    if (student.score > AverageScore) {
      aboveAverage.push(student);
    }
    return aboveAverage;
  }, []);
  console.log("Students who scored above average: ", highScorers);
});

//map to get the names of all students
document.getElementById("studentsName").addEventListener("click", () => {
  const studentsNames = students.map((student) => student.name);
  console.log("Names of all students: ", studentsNames);
});

//filter to get students who scored below average
document.getElementById("lowScorers").addEventListener("click", () => {
  const lowScorers = students.filter((student) => student.score < AverageScore);
  console.log("Students who scored below average", lowScorers);
});

//forEach to get the total score of all students
document.getElementById("totalScore").addEventListener("click", () => {
  let totalScore = 0;
  students.forEach((student) => {
    totalScore += student.score;
  });
  console.log("Total Score of all students: ", totalScore);
});

//splice to remove the students with scores below average
document.getElementById("removeLowScorers").addEventListener("click", () => {
  const updatedStudents = [...students];
  updatedStudents.splice(0, 2);
  console.log(updatedStudents);
});
