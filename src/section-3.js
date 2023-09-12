const { filter } = require("./section-2");
const { reduce } = require("./section-1");

exports.reduceRight = (...args) => {
  /*
    Let's ensure that all arguements that are not functions are removed.
    Then reverse the intermediate array, in order to call the functions from right to left;

    This could have been done with the reduce function.
  */

  //Check if the args array is empty.  Throw a type error
  if (args.length === 0) {
    throw new TypeError("Parameters were not passed into reduceRight.");
  }

  const rtlFunctions = filter((arg) => arg instanceof Function)(args).reverse();

  //Check if the args array is empty.  Throw a type error
  if (rtlFunctions.length === 0) {
    throw new TypeError(
      "Although parameters were passed in, none of them were functions.  You need at least one function passed into reduceRight."
    );
  }

  return (arr) => {
    /*
      Need a store, in order to keep track of objects that have been processed, as well as totals, which is the expected return.
      Doing it this way, let's us iterate once through the array, without having to compare values against the array each time.

      NOTE:  In the readme.md, requirements for section-3 states:  "...Should create a new array that consolidates the elements by object key";
      However, where the expected output is written, it displays an object.  I went with the expected output and in the acc, below, totals represents the object returned.

      From the readme, above the requirements
        Produces the following output:

        ```js
              {
                1: 45,
                2: 24
              }
        ```
    */
    const acc = { store: {}, totals: {} };

    //Re-use the reduce function
    const { totals } = reduce((acc, element, i, arrCopy) => {
      //Iterate through the rtl functions over the element.
      rtlFunctions.forEach((fn) => {
        //Ensure that all parameters expected are passed to the callback, as at this point, it's uknown what the functions want for parameters

        //Use the returning acc for each function call.
        acc = fn.call(null, acc, element, i, arrCopy);
      });
      return acc;
    }, acc)(arr);

    //Return the totals property from the acc.  Could have also just returned acc.store, as acc is passed by reference.
    return totals;
  };
};
