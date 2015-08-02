function Pet(name, age) {
  // adds properties
  this.name = name;
  this.age = age;
}

// walk
Pet.prototype.walk = function () {
  return "Walking!";
}

// var fluffers =  new Pet("fluffers", 10);
// console.log(fluffers);

// sleep
Pet.prototype.sleep = function () {
  return "ZZZzzzZZZzzz";
};

// eat
Pet.prototype.eat = function () {
  return "NOMMM NOMMM NOMMM";
};


//create a Dog constructor that inherits from Pet
function Dog (name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
}

Dog.prototype = new Pet();
Dog.prototype.constructor = Dog;


// And give a Dog a dogYears method
Dog.prototype.dogYears = function (){
  return this.age2*7;
};



module.exports = {};
module.exports.Pet = Pet;
module.exports.Dog = Dog;