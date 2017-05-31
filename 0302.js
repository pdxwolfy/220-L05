"use strict";

/* eslint no-console: "off" */

function makeList() {
  var items = [];

  return {
    add: function (newItem) {
      if (items.indexOf(newItem) === -1) {
        items.push(newItem);
        console.log(newItem + " added!");
      }
    },

    list: function () {
      if (items.length === 0) {
        console.log('There are no items in the list.');
      } else {
        items.forEach(function (item) {
          console.log(item);
        });
      }
    },

    remove: function (item) {
      var index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(item + " removed!");
      }
    },
  };
}

var list = makeList();
list.list();
list.add("peas");
list.list();
list.add("corn");
list.list();
list.remove("peas");
list.list();
list.remove("corn");
list.list();
list.add("xyz");
list.add("abc");
list.add("stu");
console.log(list.items);
