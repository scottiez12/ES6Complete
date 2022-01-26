//called 'prototypal' inheritance... similar to regular inheritance in OOP
//so even JS classes fall under that umbrella

function Car(options) {
  this.title = options.title;
}

//so we add functions and whatnot to the .prototype property of the class object
Car.prototype.drive = function () {
  return "vroom";
};

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function () {
  return "beep";
};

const toyota = new Toyota({ color: "red", title: "Daily Driver" });
("``````");
toyota;
toyota.drive();
toyota.honk();

//refactored as a class...
class Car {
  constructor({ title }) {
    this.title = title;
  }
  drive() {
    return "vroom";
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options);
    this.color = options.color;
  }

  honk() {
    return "beep beep";
  }
}

const toyota = new Toyota({ title: "Title....", color: "blue" });
toyota.honk();
toyota.drive();
toyota;

//best times to use classes...shame I hate classes in react
