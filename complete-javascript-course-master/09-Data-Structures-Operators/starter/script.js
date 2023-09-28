'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// //Destructuring Arrays

// const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr; //whenever js engine sees array synatx on the left side it will undestand that it will need destructuring.Destructuring(simply means unpacking)
// console.log(x, y, z);
// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

//Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//This can be also written in

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //Recieve 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

//Nested Destructuring

// const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const nested =  [2,4,[5,6,[41],9]];
// [ , ,[ , ,[j]]] = nested;
// console.log(j); //41

//Default Values

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// ======Object Destructuring======

// const restaurant = {
//   r_name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// const { r_name, openingHours, categories } = restaurant;
// console.log(r_name, openingHours, categories);

// const {
//   //changing the name of the propery in the original object
//   r_name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant; //Setting deafults
// console.log(menu, starters);

//Murtating variables with values from objects

// let a = 111;
// let b = 222;
// const obj = {
//   a: 23,
//   b: 7,
//   c: 14,
// };

// //We cannot use const or let because it will create new already declared varibles

// ({ a, b } = obj); //when we start a line with curly braces then JS expect a code block.Since we cannot assign anything to a code block.So to solve this we wrap it in prantesis
// console.log(a, b);

// Nested Objects;

// const restaurant = {
//   r_name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     starterIndex = 2,
//     mainIndex = 0,
//     time = '21.00', //Adding default values
//     address,
//   }) {
//     //reciveing an object
//     console.log(
//       `Order recieved Starter: "${this.starterMenu[starterIndex]}" and MainMenu: "${this.mainMenu[mainIndex]}" will be delivered to ${address} at ${time}}`
//     );
//   },
// };

// restaurant.orderDelivery({
//   //Passing an object on to the function inside an Object
//   time: '22.30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 3,
// });

// restaurant.orderDelivery({
//   address: 'Panukunnel (H), Mannathoor P.O',
//   starterIndex: 0,
// });

// const { r_name, openingHours, categories } = restaurant;
// const {
//   fri: { open: opening, close: closing },
// } = openingHours; //It does not access the openingHous directly but .The openingHours object is already deconsructed into a  varible above.
// console.log(opening, closing);

// ======spread Operator======

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

// const newArray = [1, 2, ...arr];

// console.log(badNewArr);
// console.log(newArray); // [1, 2, 7, 8, 9]
// console.log(...newArray); // 1 2 3 4 5 6 7 // Unlike destructuring here we are not creating new variables

// const restaurant = {
//   r_name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     starterIndex = 2,
//     mainIndex = 0,
//     time = '21.00', //Adding default values
//     address,
//   }) {
//     //reciveing an object
//     console.log(
//       `Order recieved Starter: "${this.starterMenu[starterIndex]}" and MainMenu: "${this.mainMenu[mainIndex]}" will be delivered to ${address} at ${time}}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`
//     );
//   },
//   //orderPasta(ing1, ing2, ing3) {  //A sorthand version of writing above code in ES6 form
//   //console.log(
//   //`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
//   //);
// };

// const newMenu = [...restaurant.mainMenu, 'Gnocci']; //Expanding an array by creatng new array
// //console.log(newMenu);

// //===========Copy array=======

// const mainMenuCopy = [...restaurant.mainMenu];

// //console.log(mainMenuCopy);

// // ======join Two array=======

// //Method: 1:
// // const joinedArray = [...restaurant.starterMenu].concat(restaurant.mainMenu);
// // console.log(joinedArray);

// // //Method:2:
// // const completeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(completeMenu);

// //Iterables===============

// const str = 'Adwaith';
// const letters = [...str];
// console.log(letters); //['A', 'd', 'w', 'a', 'i', 't', 'h']
// console.log(...str); //A d w a i t h

// //Using tempalte literals

// //console.log(`${...str} rajesh`); //Here it will not work because multiple values separeted by commas are usually accepted when we pass arguments into a function or built arrays

// const ingredients = [
//   //prompt("Lets's make pasta! Ingredient 1?"),
//   //prompt("Lets's make pasta! Ingredient 2?"),
//   //prompt("Lets's make pasta! Ingredient 3?"),
// ];
// console.log(...ingredients);

