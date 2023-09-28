'use strict';

// ==============Scoping in Practice======

// function calcAge(birthYear){
// 	const age = 2023-birthYear;
// 	function printAge() {
// 		 let output = `${firstName} , You are ${age}, born in ${birthYear}`;
// 		 	console.log(output);
// 		 	if(birthYear >= 1981 && birthYear <= 1996){
// 		 		var millenial = true;
// 		 		const firstName= 'Adwaith'; //Current Scope & Js does not bother for varible lookup
// 		 		const str = `Oh , you are a millenial, ${firstName}`;
// 		 		console.log(str);
// 		 		function add(a,b){
// 		 			return a+b; // exmaples for blocked scope functions
// 		 		}
// 		 		const output = 'New Output'; //Completely new  varible bound to this function scope
// 		 	}
// 		 	console.log(millenial);
// 		 	//console.log(output);
// 		 	//console.log(add(2,3));
// 		 	//console.log(str); Will not work because of the block scope
// 	}
// 	printAge();
// 	return age;
// }

// const firstName = 'Jonas';//global scope
// calcAge(1995);

// // ======================Hoisting and TDZ in practice ====================

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'jonas';
// let job = 'teacher';
// const year  = 1991;

// functions
// console.log(addDecl(2,3));
// console.log(addExp(2,3)); //Cannot excess function before initialization
// console.log(addArrow(2,3));//Cannot excess function before initialization

// function addDecl(a,b) {
// 	return a+b ;
// }

// const addExp = function(a,b){
// 	a+b;
// }
// const addArrow = (a,b) => {
// 	a+b;
// }

// var addArrow = (a,b) => { //Here the output will state that it is not a function because . During hoisting
// 	//the function will be set to undefined.That is, undefined(2,3);
// 	a+b;
// }

// Example

// if(!numProducts) deleteShoppingCart(); //numproducts = undefined;

// var numProducts = 10;

// function deleteShoppingCart() {
// 	console.log(`All Products Deleted`);
// }

// var x= 1; //it will create properties on the window
// let y =2; //They(let & const) dont
// const z =3;

// console.log(x===window.x);

//==================this_keyword_inPractice=====================

// console.log(this);

// const calcAge  = function(birthYear) {
// 	console.log(2037-birthYear);
// 	console.log(this);
// }

// const calcAgeArrow  = (birthYear) => {
// 	console.log(2037-birthYear);
// 	console.log(this); //Displays the window object
// }

// calcAge(1991);
// calcAgeArrow(1990);

// const jonas = {
// 	year: 1991,
// 	calcAge: function() {
// 		//console.log(this);
// 		console.log(2037-this.year);
// 	},
// };

// jonas.calcAge();

// const matilda= {
// 	year:2017,
// };

// matilda.calcAge = jonas.calcAge; //Method Borrrowing

// matilda.calcAge();

// const f = jonas.calcAge;
// f();

// // ============Regular_Functions vs Arrow Functions===

// var firstName = 'matilda';//creates a property o the window object

// const jonas = {
// 	firstName: 'Jonas',
// 	year: 1991,
// 	calcAge: function() {
// 		// console.log(this);
// 		console.log(2037-this.year);

// 		//Solution-1

// 		// const self = this; //self or that
// 		// const isMillenial = function(){
// 		// 	console.log(self);
// 		// 	//console.log(this.year >= 1981 && this.year <=1996);
// 		// 	console.log(self.year >= 1981 && self.year <=1996);
// 		// }

// 		//Solution-2

// 		const isMillenial = ()=>{
// 			console.log(this);
// 			//console.log(this.year >= 1981 && this.year <=1996);
// 			console.log(this.year >= 1981 && this.year <=1996);
// 		}
// 		isMillenial();
// 	},
// 	greet: () => console.log(`Hey ${this.firstName}`), //Here this indicates window object That is, window.firstname = undefined;
// 	//never use arrow function as a method
// };

// jonas.greet();
// jonas.calcAge();

// // Arguments Keyword
// const addExp = function(a,b){
// 	console.log(arguments);
// 	return a+b;
// }

// addExp(2,5);
// addExp(2,5,8,9);

// const addArrow = (a,b)=>{
// 	console.log(arguments);
// 	return a+b;
// }

// addArrow(2,5,8,9);

// ======Primitives vs. Objects (Primitive vs. Reference Types)=========

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friend', friend);
// console.log('Me', me);

// ====Primitive Values====

// let lastName = 'KS';
// let oldLastName = lastName;
// lastName = 'Amal';

// console.log('lastName', lastName);
// console.log('OldLastName', oldLastName);

// =====Object - Reference Values  - =====

// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const marriedJesssica = jessica;
// marriedJesssica.lastName = 'Davis';
// //This is not a a new object in the heap a reference to already created object

// console.log('before_marriage', jessica);
// console.log('after_marriage', marriedJesssica);

// ==Copying Objects==

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); //ONly create a shallow copy doesent create a deep clone
jessicaCopy.lastName = 'Davis';
jessicaCopy.age = 30;

jessicaCopy.family.push('Mary'); //The above object is only works in level 2..In the case of highly nested objects it will not work
jessicaCopy.family.push('John');

console.log('before_marriage', jessica2);
console.log('after_marriage', jessicaCopy);
