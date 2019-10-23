'use strict';

function getYearOfBirth(age) {
    return 2019 - age;
}

function createGreeting(name, age) {
    const yob = 2019 - age;
    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yob}.`;
}

let greeting = createGreeting('Stephen', 33);

console.log(greeting);