// const restaurant1 = {
//   r_name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   orderPasta: function (ing1, ing2, ing3) {
//     //New ES6 syntax
//     console.log(
//       `Here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`
//     );
//   },
// };

// restaurant1.orderPasta(...ingredients); //Use spread operator
// //The the commas between arguments are addded automatically

// // =========Objects=========

// //Copying an Object

// const newRestaurant = { FoundedIn: 1998, ...restaurant, founder: 'Adwaith' };
// console.log(newRestaurant);

// //Changing the copy object without affecting other

// const restaurantCopy = { ...restaurant };
// restaurantCopy.r_name = 'Lake Palace';
// console.log(restaurantCopy);

// =====Rest Patterns and Parameters===

// ================part-1 Destructuring====

//const arr = [1, 2, ...[3, 4]]; //Spred operator is on  the right side of the assignment operator

//const [a, b, ...others] = [1, 2, 3, 4, 5]; //Rest pattern because operations i on the right side

//console.log(a, b, others);

// const restaurant = {
//   r_name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderPizza(mainIngredients, ...otherIngredients) {
//     console.log(mainIngredients, otherIngredients);
//   },
// };

// // ===Testing in Arrays===

// const [a, , b, ...Others] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(a, b, Others);

// // ====Objects===

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // ================part-2 Functions===============

// const add = function (...numbers) {
//   // pack the value using rest
//   //numbers will create an array
//   //use of rest patterns in function
//   let sum = 0;
//   for (let i = 0; i <= numbers.length - 1; i++) {
//     sum = sum + numbers[i]; //We cannot decare sum here beacus e it will create a block scope
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 8, 6);
// add(8, 3, 9, 5, 26, 95, 6);

// const x = [23, 5, 85];
// add(...x); //unpack the values using spred

// restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushroom');

// -------Short-Circuiting--------
// Logical operators can use any data type and they can return any data type and they can do short circuiting

// const restaurant = {
//   r_name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderPizza(mainIngredients, ...otherIngredients) {
//     console.log(mainIngredients, otherIngredients);
//   },
// };

// console.log(3 || 'adwaith'); //return the truthy value ie, 3

// console.log(true || 0); // true
// console.log('' || 'adwaith'); // adwaith
// console.log(undefined || null); //null

// console.log(undefined || 0 || 'adwaith' || 23);

// //restaurant.numGuests = 23;

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// //if restaurant.numGuests exists the the value of it should be restaurant.numGuests otherwise it should be 10
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

//Using with the AND Opeartor

// console.log(0 && 'Jonas'); // As long as the truthy value is find the evaluvation countinues..If it find false it stop there and display it
// console.log(7 && 'Jonas');
// console.log(0 && false);

// console.log('Hello' && 23 && null && 'Jonas'); //null

// if (restaurant.orderPizza) {
//   //Checking if its exists
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza &&
//   restaurant.orderPizza('mushrooms', 'spinach', 'cucumber');

//Here if the orderPizza exists then we can call that function using the shortcircuit opeartor

// ------------------------Nullish Coalescing Opeartor

const restaurant = {
  r_name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients, otherIngredients);
  },
};

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests); //Here if numguest does exist display the number of guest so here the short-circuit operator takes 0 as a falsy value and this is not we wanted

// Nullish : null and undefined (NOT 0 or '')
// restaurant.numGuests = 0;
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

//------------------------Local Assignment Operator

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Pizza',
  owner: 'Giovanni Rossi',
};

// Using OR Operator for the avbove case

// Making use of Short circuiting

//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10; //If false then it will add new object and add the value defined

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//rest1.numGuests ??= 10;
//rest2.numGuests ??= 10; //nullish assignment operator (null or undefined)

//console.log(rest1);
//console.log(rest2);

//Logical AND operator

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

//console.log(rest1); //{name: 'Capri', numGuests: 0, owner: undefined}
//console.log(rest2); //{name: 'La Pizza', owner: '<ANONYMOUS>'}

//rest1.owner &&= '<ANONYMOUS>';
//rest2.owner &&= '<ANONYMOUS>';

//console.log(rest1); //{name: 'Capri', numGuests: 0}
//console.log(rest2); /// {name: 'La Pizza', owner: '<ANONYMOUS>'}

//-----------------------Coding_Challenge

