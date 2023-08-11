//konstruktor

// const Animal = function (name, age) {
//   this.name = name;
//   this.age = age;
// };

// class

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.eat = function () {
      console.log(this.name + " mniam mniam");
    };
  }
}
