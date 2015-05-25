// funktio.js, a tiny functional programming toolbox.

/**
 * Used to verify that a value is an object.
 * @param {object} object to check.
 * @returns {boolean} True if the input parameter is an object.
 */
const isObject = object => object && typeof object === "object";

/**
 * Validates that the source object is an object and the property is a string.
 * @param {object} source
 * @param {string} property
 */
const validateObjectAndProperty = (source, property) => {
  if (!isObject(source) || !property) {
    throw new Error("Invalid parameters for updated()");
  }
}

/**
 * Return a new object by copying the existing own properties of source to the
 * output object and then setting a new property to the given value.
 * @param {object} source
 * @param {string} property optional property to add.
 * @param {any} value optional value to set to the given property.
 * @returns {any}
 */
const updated = (source, property, value) => {
  const out = {};

  validateObjectAndProperty(source, property);

  Object.keys(source).forEach(key => {
    out[key] = source[key];
  });

  if (property !== null && property !== undefined) {
    out[property] = value;
  }

  return out;
};

/**
 * Return a new object by copying the existing own properties of source to the
 * output object while removing the given property from the return object.
 * @param {object} source
 * @param {string} property to remove.
 */
const removed = (source, property) => {
  const out = {};

  validateObjectAndProperty(source, property);

  Object.keys(source).filter(key => key !== property).forEach(key => {
    out[key] = source[key];
  });

  return out;
};
