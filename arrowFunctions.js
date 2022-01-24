//this is the same as...
const add = (a, b) => {
  return a + b;
};

//this.. but the return is implied/implicit since there isn't any curly braces
const addTwo = (a, b) => a + b;

const double = (number) => 2 * number;

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.map((number) => number * 2));

const team = {
  members: ["Jane", "Bill"],
  teamName: "Super Squad",
  teamSummary: function () {
    return this.members.map((member) => `${member} is on ${this.teamName}`);
  },
};

team.teamSummary();
