function addNumbers(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers([1, 2, 3, 4, 5]);

//refactored with rest operator...assuming we wanted to receive a bunch of single numbers instead of an array
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1, 2, 3, 4, 5);

//spread operator
const defaultColors = ["red", "blue"];
const userFavoriteColors = ["orange", "yellow"];
const fallColors = ["fire red", "fall orange"];

["green", "blue", ...fallColors, ...defaultColors, ...userFavoriteColors];

//rest and spread in the same function
function validateShoppingList(...items) {
  if (items.indexOf("milk") < 0) {
    return ["milk", ...items];
  }
  return items;
}

validateShoppingList("oranges", "bread");

//something a little more practical
const MathLibrary = {
  calculateProduct(...rest) {
    console.log("please use the multiply method instead");
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  },
};

MathLibrary.calculateProduct(1, 2, 3, 4, 5);
