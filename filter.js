var products = [
  { name: "cucumber", type: "vegetable", quantity: 0, price: 1 },
  { name: "banana", type: "fruit", quantity: 10, price: 15 },
  { name: "orange", type: "fruit", quantity: 30, price: 13 },
  { name: "celery", type: "vegetable", quantity: 3, price: 5 },
];

var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
  if (products[i].type === "fruit") {
    filteredProducts.push(products[i]);
  }
}

filteredProducts;

products.filter((product) => {
  return product.type === "vegetable";
});

// Type is 'vegetable', qty > 0, price < 10

products.filter((product) => {
  return (
    product.type === "vegetable" && product.quantity > 0 && product.price < 10
  );
});

var post = { id: 4, title: "newPost" };
var comments = [
  { postId: 4, content: "post1" },
  { postId: 3, content: "post2" },
  { postId: 4, content: "post3" },
];

function commentsForPost(post, comments) {
  return comments.filter((comment) => {
    return comment.postId === post.id;
  });
}

commentsForPost(post, comments);
