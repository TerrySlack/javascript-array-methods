const { filter } = require("../section-2");

//Data - Put it in it's own file
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const obj = {
  data: [1, 2, 3, 4, 5],
  threshold: 3,
  isAboveThreshold(element) {
    return element > this.threshold;
  },
};

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

describe("section 2", () => {
  it("flter an array and remove the letter a", () => {
    expect(filter((x) => x !== "a")(["a", "b", "c", "d"])).toEqual([
      "b",
      "c",
      "d",
    ]);
  });

  it("IsPrime Test", () => {
    expect(filter(isPrime)(array)).toEqual([2, 3, 5, 7, 11, 13]);
  });

  it("use optional param thisArg", () => {
    //Note, the optional 2nd parameter for filter.  It uses the object at the top, so obj.isAboveThreshold, a non arrow function, can use this, which points at obj
    expect(filter(obj.isAboveThreshold, obj)(obj.data)).toEqual([4, 5]);
  });

  //Exceptions
  it("Exception: Not passing a callback to filter will throw an error", () => {
    expect(() => {
      filter()([]);
    }).toThrow(TypeError);

    expect(() => {
      filter()([]);
    }).toThrow("This function requires a callBack as the first parameter.");
  });

  it("Exception: Passing a callback to the curried function, returned from filter, will throw an error", () => {
    expect(() => {
      filter(
        (a, v) => a + v,
        (a, v) => a + v
      )([]);
    }).toThrow(TypeError);

    expect(() => {
      filter(
        (a, v) => a + v,
        (a, v) => a + v
      )([]);
    }).toThrow(
      "The second parameter cannot be a function.  It is used as context and should be an object."
    );
  });

  it("Exception: Not passing an array to the curried function, returned from filter, will throw an error", () => {
    expect(() => {
      filter((a, v) => a + v)(undefined);
    }).toThrow(TypeError);

    expect(() => {
      filter((a, v) => a + v)(() => {});
    }).toThrow(
      "An array needs to be passed into the curried function, returned from filter."
    );
  });

  it("Exception:  Passing an empty array, without an initial value will throw an error", () => {
    expect(() => {
      filter((a, v) => a + v)([]);
    }).toThrow(TypeError);

    expect(() => {
      filter((a, v) => a + v)([]);
    }).toThrow(
      "An empty array was passed into the curried function, returned from filter."
    );
  });
});
