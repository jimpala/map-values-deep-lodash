const { mapValues, isObject } = require("lodash");

const mapValuesDeep = (obj, iteree) => (
  isObject(obj)
    ? mapValues(obj, v => mapValuesDeep(v, iteree))
    : iteree(obj)
);

module.exports = mapValuesDeep;