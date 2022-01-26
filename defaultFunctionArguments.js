function makeAjaxRequest(url, method) {
  if (!method) {
    method = "GET";
  }

  //logic for request
}

makeAjaxRequest("google.com");

//refactoring for default function arguments
function makeAjaxRequest(url, method = "GET") {
  //logic for request
  return method;
}

makeAjaxRequest("google.com");
makeAjaxRequest("google.com", "POST");

//null does not try to reassign... so if you needed to..
//makeAjaxRequest('google.com', null);

//a little more complex...
function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 9999999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}

const user = new User(generateId());
createAdminUser(user);
