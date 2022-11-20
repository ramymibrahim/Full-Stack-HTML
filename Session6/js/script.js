"use strict";
console.log(this);
function displayStudent(student) {
  console.log(`First Name: ${student.firstName}`);
  console.log(`Last Name: ${student.lastName}`);
  console.log(`Score: ${student.score}`);
  console.log(`Email: ${student.email}`);
}

let firstName="Maged Monir1"
const display=()=>{
    // let firstName="Maged Monir"
    console.log(this);
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${this.lastName}`);
    console.log(`Score: ${this.score}`);
    console.log(`Email: ${this.email}`);
}
let students_arr = [
  ["Ramy", "Mohamed", "ramy@ramy.com", 80],
  ["Maged", "Saied", "maged@maged.com", 90],
  ["Marwa", "Ibrahim", "marwa@marws.com", 95],
  ["AbdelRahman", "Magdi", "abdo@abdo.com", 98],
];

let student1 = {
  firstName: "Ramy",
  lastName: "Mohamed",
  email: "ramy@ramy.com",
  score: 80,
};

let students = [
  { firstName: "Ramy", lastName: "Mohamed", email: "ramy@ramy.com", score: 80 ,display:display},
  {
    firstName: "Maged",
    lastName: "Saied",
    email: "maged@maged.com",
    score: 90,
    display:display
  },
  {
    firstName: "Ramy1",
    lastName: "Mohamed1",
    email: "ramy@ramy.com",
    score: 85,
    display:display
  },
  {
    firstName: "Maged2",
    lastName: "Saied2",
    email: "maged@maged.com",
    score: 95,
    display:display
  },
];

let validPassword = "123";
let password = "123";
let trials = 0;
while (validPassword != password) {
  //confirmed = confirm("Are you sure?");
  password = prompt("Please type your password");
  //continue;
  trials++;
  if (trials == 3) break;
  console.log("You have only " + (3 - trials) + " left");
}
if (validPassword == password) console.log("Correct Password");
else console.log("incorrect Password");
password = "";

// do {
//   password = prompt("Please type your password");
// } while (validPassword != password);
for (let i = 0; i < students.length; i++) {
  displayStudent(students[i]);
}

// for(){}
for (let s of students) {
  console.log(s.email);
}
//for of
//for in
for (let k in student1) {
  console.log(k);
  console.log(student1[k]);
}

//forEach
students.forEach((s) => {
  displayStudent(s);
});
console.log(students);

////// Calculate Sum of Scores
let total = 0;
for (let student of students) {
  total = total + student.score;
}
console.log(`Total Scores are: ${total} Only`);

////// Calculate Avg of Scores
console.log(`Avg Scores is: ${total / students.length} Only`);
////// Get Students with Scores >= 90
let highRankedStudents = [];
for (let student of students) {
  if (student.score >= 90) {
    highRankedStudents.push(student);
  }
}
console.log(highRankedStudents);
////// Convert for into while
let i = 0;
while (i < students.length) {
  displayStudent(students[i]);
  i++;
}
//Spread Operator ...
let arr = [1, 2, 3];
let arr2 = [...arr, 77]; //solves pass by ref problem
let student2 = { ...student1, age: 50 };

// Arrays & Objects
// Loops
// ForEach, For, For Of
// Spread Operator
// Functions
// Rest Operator
// --------------
// DOM
// Cart Example
// Optional Parameter
// Short Circuting && || ?? ?
// BOM
// JQuery Example
// Numbers and Dates
// Sets and Maps