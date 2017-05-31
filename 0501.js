"use strict";

/* eslint no-console: "off" */
/* eslint no-magic-numbers: "off" */

function greet(greetingWord, name) {
  greetingWord = greetingWord.charAt().toUpperCase() + greetingWord.slice(1);
  console.log(greetingWord + ", " + name + "!");
}

greet("howdy", "Joe");
greet("good morning", "Sue");
