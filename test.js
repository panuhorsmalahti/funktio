"use strict";

var funktio = require("./funktio.js");

/**
 * Assert function.
 * @param {boolean} Claim to assert. If false, message is thrown.
 * @param {string} message to throw.
 */
var assert = function assert(claim, message) {
  if (!claim) {
    throw new Error("Test error: " + message);
  }
};

/**
 * funktio.updated unit tests.
 */
(function () {
  // Test that the updated object is a new object.
  (function () {
    var object = {};
    assert(object !== funktio.updated(object, "a", 1), "updated is a new object");
  })();

  // Test that the updated object contains the new property
  (function () {
    var object = { foo: 1 };
    var updated = funktio.updated(object, "bar", 2);
    assert(object.bar === undefined, "source object doesn't contain the added property");
    assert(updated.bar === 2, "updated contains the added property");
  })();

  // Test that input parameters are checked for updated
  (function () {
    var object = {};
    var thrown = false;
    try {
      funktio.updated();
    } catch (error) {
      thrown = true;
      assert(error.message === "Invalid parameters for updated().", "error message was expected");
    }
    assert(thrown, "input parameters were validated");
  })();
})();

/**
 * funktio.removed unit tests.
 */
(function () {
  // Test that the return value of removed is a new object.
  (function () {
    var object = { a: 1 };
    assert(object !== funktio.removed(object, "a"), "removed is a new object");
  })();

  // Test that the return value of removed doesn't contain the given property.
  (function () {
    var object = { a: 1 };
    var removed = funktio.removed(object, "a");
    assert(object.a === 1, "source contains the removed property");
    assert(removed.hasOwnProperty("a") === false, "return object doesn't contain the removed property");
  })();

  // Test that input parameters are checked for removed
  (function () {
    var object = {};
    var thrown = false;
    try {
      funktio.removed();
    } catch (error) {
      thrown = true;
      assert(error.message === "Invalid parameters for updated().", "error message was expected");
    }
    assert(thrown, "input parameters were validated");
  })();
})();