/*
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and 
'players2')
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players
3. Create an array 'allPlayers' containing all players of both teams (22 
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored
GOOD LUCK 
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1.
// const [players1, players2] = game.players; //array destructuring
// console.log(players1, players2);

// //2.

// const [gk, ...fieldPlayers] = players1; //using rest syntax
// console.log(gk, fieldPlayers);

// //3.

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4.

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// //5.

// const {
//   odds: { team1, x: draw, team2 },
//   players,
// } = game; //Destructuring a newly creaeted independant object
// console.log(team1, draw, team2);

// //6.

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// //7.

// team1 < team2 && console.log('Team1 is more Likely to win'); //short-circuiting

// team2 < team1 && console.log('Team2 is more Likely to win'); //short-circuiting

//--------------------The for-of-loop

//const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//console.log(menu); //(7) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']
//for (const item of menu) console.log(item); //item is current element in each iteration

//In for -of loop we can still use continue and break

// for (const item of menu.entries()) {
//   console.log(item);
//   /*[0, 'Focaccia']
//    (2) [1, 'Bruschetta']
//   (2) [2, 'Garlic Bread']
//   (2) [3, 'Caprese Salad'] etc...*/
// }

// for (const [i, el] of menu.entries()) {
//   //Destructuring item
//   console.log(`${i + 1}: ${el}`);
//   //  1: Focaccia
//   //  2: Bruschetta
//   //  3: Garlic Bread
//   //  4: Caprese Salad
//   //  5: Pizza
//   //  6: Pasta
//   //  7: Risotto
// }

