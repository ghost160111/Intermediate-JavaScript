/**
 * Написать свою функцию bind
 * Пример работы:
 * 
 * function logPerson() {
 *   console.log(`Person: ${this.name},${this.age}, ${this.job}`);
 * }
 * 
 * const person1 = {name: "Михаил", age: 22, job: "Frontend"};
 * const person2 = {name: "Елена", age: 19, job: "SMM"};
 * 
 * bind(person1, logPerson);
 * bind(person2, logPerson);
 */

function bind(context, fn) {
  return function(...args) {
    fn.apply(context, ...args);
  }
}

function logPerson(...args) {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`, `${args}`);
}

const person1 = {name: "Михаил", age: 22, job: "Frontend"};
const person2 = {name: "Елена", age: 19, job: "SMM"};

bind(person1, logPerson)(); // Person: Михаил, 22, Frontend
bind(person2, logPerson)(); // Person: Елена, 19, SMM

/**
 * Final Result:
 * Example of Callback class with 3 methods: bind, apply, and call
 */

class Callback {
  static bind(context, fn) {
    return function(...args) {
      fn.apply(context, ...args);
    }
  }

  static apply(context, fn) {
    return function(...args) {
      fn.apply(context, ...args);
    }();
  }

  static call(context, fn) {
    return function(argArray = []) {
      fn.apply(context, ...argArray);
    }();
  }
}

Callback.bind(person1, logPerson)();
Callback.apply(person1, logPerson);
Callback.call(person1, logPerson);

export default Callback;