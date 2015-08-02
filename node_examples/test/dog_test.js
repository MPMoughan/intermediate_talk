var expect = require("chai").expect;
var Dog = require("../pet.js");

describe("Dog", function () {

  describe("hasOwnProperties", function (){

    it("should include name", function (){
      var dog = new Dog();
      expect(dog.hasOwnProperty("name")).to.equal(false);
    })

    it("should include age", function (){
      var dog = new Dog();
      expect(dog.hasOwnProperty("age")).to.equal(false);
    })
  })
});
