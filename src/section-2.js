/*
    Create a filter function that usese function currying
*/

//callBack.call(null, arrElement, i, arrCopy);

//Create a filter function that uses function currying

exports.filter = (callBack, thisArg) => {
  //Let's ensure that the callBack is a function
  if (!(callBack instanceof Function)) {
    throw new TypeError(
      "This function requires a callBack as the first parameter."
    );
  }

  //Let's ensure that if an initial value is passed, that it's not a function
  if (thisArg instanceof Function) {
    throw new TypeError(
      "The second parameter cannot be a function.  It is used as context and should be an object."
    );
  }

  //Return the function to be invoked (Currying)
  return (arr) => {
    //Let's ensure an array was passed
    if (!Array.isArray(arr)) {
      throw new TypeError(
        "An array needs to be passed into the curried function, returned from filter."
      );
    }

    const arrLength = arr.length;

    //Early return checks

    //Check if the array is empty and an initial value is not provided.  Throw a type error
    if (arrLength === 0) {
      throw new TypeError(
        "An empty array was passed into the curried function, returned from filter."
      );
    }

    //Create a cloned copy, in case the callback operates on the array.  We want to ensure the original array is not mutated.
    //Note:  Specs for filter, state the callBack can mutate the calling array.  However specs for this assignment ask that it not be mutated.  So I'll create a copy
    //and use that going forward.
    const arrCopy = [...arr];

    //If an initial value is  passed and the array is not empty, start on the first [0] element
    let i = 0;
    const length = arrLength - 1;
    const accumulator = [];

    while (i <= length) {
      const arrElement = arr[i];

      //Ensure that all parameters expected are passed to the callback
      //Note:  thisArg, is an optional parameter.  It will not work on arrow functions.  I'm adding it to ensure that if a non arrow function is passed it, that the
      //callBack parameter will be able to use it.
      const status = callBack.call(thisArg, arrElement, i, arrCopy);

      //If status is true, add it to the accumulator
      if (status) accumulator.push(arrElement);
      i++;
    }

    //return the final computed value.
    return accumulator;
  };
};
