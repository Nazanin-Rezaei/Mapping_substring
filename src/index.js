// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.

// // const newNumber = numbers.map(function (x) {
// //   return x * 2;
// // });

// // console.log(newNumber);

// var numbers = [3, 56, 2, 48, 5];
// //Filter - Create a new array by keeping the items that return true.

// // const newNumber = numbers.filter(function (x) {
// //   return x < 10;
// // });

// // console.log(newNumber);

// var numbers = [3, 56, 2, 48, 5];
// //Reduce - Accumulate a value by doing something to each item in an array.

// // var newNumber = numbers.reduce(function (accumulator, currentNumber) {
// //   return accumulator + currentNumber;
// // });

// // console.log(newNumber);

// var numbers = [3, 56, 2, 48, 5];
// // //Find - find the first item that matches from an array.

// // const newNumber = numbers.find(function (num) {
// //   return num > 10;
// // });

// // console.log(newNumber);

// // var numbers = [3, 56, 2, 48, 5];
// // //FindIndex - find the index of the first item that matches.

// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// });

// console.log(newNumber);

import emojipedia from "./emojipedia";

const newEmoji = emojipedia.map(function (emojiItem) {
  return emojiItem.meaning.substring(0, 100);
});

console.log(newEmoji);
