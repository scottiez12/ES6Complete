//so what is a generator
//a function that can be entered and exited multiple times
//tying all of this to an analogy about walking to a store, buying stuff, and walking back

//the * is what declares the function as a generator
function* shopping() {
  //2. stuff on the sidewalk...

  //3. us walking down the sidewalk

  //4. go into the store with cash
  const stuffFromStore = yield "cash";

  //7. walk to laundry place
  const stuffFromLaundry = yield "laundry";
  //9. walking back home
  //where we'd have stuffFromStore and stuffFromLaundry..
  return [stuffFromStore, stuffFromLaundry];
}

//stuff inside the store
//note that calling shopping() on it's own doesn't run the function... that's what the gen.next() does
const gen = shopping();
gen.next(); //1. leaving our house
//5. walked into store...
//walking up and down the aisles...
//purchase our stuff
gen.next("groceries"); //6. leaving the store with groceries
gen.next("clean clothes"); //8 leaving laundry

//so generators are perfect for forOf loops...
function* colors() {
  yield "red";
  yield "blue";
  yield "green";
}

//so generators are perfect for forOf loops...
const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}
myColors;

//more practical example
const engineeringTeam = {
  size: 3,
  department: "Engineering",
  lead: "Jill",
  manager: "Alex",
  engineer: "Dave",
};

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

names;

const testingTeam = {
  lead: "Amanda",
  tester: "Bill",
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: "Engineering",
  lead: "Jill",
  manager: "Alex",
  engineer: "Dave",
};

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
  //could read the * here as 'go look in the other generator for yields'
  yield* testingTeamGenerator;
}

function* TestingTeamIterator(testingTeam) {
  yield testingTeam.lead;
  yield testingTeam.tester;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

names;

//above section...refactored
const testingTeam = {
  lead: "Amanda",
  tester: "Bill",
  //the square brackets don't make the Symbol.iterator an array, it's a kvp like the rest of the props
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  },
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: "Engineering",
  lead: "Jill",
  manager: "Alex",
  engineer: "Dave",
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  },
};

const names = [];
for (let name of engineeringTeam) {
  names.push(name);
}

names;
