var numbers = [1, 2, 3];
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

var doubled = numbers.map((number) => {
  return number * 2;
});

doubled;

doubledNumbers;

var cars = [
  { model: "ford", price: "cheap" },
  { model: "camaro", price: "expensive" },
];

var prices = cars.map((car) => {
  return car.price;
});

prices;
