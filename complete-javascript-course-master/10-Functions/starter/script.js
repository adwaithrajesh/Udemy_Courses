'use strict';

//Default-Parameters..........and how to skip parameters
/*

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = numPassengers * 189
) {
  //Older ES-5 Way
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); //{flightNum: 'LH123', numPassengers: 1, price: 189}
createBooking('LH123', 2, 800); //{flightNum: 'LH123', numPassengers: 2, price: 800}
createBooking('LH128', 5); //{flightNum: 'LH128', numPassengers: 5, price: 945}
createBooking('LM862', undefined, 5); //{flightNum: 'LM862', numPassengers: 1, price: 5}

*/
// How passing Arguments Works Values vs Reference

/*

//Note : In this example it defines how the reference of an object can inturn cause problems by usig that object at different functions

const flight = 'LH1458';
const adwaith = {
  name: 'Adwaith Rajesh',
  passport: 24529625848,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 24529625848) {
    alert('Check in');
  } else {
    alert('Wrong Passport');
  }
};

checkIn(flight, adwaith);
console.log(flight);
console.log(adwaith);

//The above is the same as

//const flightNum = flight; Here creating a new copy to a newly created variable
//const passenger = adwaith Here the passenger object is referencing adwaith object and reflecting the changes

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(adwaith);
checkIn(flight, adwaith);

//Note: JavaScript does not have passing by reference(Concept of pointers)

*/

//--------------First_Class and Higher Order Function

//-------Function accepting callback functions(Higher Order Function)

/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//The below function takes in afunction as an argument so it is called a higher-order function
const transformer = function (str, fn) {
  console.log(`Original string is given by: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`); // Functions is also having methods
};

//Here upperFirstWord we are only passing the values
transformer('JavaScript is the best!', upperFirstWord);
//Output for each function call is given below
// -------------------Set-1----------------

/*
Original string is given by: JavaScript is the best!
script.js:89 Transformed string: JAVASCRIPT is the best!
script.js:90 Transformed by: upperFirstWord
*/

//transformer('JavaScript Is the Best!', oneWord);

//Note: oneWord and upperFirstWord is a call-back function because we do not call them our self but insted we call javascript to bascially tell them later

// -------------------Set-2----------------

/*
Original string is given by: JavaScript Is the Best!
script.js:89 Transformed string: javascriptisthebest!
script.js:90 Transformed by: oneWord
*/

/*

const high5 = function () {
  console.log('🎈');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5); //3🎈

*/

//Why Callback function is really helpfull

/*
1.Its makes it easy to splitup out code into more reusable and interconnected parts

2.Its allow us to create ------abstraction-----.We hide the detail of the code implementation.Simply means it hides the indepth details of the code

*/

// ------------Functions_Returning_Functions

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// Convertig the above function using arrow function

//const greet = greeting => name => console.log(`${greeting} ${name}`)

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas'); //Functions returning another function

*/

//------------------------------The Call and apply method
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name }); //Here we do not write name:name because the key&
    //the_ value v_name is same
  },
};

lufthansa.book(239, 'Adwaith Rajesh');
lufthansa.book(635, 'Arshitha Rajesh');
console.log(lufthansa);

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// -----------Call-Method------------

const book = lufthansa.book; //Storing a function to a new variable

//The below function-call does not work

//book(23, 'Dilna David'); //Very important part.Because here in the new function the "this" keyword is now pointing  to nowhere

book.call(euroWings, 23, 'Sarah Williams'); //----------------Very

//Important---In the above code first parameter (euroWings, 23, 'Sarah Williams') "euroWings refers to the this keyword in that function"

console.log(euroWings);

book.call(lufthansa, 239, 'John Cooper');

// ----------Apply-Method-------------An alternative to call but not used mostly in modern programming

const flightData = [586, 'Saradha KrishnanKutty'];
book.apply(euroWings, flightData);

book.call(euroWings, ...flightData); //Spreading out the parameters

*/

/*

// -----------------The Bind Method----------

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name }); //Here we do not write name:name because the key&
    //the_ value v_name is same
  },
};

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// book.call(lufthansa, 239, 'John Cooper');

const book = lufthansa.book;

const bookEW = book.bind(euroWings);
bookEW(23, 'Steven Williams');
const bookLH = book.bind(lufthansa);
bookLH(256, 'Adwaith Rajesh');

console.log(euroWings);
console.log(lufthansa);

//Alreday predefining a function which only accept required parameter to the book function

const bookEW23 = book.bind(euroWings, 23);

bookEW23('Amjunath');
bookEW23('Amareesh K.');

// With event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// Here in the below code the this keyword will always point to the event handler that is button elemenet

//document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

//------To overcome this We write

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial-Application for bind_method

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23); //Order of the parameter is important

// addTax = (rate, value) => value + value * 0.23;
console.log(addVat(320));
console.log(addVat(500));
console.log(addVat(823));

// Using bind method actually gives u sthe opperchunity to create a new function . Thereby helping us to modifybthe existin function

const hello = greeting => name => console.log(`${greeting} ${name}`);

hello('Hello')('Adwaith');

//-------------Challenge--To write the above code in function inside function

const finalTax = rate => value =>
  console.log(`Final Tax for the goods is given by ${value + value * rate}`);

//finalTax(0.23)(300); //Final Tax for the goods is given by 369

const productTax = finalTax(0.23);
productTax(823); //Final Tax for the goods is given by 1012.29.

*/

//-----------------Immediately invoked function expression

/*

const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

(function () {
  console.log('This will never run again'); //This body is called Immediately invoked function expression
  const isPrivate = 23;
})();

(() => console.log('This will also never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(isPrivate); //Will create block scope
console.log(notPrivate); // Does not create a block scope

//---Note : Here the Immediately invoked funcctio is not still used anyway beacuse a block of statemnet inside "{ }" can create a scope for private variables(privacy)..So inorder to create privately accessable varibles we nowadays do not relay on IIMe.

// It is still used now a days for executing this function only once ..And its most use case can be see in async javascript

*/

/*

// --- Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// -----Explanations----of ----Closures

// -> A function has access to the varible-enviroment (VE) of the execution context in which it was created

// -> VE attached to the function,exactly as it was at the time and place the function was created

// ->We do not have to manually create closures.This is a javascript feature that happens automatically.

*/

// -----------More_Closure_Examples

/*

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);
//Reassingning f function

h();
f();

console.dir(f);

// 2nd Example for Closure in action

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    //Here the functiom inside setTimeout is executed on a global scope.

    //Here this call-back function called completely independant from the board passsenger function

    console.log(`We are now boarding all ${n} Pasengers`);
    console.log(`There are 3 groups,each with ${perGroup} passengers`);
  }, wait * 1000); //Converting into milliseconds
  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

// setTimeout example

//setTimeout(function () {
// console.log(`Adwaith Rajesh`);
//}, 1000);

*/
