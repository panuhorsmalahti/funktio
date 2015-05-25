const funktio = require("./funktio.js");

/**
 * Assert function.
 * @param {boolean} Claim to assert. If false, message is thrown.
 * @param {string} message to throw.
 */
const assert = (claim, message) => !claim && throw new Error("Test error: " +
  message);

// Test that the updated object is a new object.
(() => {
  const object = {};
  assert(object !== funktio.updated(object), "updated is a new object");
})();

// Test that the updated object contains the new property
(() => {
  const object = { foo: 1 };
  const updated = funktio.updated(object, "bar", 2);
  assert(object.bar === undefined,
    "source object doesn't contain the added property");
  assert(updated.bar === 2, "updated contains the added property");
})();
