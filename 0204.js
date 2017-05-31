"use strict";

/* eslint no-console: "off" */

function startup() {
  var status = 'ready';
  return function() {
    console.log('The system is ready.');
  }
}

var ready = startup();
var systemStatus = // ?