// --------------------Enhanced-Object_Literals

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// const restaurant1 = {
//   r_name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   //===================ES6 Enhanced_Object_literals===============
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderPizza(mainIngredients, ...otherIngredients) {
//     console.log(mainIngredients, otherIngredients);
//   },
// };

// 2nd enchancement

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const restaurant2 = {
//   r_name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     [weekDays[3]]: { //bracket notation to use varible name as property
//       //showing advanced-ways to use object-literals
//       open: 12,
//       close: 22,
//     },
//     [weekDays[4]]: {
//       //showing advanced-ways to use object-literals
//       open: 11,
//       close: 23,
//     },
//     [`day-${2 + 4}`]: {
//       //showing advanced-ways to use object-literals
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery({
//     // ============ //A short-hand using object-literals ES6 synatx to write function expression inside an object.Instead of
//     /*
//     order: function (starterIndex, mainIndex) {
//           return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//         },*/
//     starterIndex = 2,
//     mainIndex = 0,
//     time = '21.00', //Adding default values
//     address,
//   }) {
//     //reciveing an object
//     console.log(
//       `Order recieved Starter: "${this.starterMenu[starterIndex]}" and MainMenu: "${this.mainMenu[mainIndex]}" will be delivered to ${address} at ${time}}`
//     );
//   },
//   orderPasta(ing1, ing2, ing3) {
//     //A short-hand using object-literals ES6 synatx to write function expression inside an object
//     console.log(
//       `Here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`
//     );
//   },
// };

//------------Optional-Chaining

//console.log(restaurant.openingHours.mon.open); //script.js:775 Uncaught TypeError: Cannot read properties of undefined (reading 'open')

//if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open); // 11

//if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon); // here it wil not give undefined thats why we need optional chaining..It will not diplays anything

//if (restaurant.openingHours && restaurant.openingHours.mon)
//console.log(restaurant.openingHours.mon.open);

// with optional-chaining and  how it work
// ===========================================================
//console.log(restaurant.openingHours.mon?.open); //if open does not exist it will give you undefined..?-> is used to do optional chaining

//console.log(restaurant.openingHours?.fri?.open); //first check if openingHours exit then check if fri-objects exist..If exist the display open

// Optional-chaining-example

//const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

//for (const day of days) {
//const opens = restaurant.openingHours[day]?.open ?? 'closed'; //use of nullish coalescing operator together with optional-chaining ---to avoid display close insted of 0
//console.log(`On ${day},we open at ${opens}`);
//}

//methods

////console.log(restaurant.order?.(0, 1) ?? 'method does not exist');

//console.log(restaurant.orderRisottto?.(0, 3) ?? 'Method does not exist'); //Here orderRisotto?.(0,3) is simmilar to orderRisotto(0,3)
// '?.'---->is called the optional-chaining

//optional-chaining on array

//const users = [{ name: 'adwaith', email: 'adwaithrajesh008@gmail.com' }];

//to check wheater an array is empty or not
//console.log(users[0]?.name ?? 'Users array is empty'); //adwaith

// if not done in above way it would have been

//if (users.length > 0) console.log(users[0].name);
//else console.log('Users array is empty');

// //-------------------- Looping through objects

// //Propery Names or keys
// const properties = Object.keys(openingHours);
// console.log(properties); ///(3) ['thu', 'fri', 'sat']

// let openStr = `we are open on ${properties.length} days:`; //we are open on 3 days
// //Here  Object.keys(openingHours); act as an array

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// //Property Values

// const values = Object.values(openingHours);
// // console.log(values); /(3) [{…}, {…}, {…}]

// for (const day of Object.values(openingHours)) {
//   console.log(day);
// } //{open: 12, close: 22}
// // {open: 11, close: 23}
// //  {open: 0, close: 24}

// // To display key and the values, entries object

// const entries = Object.entries(openingHours);
// console.log(entries);

// //if object is simple we do [key,value]

// for (const [key, { open, close }] of entries) {
//   //destructuring object and array
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// -----------------------Sets

// In Es6 two more data structures is introducted they are sets and maps

// ---->Sets is a collecion of unique values.That means it canot have any duplicate values

//const orderSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pizza', 'Pizza']);
//console.log(orderSet); //Set(3) {'Pasta', 'Pizza', 'Risotto'}

//console.log(new Set('Adwaith')); //Set(7) {'A', 'd', 'w', 'a', 'i', …}

//console.log(orderSet.size); //3

// Set methods

//console.log(orderSet.has('Pizza')); //true
//console.log(orderSet.has('Bread')); //false
//orderSet.add('Garlic Bread'); //Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}
//orderSet.delete('Risotto');
//orderSet.clear();

// How to retrive values from sets.?
// answer: There is no method to retrive values from sets.because it contain all unique values..If needed use has method.

// sets are iterable,means that we can loop over them

//for (const order of orderSet) console.log(order); // Pasta Pizza Garlic Bread

// example

//const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

//const staffUnique = [...new Set(staff)]; //Unpack this entire set into newly array

//console.log(staffUnique);

//console.log(
//new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
//);

//console.log(new Set('Ambalathamkunnel').size);

// --------------Maps------------

// A map is a datastructure that is used to map values to keys,just like objects.And here the keys can hold any type
/*-----------------------

const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze,Italy');
console.log(rest.set(2, 'Lisbon,Portugal'));
//Calling he set method above not only update the value it also returns the map.

//Chaining the set method(updation)
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegiterian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');



  ------------------------------------*/
// --------------//console.log(rest);

/*Map(8) {'name' => 'Classico Italiano', 1 => 'Firenze,Italy', 2 => 'Lisbon,Portugal', 'categories' => Array(4), 'open' => 11, …}
[[Entries]]
0:{"name" => "Classico Italiano"}
1:{1 => "Firenze,Italy"}
2: {2 => "Lisbon,Portugal"}
3: {"categories" => Array(4)}
4: {"open" => 11}
5: {"close" => 23}
6: {true => "We are open :D"}
7: {false => "We are closed :("}*/

/* --------------------------------------------------
console.log(rest.get('name'));
console.log(rest.get(true)); //data type matters not every thing is a string
console.log(rest.get(1));

const time = 11;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //We are open :D

// if the value is true true will be displayed an dif the value is false false will be displayed

// Discussing maps properties

console.log(rest.has('categories')); //true
rest.delete(2);
console.log(rest.size); // 7
// rest.clear();

// --------------Using arrays and objects as map keys

rest.set([1, 2], 'Test');

console.log(rest.get([1, 2])); //undefined  // very important exapmle on primitive types basics,theory lecture

// to make it work

const arr = [1, 2];

rest.set(arr, 'Test');

console.log(rest.get(arr)); //[1,2]

rest.set(document.querySelector('h1'), 'Heading');
---------------------------------------*/

// ---------------------Iteration through maps

/*
const question = new Map([
  ['question', 'What is the best programming language in the world.?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'Correct 👍'],
  [false, 'Try Again'],
]);

console.log(question);

//Convert object to maps

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Looping through maps using for loop

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer'));

console.log(question.get(question.get('Correct') === answer));

//---------------------------How this is working

// --------------------console.log(question.get(true));--Very Important

// Converting map to an array

console.log([...question]);
console.log([...question.entries()]); //output is same as the above
console.log([...question.keys()]);
console.log([...question.values()]);
*/

// -----Working with Strings

//const airline = 'TAP Air Portugal';
//const plane = 'A320';

/* 
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

//String methods

console.log(airline.indexOf('r')); //6
console.log(airline.lastIndexOf('r')); //10
console.log(airline.indexOf('ortugal')); // -1 because here strings are casesensitive

// Extracting parts
console.log(airline.slice(4)); //Air Portugal   4 is the position at which extraction will start

console.log(airline.slice(4, 7)); //Air

console.log(airline.slice(0, airline.indexOf(' '))); // Tap indexOf(first_space_occurance)
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //console.log(airline.slice(8)); => displays -> portugal

console.log(airline.slice(-2)); // al(displays last two letters of portugal)
console.log(airline.slice(1, -1));
//AP Air Portuga

const checkMiddileSeat = function (seat) {
  //B and E are Middle_seat
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the Middle-Seat 🤢');
  else console.log('you got lucky 🥳');
};

checkMiddileSeat('11B');
checkMiddileSeat('23C');
checkMiddileSeat('3E');

*/

// -----Countinuing with simple string methods

// changing the case of a string

/*

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); //Jonas

//challenge = Write a function to do the above name correction

//comparing-emails

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();

//console.log(trimmedEmail); //hello@jonas.io

const normalizedEmail = loginEmail.toLowerCase().trim();
// How the above line work   [loginEmail.toLowerCase()]this will return a string and then trimmed method is used on that string.trim();

console.log(normalizedEmail); //hello@jonas.io

console.log(email === normalizedEmail);

//Replacing

const priceGB = '288,97€';
const priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23.Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
//All passengers come to boarding gate 23.Boarding door 23!
console.log(announcement.replaceAll('door', 'gate'));
//All passengers come to boarding gate 23.Boarding gate 23!

// -----Using regular expression
console.log(announcement.replace(/door/g, 'gate'));
//All passengers come to boarding gate 23.Boarding gate 23!

//Booleans

const planes = 'Airbus A320neo';
console.log(planes.includes('A320')); //true
console.log(planes.includes('Boeing')); //false
console.log(planes.startsWith('Air')); //true

if (planes.startsWith('Airbus') && planes.endsWith('neo')) {
  console.log('Part of the new Airbus');
}

//Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed to get on board');
  } else {
    console.log('Welcome Abroad');
  }
};

checkBaggage('I have a laptop , some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//Strings-Practice_part_3

//Here the split method output an array with splited elements

console.log('a+very+nice+string'.split('+')); //['a', 'very', 'nice', 'string']
console.log('Adwaith Rajesh'.split(' ')); //['Adwaith', 'Rajesh']

const [firstName, lastName] = 'Adwaith Rajesh'.split(' ');
console.log(firstName, lastName); //Adwaith Rajesh

// join-method

const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');

console.log(newName); //Mr Adwaith RAJESH

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); //Another_Way
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('adwaith rajesh');
capitalizeName('krishnankutty ambalathamkunnel');

//--------------------Padding

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); //+++++++++++Go to gate 23! now the length of the string should be 25

// console.log('Adwaith'.padEnd(25, '-'));//Adwaith------------------

console.log(message.padStart(23, '+').padEnd(30, '-'));

//Real-world--Application

const maskcreditCard = function (number) {
  const str = number + '';
  console.log(str.length);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskcreditCard(4533952369855596));
console.log(maskcreditCard('758856698536695'));

//Repeat

const message2 = 'Bad weather............. All departures Delayed ';

console.log(message2.repeat(2));

const planesInLines = function (n) {
  console.log(`There are ${n} planes in line ${'⌚'.repeat(n)}`);
};

planesInLines(5);
planesInLines(3);

*/

// Strings_methods_in_Practice
const getCode = str => str.slice(0, 3).toUpperCase();

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🎃' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(48); //Here simply 48 means it add space default to the start of the string
  console.log(output);
}
