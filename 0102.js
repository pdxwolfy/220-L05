"use strict";

/* eslint no-console: "off" */

function makeList() {
  var theList = [];

  return function (item) {
    var index;

    if (typeof item === "undefined") {
      if (theList.length === 0) {
        console.log("There are no items in the list.");
      } else {
        theList.forEach(function logTodo(todo) {
          console.log(todo);
        });
      }
    } else {
      index = theList.indexOf(item);
      if (index === -1) {
        theList.push(item);
        console.log(item + " added!");
      } else {
        theList.splice(index, 1);
        console.log(item + " removed!");
      }
    }
  };
}

var list = makeList();
list();
console.log("");
list("make breakfast");
console.log("");
list("read book");
console.log("");
list();
console.log("");
list("make breakfast");
console.log("");
list();
console.log("");
list("read book");
console.log("");
list();
