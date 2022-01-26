let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //reject();
    resolve();
  }, 3000);
  //resolve();
  //reject();
});

promise
  .then(() => console.log("finished"))
  .then(() => console.log("i finished too"))
  .catch(() => console.log("rejected"));

let url = "https://jsonplaceholder.typicode.com/posts/";
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
