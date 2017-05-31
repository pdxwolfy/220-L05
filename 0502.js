"use strict";

/* eslint no-console: "off" */
/* eslint no-magic-numbers: "off" */

function partial(func, arg1) {
  return function(arg2) {
    func(arg1, arg2);
  };
}

function greet(greetingWord, name) {
  greetingWord = greetingWord.charAt().toUpperCase() + greetingWord.slice(1);
  console.log(greetingWord + ", " + name + "!");
}

var sayHello = partial(greet, "hello");
var sayHi = partial(greet, "hi");

sayHello("Brandon");
sayHi("Sarah");
