const { reduceRight } = require("../section-3");
const { reduce } = require("../section-1");

//sample array
const array = [
  {
    1: [1, 3, 5, 7, 9],
  },
  {
    1: [0, 2, 4, 6, 8],
  },
  {
    2: [5, 5, 9],
  },
  {
    2: [5, 4, 3, 2, 1],
  },
];

const dedupe = (acc, arrayElement) => {
  const [key, array] = Object.entries(arrayElement)[0]; //We want the returned arrays first element.  There's only 1 at this point
  //Check to see if we have encountered this key before
  const existingArray = acc.store[key];

  //Use set for deduping
  const debuped = existingArray
    ? [...new Set(existingArray.concat(array))]
    : [...new Set(array)];

  acc.store[key] = debuped;
  return acc;
};

const totalCalculation = (acc, element) => {
  //Check to see if we have encountered this key befo
  const [key] = Object.entries(element)[0]; //We want the returned arrays first element.  There's only 1 at this point

  //Get the existing array stored in the store
  const existingArray = acc.store[key];

  //Early return check
  if (!existingArray) return acc;

  //Calculate the total for each array, using our reduce function
  const result = reduce((acc, element) => {
    return (acc += element);
  })(existingArray);

  //Update the totals for each key in the totals object
  acc.totals[key] = result;
  return acc;
};

describe("section 3", () => {
  it("generate an object with totals", () => {
    /*
      The requirements state that reduceRight should accept "...any number of functions and invokes them from right to left"
      At first I created a solution to do everything within totalCalculation.  But I wanted to show that the right to left functionality works,
      so I split out dedupe and added it as a function.
    */
    //These will be called Right to left in reduceRight
    const results = reduceRight(totalCalculation, dedupe)(array);
    expect(results).toEqual({
      1: 45,
      2: 24,
    });
  });

  //Exceptions
  it("Exception: Not passing parameters to reduceRight will throw an error", () => {
    expect(() => {
      reduceRight()(array);
    }).toThrow(TypeError);

    expect(() => {
      reduceRight()(array);
    }).toThrow("Parameters were not passed into reduceRight.");
  });

  it("Exception: Not passing any function parameters to reduceRight will throw an error", () => {
    expect(() => {
      reduceRight("Hello", "World")(array);
    }).toThrow(TypeError);

    expect(() => {
      reduceRight("Hello", "World")(array);
    }).toThrow(
      "Although parameters were passed in, none of them were functions.  You need at least one function passed into reduceRight."
    );
  });

  it("Exception: Not passing an array to the curried function, returned by reduceRight will throw an error", () => {
    expect(() => {
      reduceRight(totalCalculation, dedupe)();
    }).toThrow(TypeError);

    expect(() => {
      reduceRight(totalCalculation, dedupe)();
    }).toThrow(
      "An array needs to be passed into the curried function, returned from reduce."
    );
  });
});
