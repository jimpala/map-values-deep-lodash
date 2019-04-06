const mapValuesDeep = require("../src");

describe("mapValuesDeepLodash", () => {
  it("maps deep values with a plain JS object", () => {
    const testObj = {
      a: 1,
      b: 2,
      c: {
        d: 3,
        e: 4
      },
      f: {}
    };

    const expectedOutput = {
      a: 2,
      b: 4,
      c: {
        d: 6,
        e: 8
      },
      f: {}
    };

    const output = mapValuesDeep(testObj, x => x * 2);

    expect(output).toEqual(expectedOutput);
  });
});
