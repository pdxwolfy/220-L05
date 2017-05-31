"use strict";

var ERROR = "ERROR ***************************************";

function assertEqual(actualValue, expectedValue) {
  function assertArrayEqual(actual, expected) {
    var index;

    if (actual.length !== expected.length) {
      return ERROR;
    }

    for (index = 0; index < actual.length; ++index) {
      if (assertEqual(actual[index], expected[index]) === ERROR) {
        return ERROR;
      }
    }

    return "ok";
  }

  function assertObjectEqual(actual, expected) {
    var actualKeys = Object.keys(actual).sort();
    var expectedKeys = Object.keys(expected).sort();
    var key;

    if (assertArrayEqual(actualKeys, expectedKeys) === ERROR) {
      return ERROR;
    }

    for (key in actual) {
      if (assertEqual(actual[key], expected[key]) === ERROR) {
        return ERROR;
      }
    }

    return "ok";
  }

  function assertNumberEqual(actual, expected) {
    var result;

    if (isNaN(actual)) {
      result = isNaN(expected);
    } else if (Number.isFinite(actual)) {
      result = Math.abs(actual - expected) < Number.EPSILON;
    } else {
      result = (actual === expected);
    }

    return result ? "ok" : ERROR;
  }

  function assertScalarEqual(actual, expected) {
    return (actual === expected) ? "ok" : ERROR;
  }

  if (typeof actualValue !== typeof expectedValue) {
    return ERROR;
  } else if (actualValue === null) {
    return expectedValue === null ? "ok" : ERROR;
  } else if (Array.isArray(actualValue)) {
    return assertArrayEqual(actualValue, expectedValue);
  } else if (typeof actualValue === "object") {
    return assertObjectEqual(actualValue, expectedValue);
  } else if (typeof actualValue === "number") {
    return assertNumberEqual(actualValue, expectedValue);
  } else {
    return assertScalarEqual(actualValue, expectedValue);
  }
}

function stringify(value) {
  var elements;

  if (Array.isArray(value)) {
    elements = value.map(stringify);
    return "[" + elements.join(", ") + "]";
  } else if (value instanceof Object) {
    return JSON.stringify(value);
  } else {
    return String(value);
  }
}

function show(value) {
  var out = document.getElementById("console");
  out.innerHTML += "<br>" + stringify(value);
}

function log(actual, expected) {
  var result = assertEqual(actual, expected);

  show("result = " + String(result));
  if (result !== "ok") {
    show("      value    = " + stringify(actual));
    show("      expected = " + stringify(expected) + "<br>");
  }
}

function theEnd() {
  show("********************** DONE ***********************");
}
