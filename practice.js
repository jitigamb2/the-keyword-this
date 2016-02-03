//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
// 1) What is the purpose of the 'this keyword'?

      //Answer

// 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      // Rule 1 - By default, this refers to the global object.
	  // Rule 2 - When a function is called as a property on a parent object, this refers to the parent object inside that function.
	  // Rule 3 - When a function is called with the new operator, this refers to the newly created object inside that function.
	  // Rule 4 - When a function is called using call or apply, this refers to the first argument passed to call or apply. If the first argument is null or not an object, this refers to the global object.

// 3) What is the difference between call and apply?

      // Setting the context/scope before calling method. Both almost doing same thing expect with Apply we can pass arguments as an Array
	  // All JavaScript functions have two methods, call and apply, which let you call functions and explicitly set the value of this. The apply method takes two arguments: an object to set this to, and an (optional) array of arguments to pass to the function

// 4) What does .bind do?

      //Answer


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here

function User(username, email) {
	this.username = username;
	this.email = email;
	
	this.getUsername = function() {
		return this.username;
	}
}

var user = new User("JitinG", "jitin.gambhir@aexp.com");


//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

console.log(user.getUsername());

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

function Car(brand, model, year) {
	this.brand = brand;
	this.model = model;
	this.year = year;
	this.move = 0;
	this.moveCar = function() {
		console.log(this.move);
		return this.move + 10;
	}
}

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);
/*
Car.prototype.move = 0;
Car.prototype.moveCar = function() {
	//console.log(this.move);
	return this.move + 10;
} */

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

Car.prototype.getYear = getYear;

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here


//New Problem
var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

setTimeout(getMyUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //UNDEFINED

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //GLOBAL OBJECT

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
