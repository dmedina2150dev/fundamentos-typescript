"use strict";
// REFACTORIZACION
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Dajan", new Date());
