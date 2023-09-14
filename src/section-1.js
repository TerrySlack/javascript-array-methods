//Create a reduce function that uses function currying

exports.reduce = (callBack, initialValue) => {
  //Let's ensure that the callBack is a function
  if (!(callBack instanceof Function)) {
    throw new TypeError(
      "This function requires a callBack as the first parameter."
    );
  }

  //Let's ensure that if an initial value is passed, that it's not a function
  if (initialValue instanceof Function) {
    throw new TypeError(
      "The second parameter cannot be a function.  It can be an initial value only used by the returned reduce method."
    );
  }

  //Return the function to be invoked (Currying)
  return (arr) => {
    //Let's ensure an array was passed
    if (!Array.isArray(arr)) {
      throw new TypeError(
        "An array needs to be passed into the curried function, returned from reduce."
      );
    }

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
    //Note:  Specs for reduce, state the callBack can mutate the calling array.  However specs for this assignment ask that it not be mutated.  So I'll create a copy
    //and use that going forward.
    const arrCopy = [...arr];

    //If the array only has one element (regardless of position) and no initialValue is provided
    if (arrLength === 1 && !initialValue) {
      //In order to ensure that we get the value in an array with 1 populated element, but an uknown index, let's use array.flat
      //For this exercise, we'll leave the depth option out, defaulting to 0 in the native method
      //Then take the first element, containing the populated element passed in the original array

      return arrCopy.flat()[0];
    }

    //Accumulator:  If the initial value is present, use it, otherwise, use the first element of the incoming array
    let accumulator = initialValue ? initialValue : arrCopy[0];

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
