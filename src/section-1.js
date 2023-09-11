/*
    Create a reduce function that uses function currying
    

reduce((a, v) => a + v)([1, 2, 3]);


Produces the following output:
6;

*/

/*
    Edge Cases
    const getMax = (a, b) => Math.max(a, b);

    // callback is invoked for each element in the array starting at index 0
    [1, 100].reduce(getMax, 50); // 100
    [50].reduce(getMax, 10); // 50

    // callback is invoked once for element at index 1
    [1, 100].reduce(getMax); // 100

    // callback is not invoked
    [50].reduce(getMax); // 50
    [].reduce(getMax, 1); // 1

    [].reduce(getMax); // TypeError
*/

exports.reduce = (callBack, initialValue) => {
  //Return the function to be invoked (Currying)
  return (arr) => {
    //Edge cases as defined in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#edge_cases

    const arrLength = arr.length;

    //Early return checks

    //Check if the array is empty and an initial value is not provided.  Throw a type error
    if (arrLength === 0 && !initialValue) {
      throw new TypeError(
        "Your array is empty and you did not provide an initial value."
      );
    }

    //if initialValue is provided but the array is empty, the solo value will be returned without calling callbackFn.
    if (arrLength === 0 && initialValue) return initialValue;

    //Create a cloned copy, in case the callback operates on the array.  We want to ensure the original array is not mutated.
    const arrCopy = [...arr];

    //If the array only has one element (regardless of position) and no initialValue is provided
    if (arrLength === 1 && !initialValue) {
      //In order to ensure that we get the value in an array with 1 populated element, but an uknown index, let's use array.flat
      //For this exercise, we'll leave the depth option out, defaulting to 0 in the native method
      //Then take the first element, containing the populated element passed in the original array

      return arrCopy.flat()[0];
    }

    //If arr is empty
    let accumulator = initialValue ? initialValue : arr[0];

    //If an initial value is  passed and the array is not empty, start on the first [0] element
    let i = initialValue ? 0 : 1;
    const length = arrLength - 1;

    while (i <= length) {
      const arrElement = arr[i];

      //Ensure that all parameters expected are passed to the callback
      accumulator = callBack.call(null, accumulator, arrElement, i, arrCopy);
      i++;
    }

    //return the final computed value.
    return accumulator;
  };
};
