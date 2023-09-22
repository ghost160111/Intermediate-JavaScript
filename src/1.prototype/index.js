"use strict";

const person = new Object({
  name: "Jaloliddin",
  age: 25,
  greet: function() {
    console.log("Greet!");
  }
});

Object.prototype.sayHello = function() {
  console.log("Hello");
}

const lena = Object.create(person);

lena.name = "Elena";
lena.age = 25;

const str = new String("I am string");