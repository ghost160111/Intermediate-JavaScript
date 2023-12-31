"use strict";

function hello() {
  console.log("Hello", this);
}

const person = {
  name: "Jaloliddin",
  age: 20,
  sayHello: hello,
  sayHelloWindow: hello.bind(document),
  logInfo: function(job, phone) {
    console.group(`${this.name} info:`);
    console.log("Name is " + this.name);
    console.log("Age is ", this.age);
    console.log("Job is", job);
    console.log("Phone is ", phone);
    console.groupEnd();
  }
};

const lena = {
  name: "Elena",
  age: 23
}

// bind
//const fnLenaInfoLog = person.logInfo.bind(lena);
//fnLenaInfoLog("Frontend Developer", "+998935650018");

// call
// person.logInfo.call(lena, "Frontend Developer", "+998935650018");

// apply
// person.logInfo.apply(lena, ["Frontend Developer", "+998935650018"]);

// ================

const array = [1,2,3,4,5];

function multBy(arr, n) {
  return arr.map(function(i) {
    return i * n;
  });
}

Array.prototype.multBy = function(n) {
  return this.map(function(i) {
    return i * n;
  })
}

console.log(array.multBy(2));
