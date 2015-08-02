// JavaScript Intermediate Bootcamp - GA with Del
// Morning notes

Local Scope:
A functions local scope is the all the world of variables defined within a function, the body, and
shadow variables outside of the functions body.

  var name = "Matt";

  function hello = {
    var firstName = "Mari"
    console.log("Hello, firstName)
  }

  name = "Matt";
  // global variable

  hello();
  //


Stack Frame --> functions essentially stack; variables will be kept

Heap --> actual part of memory where variables are stored

Event Queue --> Once a function is run, it will move into the "queue"
  i.e. window.onload - gets entered int othe queue
  Events moved from the queue to the stack


Lexcial Scope:
The ability of a function to lookup variables not defined locally in its body.
Looks outside the function if you have not declared it

Accessing variables with same name outside of the local scope; could attach variables to objects
to keep track of the variables in context of the object


Parameters:
When we define parameters they are listed in the definition of the function, and their respective
values are made available in the local scope of the function. A functions parameters name will act
like local variables and shadow variables outside of scope.


    Parameters are what is passed into function; whereas arguments are the values of the parameters that have been given in the function.
      var name = "john";

      // name in this context would still be local, since it is a parameter
      // local scope variable declaration can happen within the function or passed in as a parameter and the argument's value will set there.

      var foo = function  (name) {
          name = "jane";
      };

      foo(name);
      console.log(name);


Function Declarations:
Cannot (and should not) be inside a control statement (will get hoisted).

"greet" is an anynomous function; can make it a "named" expression so it's not anynomous when debugging in console (i.e. if error is returned in the console).

  var greet = function () {
      console.log("hello");
  };
  greet();

With hoisting, a function delcaration gets hoisted to the top and available in the global scope.

First Class Functions:
Functions that can be passed around like any other data, either passed in as parameter or returned in a function.


Higher Order Functions:

Create function countBy and takes in a number (num)
  start = 0;
Then incrament on the num we pass in








###### AFTERNOON ######

Node and Constructors

Node --> must require the file you want...
    var startNode = require("./javascriptFile.js");
    command D to exit the "server";

Constructor functions declaration start off with capital letters

Procedural abstraction ?

Data abstraction --> group data and then associate behavior and other data with it

When creating a new object, the "new" keyword does not require you to return "this"; does it automatically (implicitly)

Prototype does not require to recreate the method everytime; all data objects within context share
the same prototypes vs. the contructor is unquie data or attribute to that object

prototypeProperty vs hasOwnProperty:

prototypeProperty is a specific property that belongs to the prototype; whereas hasOwnProperty is specific to the object. i.e. --> new Student 'name'-'matt', matt is the only name. Could be useful for queries and determining on the DOM with a specific name or ID.

Prototype Chain --> can access other methods of the object

Prototypical Inheritance

    function Person(name){
        this.name = name
    }

    Person.prototype.greet = function(){
        return "Hello, my name is " + this.name;
    };

    function Student(name, course){
        this.name = name;
        this.course = course;
    };

    Student.prototype = new Person();
    Student.prototype.constructor = Student;
    // added constructor back to the object


Mocha --> must be within test/spec folder in order to run "mocha"

























