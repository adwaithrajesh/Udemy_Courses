'use strict';

// Constructor function starts witha capital Letter && Arrow function cannot be used

// --------------Constructor Function-----------

const Person = function (firstName, birthYear) {
  //Instance Properties
  this.name = firstName;
  this.dob = birthYear;

  // Never create a method inside a constructor function
  /*
  this.calcAge = function (birthYear) {
    console.log(2037 - this.birthYear);
  };
  */
}; // --------Blue print of a house-----------

// 4. Steps that the new keyword does

// 1. New {} is created
//2. function is called , this = {}
//3. {} linked to prototype
// 4. function automatically return {}

// Creating Objects
const jonas = new Person('Jonas', 1991);
console.log(jonas); //-------Actual House--------

const adwaith = new Person('Adwaith', 1999);
console.log(adwaith); //Person {name: 'Adwaith', dob: 1999}

//Here jonas an adwaith is an instance of Person

const pappu = 'pappu';
console.log(jonas instanceof Person); // true
console.log(pappu instanceof Person); // false

// Prototyping

console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.dob);
};

jonas.calcAge();
adwaith.calcAge();
