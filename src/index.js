const contents = new Set();

contents.add("Урок 1. Что такое prototype.");
contents.add("Урок 2. Что такое контекст this. Как работает call, bind, apply.");
contents.add("Урок 3. Что такое замыкания. Как они работают.");
contents.add("Урок 4. Асинхронность. Что такое Event Loop. JS setTimeout 0");
contents.add("Урок 5. Promise, что это и как работает.");
contents.add("Урок 6. Объекты с Object.create(). Что такое getters, setters");
contents.add("Урок 7. Все о классах ES6.");
contents.add("Урок 8. Как работает async, await. Работа с сервером с fetch.");
contents.add("Урок 9. Proxy. Объекты, функции и классы.");
contents.add("Урок 10. Proxy часть 2");
contents.add("Урок 11. Генераторы. Symbol iterator, for of");
contents.add("Урок 12. Методы массивов. (forEach, map, filter, reduce, find, findIndex).");
contents.add("Урок 13. Все о Map, Set, WeakMap, WeakSet с примерами.");
contents.add("Урок 14. Запросы на сервер. Fetch, XMLHttpRequest (XHR), Ajax.");
contents.add("Урок 15. Все о spread и rest.");
contents.add("Урок 16. Все о деструктуризации.");
contents.add("Урок 17. Все о localStorage.");

for (const topic of contents) {
  console.log(topic);
}