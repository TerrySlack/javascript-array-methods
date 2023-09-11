const { reduce } = require("../section-1");

describe("section 1", () => {
  it("tests the type of a thrown error and the error message", () => {
    expect(() => {
      reduce((a, v) => a + v)([]);
    }).toThrow(TypeError);
    expect(() => {
      reduce((a, v) => a + v)([]);
    }).toThrow("Your array is empty and you did not provide an initial value.");
  });

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
});
