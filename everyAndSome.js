var computers = [
  { name: "Apple", ram: 24 },
  { name: "Compaq", ram: 4 },
  { name: "Acer", ram: 32 },
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];
  if (computer.ram < 16) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

allComputersCanRunProgram;
onlySomeComputersCanRunProgram;

("+++++");

computers.every((computer) => {
  return computer.ram > 16;
});

("++++");

computers.some((computer) => {
  return computer.ram < 5;
});

var names = ["Alex", "Matthew", "Joe"];

names.every((name) => {
  return name.length > 4;
});

names.some((names) => {
  return names.length > 4;
});
