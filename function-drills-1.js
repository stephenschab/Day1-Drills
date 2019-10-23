'use strict';

//1
console.log('Hi, my name is Stephen and I\'m 33 years old');

//2
function createGreeting() {
    console.log('Hi, my name is Stephen and I\'m 33 years old');
}

createGreeting();

//3
function createGreeting() {
    return 'Hi, my name is Stephen and I\'m 33 years old';
}

let greeting = createGreeting();

console.log(greeting);