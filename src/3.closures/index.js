"use strict";

// function createCalcFunction(n) {
//   return function() {
//     console.log(1000 * n)
//   }
// }

// const calc = createCalcFunction(42);
// calc();


// function createIncrementor(n) {
//   return function(num) {
//     return n + num;
//   }
// }

// const addOne = createIncrementor(1);
// const addTen = createIncrementor(41);

// console.log(addOne(10)); // 11
// console.log(addTen(10)); // 51


function urlGenerator(domain) {
  return function(url) {
    return `https://${url}.${domain}`;
  }
}

const comURL = urlGenerator("com");
const ruURL = urlGenerator("ru");

console.log(comURL("google"));
console.log(ruURL("yandex"));
console.log(ruURL("vkontakte"));