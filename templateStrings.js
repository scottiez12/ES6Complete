// all the backtick stuff...

//es5
function getMessage() {
  const year = new Date().getFullYear();

  return "The year is " + year;
}

getMessage();

//es6
function getMessageTwo() {
  const year = new Date().getFullYear();
  return `The year is ${year}`;
}
