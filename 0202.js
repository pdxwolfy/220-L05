"use strict";

/* eslint no-console: "off" */

var total = 0;

function add(number) {
  total += number;
  console.log(total);
}

function subtract(number) {
  total -= number;
  console.log(total);
}

add(1);
add(42);
subtract(39);
add(6);
subtract(16);
add(-4);
subtract(-14);
subtract(4);
