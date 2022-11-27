let display = function (greeting) {
  console.log(this);
  console.log(`${greeting}`);
  console.log(`First Name: ${this.firstName}`);
  console.log(`Last Name: ${this.lastName}`);
  console.log(`Score: ${this.score}`);
  console.log(`Email: ${this.email}`);
};

let students = [
  {
    firstName: "Ramy",
    lastName: "Mohamed",
    email: "ramy@ramy.com",
    score: 80,
  },
  {
    firstName: "Maged",
    lastName: "Saied",
    email: "maged@maged.com",
    score: 90,
    display: display,
  },
  {
    firstName: "Ramy1",
    lastName: "Mohamed1",
    email: "ramy@ramy.com",
    score: 85,
  },
  {
    firstName: "Maged2",
    lastName: "Saied2",
    email: "maged@maged.com",
    score: 95,
  },
];

students[1].display('Hi');
display.call(students[0],'Hi')
display.apply(students[0],['Hi']);
display = display.bind(students[0],'Hi');
display();