"use strict";

/* eslint no-console: "off" */

function later(callback, argument) {
  return function () {
    callback(argument);
  };
}

var logWarning = later(console.log, "The system is shutting down!");
logWarning();
