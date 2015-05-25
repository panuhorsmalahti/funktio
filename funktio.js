// funktio.js, a tiny functional programming toolbox.

/**
 * Used to verify that a value is an object.
 * @param {object} object to check.
 * @returns {boolean} True if the input parameter is an object.
 */
"use strict";

var isObject = function isObject(object) {
  return object && typeof object === "object";
};

/**
 * Validates that the source object is an object and the property is a string.
 * @param {object} source
 * @param {string} property
 */
var validateObjectAndProperty = function validateObjectAndProperty(source, property) {
  if (!isObject(source) || !property) {
    throw new Error("Invalid parameters for updated().");
  }
};

/**
 * Return a new object by copying the existing own properties of source to the
 * output object and then setting a new property to the given value.
 * @param {object} source
 * @param {string} property to add.
 * @param {any} value to set to the given property.
 * @returns {any}
 */
var updated = function updated(source, property, value) {
  var out = {};

  validateObjectAndProperty(source, property);

  Object.keys(source).forEach(function (key) {
    out[key] = source[key];
  });

  out[property] = value;

  return out;
};

/**
 * Return a new object by copying the existing own properties of source to the
 * output object while removing the given property from the return object.
 * @param {object} source
 * @param {string} property to remove.
 */
var removed = function removed(source, property) {
  var out = {};

  validateObjectAndProperty(source, property);

  Object.keys(source).filter(function (key) {
    return key !== property;
  }).forEach(function (key) {
    out[key] = source[key];
  });

  return out;
};

exports.updated = updated;
exports.removed = removed;
