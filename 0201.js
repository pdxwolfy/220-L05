"use strict";

/* eslint no-console: "off" */

function makeMultipleLister(number) {
  return function multiples() {
    for (var multiple = number; multiple < 100; multiple += number) {
      console.log(multiple);
    }
  };
}

makeMultipleLister(1)();
console.log('');

makeMultipleLister(7)();
console.log('');

makeMultipleLister(13)();
console.log('');

makeMultipleLister(49)();
console.log('');

makeMultipleLister(50)();
console.log('');

makeMultipleLister(51)();
console.log('');

makeMultipleLister(99)();
console.log('');

makeMultipleLister(100)();
console.log('');
