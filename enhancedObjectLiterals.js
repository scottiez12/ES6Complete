function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function () {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function (title) {
      return this.inventory.find((book) => book.title === title).price;
    },
  };
}

const inventory = [
  { title: "Harry Potter", price: 10 },
  { title: "Javascript", price: 15 },
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle("Harry Potter");

//after some refactoring....
function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find((book) => book.title === title).price;
    },
  };
}

const inventory = [
  { title: "Harry Potter", price: 10 },
  { title: "Javascript", price: 15 },
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle("Harry Potter");
