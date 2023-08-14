//konstruktor

// const Animal = function (name, age) {
//   this.name = name;
//   this.age = age;
// };

// class

// class Animal {
//   constructor(name, species) {
//     this.name = name;
//     this.species = species;
//     this.eat = function () {
//       console.log(this.name + " mniam mniam");
//     };
//   }
// }

//pierwszy sposób na utworzenie konstruktora
const Car = function (name) {
  this.name = name;
};

//drugi sposób
function Car(name) {
  this.name = name;
}

//instacje
const maluch = new Car("maluch");
const polonez = new Car("polonez");
