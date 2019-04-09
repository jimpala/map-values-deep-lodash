# map-keys-deep-lodash
[![Build Status](https://travis-ci.com/jpyne17/map-values-deep-lodash.svg?branch=master)](https://travis-ci.com/jpyne17/map-values-deep-lodash)
> Map JS object values recursively.


## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i map-values-deep-lodash --save
```

## Usage

```js
const mapValuesDeep = require("map-values-deep-lodash");

mapValuesDeep({a: 1, b: 2, c: {d: 3, e: 4}}, value => (2 * value));
// -> {a: 2, b: 4, c: {d: 6, e: 8}}
```

## Dependencies

* [lodash](https://github.com/lodash/lodash): The only external dependency. [more](https://github.com/lodash/lodash)


## Author

+ [github/jpyne17](https://github.com/jpyne17)

## License

Released under the MIT license.

