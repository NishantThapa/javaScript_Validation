var database = [
	{
    user: "nishant",
    pass: "123"
  },
  {
    user: "Arch",
    pass: "hello1"
  }
];
// testing database using arry and object
var usr = prompt("Please Enter Your UserName.");
var pass = prompt("Please Enter Your Password.");
// user and password input
function check(a, b) {
  for (var i = 0; i < database.length; i++) {
    if (database[i].user === usr && database[i].pass === pass) {
      return true;
    }
  }
  return false;
}
// function for checking if credential match with database return true else false
function login(a, b) {
  if (check(a, b)) {
    alert("Welcome: " + usr);
  } else {
    alert("Invalid UserName or Password please try again !!");
  }
}
//function for validating
login(usr, pass);
//function call
