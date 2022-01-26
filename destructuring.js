//es5
var expense = {
  type: "Business",
  amount: "$45 USD",
};

var type = expense.type;
var amount = expense.amount;

//es6 refactor
//so we're declaring a variable called 'type', with the 'type' from expense as the value..
//the names have to be identical to the prop of the variable
const { type } = expense;
const { amount } = expense;
//further condensed
const { type, amount } = expense;
console.log(type);
console.log(amount);

//pull props off objects
//es5
var savedFile = {
  extension: "jpg",
  name: "repost",
  size: 14040,
};

function fileSummary(file) {
  return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}

fileSummary(savedFile);
//es6
function fileSummary({ name, extension, size }) {
  return `The file ${name}.${extension} is of size ${size}`;
}

//destructuring out of arrays
const companies = ["Google", "Facebook", "Uber"];
//grabbing the object in the array in order from first to last... the nomenclature is irrelevant
//notice the square brances instead of curly braces...
const [name, name2, name3] = companies;
name;
name2;
name3;
//can do this with spread operators too
const [name, ...rest] = companies;
rest;

//mixing destructuring of arrays and objects together
const companies = [
  { name: "Google", location: "Mountain View" },
  { name: "Facebook", location: "Menlo Park" },
  { name: "Uber", location: "San Francisco" },
];

//es5
//var location = companies[0].location;

//es6
//square brackets grab from the array, in this case the first element, and the
//curly brackets grab the prop 'location' from that first array object
const [{ location }] = companies;
location;
//another way to do it
const Google = {
  locations: ["Mountain View", "New York", "London"],
};
const {
  locations: [locations],
} = Google;
locations;

//good use-cases
//the big benefit here is that we can pass the args to the signup() in any order,
//instead of having to remember them and the order and pass all the args separately
function signup({ username, password, email, dateOfBirth, city }) {
  //create a new user
}

//other code....
//other code....
//other code....
//other code....
const user = {
  name: "Jack Sparrow",
  password: "mypassword",
  email: "pirate@ship.com",
  dateOfBirth: "1/1/1990",
  city: "Tortuga",
};

signup(user);

//say this is what were getting from an api
const points = [
  [4, 5],
  [10, 1],
  [0, 40],
];

//and this is the shape we want
//[
//  {x: 4, y:5},
//  {x:10, y:1},
//  {x:0, y: 40}
//]

points.map(([x, y]) => {
  return { x, y };
});
