var numbers = [10, 20, 30];

var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

var primaryColors = [{ color: "red" }, { color: "yellow" }, { color: "blue" }];

primaryColors.reduce((previous, primaryColor) => {
  previous.push(primaryColor.color);
  return previous;
}, []);

//this is the classic interview thing for reduce()
function balancedParens(string) {
  return !string.split("").reduce((previous, char) => {
    if (previous < 0) {
      return previous;
    }
    if (char === "(") {
      return ++previous;
    }
    if (char === ")") {
      return --previous;
    }
    return previous;
  }, 0);
}

balancedParens("((()");
