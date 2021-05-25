const { mapValues, isPlainObject } = require("lodash");

const mapValuesDeep = (obj, iteree) =>
  isPlainObject(obj) ? mapValues(obj, v => mapValuesDeep(v, iteree)) : iteree(obj);

module.exports = mapValuesDeep;
