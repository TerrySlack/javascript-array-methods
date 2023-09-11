const { reduce } = require("../section-1");

describe("section 1", () => {
  it("Test for a populated array, but no initial value", () => {
    expect(reduce((a, v) => a + v)([1, 2, 3])).toBe(6);
  });

  it("Test for a populated array, with initial value", () => {
    expect(reduce((a, v) => a + v, 3)([1, 2, 3])).toBe(9);
  });

  it("Test for an array of objects, with no initial value", () => {
    expect(
      reduce((a, v) => {
        a.num += v.num;
        return a;
      })([{ num: 1 }, { num: 2 }, { num: 3 }])
    ).toEqual({ num: 6 });
  });

  it("Test for an array of objects, with an initial value", () => {
    expect(
      reduce(
        (a, v) => {
          a.total += v.num;
          return a;
        },
        { total: 5 }
      )([{ num: 1 }, { num: 2 }, { num: 3 }])
    ).toEqual({ total: 11 });
  });

  it("Test for an array of objects, with an initial numeric value", () => {
    expect(
      reduce((a, v) => {
        a += v.num;
        return a;
      }, 5)([{ num: 1 }, { num: 2 }, { num: 3 }])
    ).toBe(11);
  });

  //Exceptions

  it("Exception: Not passing a callback to reduce will throw an error", () => {
    expect(() => {
      reduce()([]);
    }).toThrow(TypeError);

    expect(() => {
      reduce()([]);
    }).toThrow("This function requires a callBack as the first parameter.");
  });

  it("Exception: Passing a callback to the curried function, returned from reduce, will throw an error", () => {
    expect(() => {
      reduce(
        (a, v) => a + v,
        (a, v) => a + v
      )([]);
    }).toThrow(TypeError);

    expect(() => {
      reduce(
        (a, v) => a + v,
        (a, v) => a + v
      )([]);
    }).toThrow(
      "The second parameter cannot be a function.  It can be an initial value only used by the returned reduce method."
    );
  });

  it("Exception: Not passing an array to the curried function, returned from reduce, will throw an error", () => {
    expect(() => {
      reduce((a, v) => a + v)(undefined);
    }).toThrow(TypeError);

    expect(() => {
      reduce((a, v) => a + v)(() => {});
    }).toThrow(
      "An array needs to be passed into the curried function, returned from reduce."
    );
  });

  it("Exception:  Passing an empty array, without an initial value will throw an error", () => {
    expect(() => {
      reduce((a, v) => a + v)([]);
    }).toThrow(TypeError);

    expect(() => {
      reduce((a, v) => a + v)([]);
    }).toThrow("Your array is empty and you did not provide an initial value.");
  });
});
