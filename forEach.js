var colors = ["red", "blue", "green"];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(function (color) {
  console.log(color);
});

var numbers = [1, 2, 3, 4, 5];

var sum = 0;

numbers.forEach(function (number) {
  sum += number;
});

function adder(number) {
  sum += number;
}

numbers.forEach(adder);
sum;
