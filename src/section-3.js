/*
    NOTE:  
        Need to re-use the custom filter and/or reduce.
        How can I use reduce if it's not left to right.


    use arr.revers() in my reduce.  This will let me re-use it.

    Use this example.  Let's me pass in all parameters for the cb, as well as reversing the array of functions
    https://stackoverflow.com/questions/49581657/reduceright-with-reduce

    NOTE:  DON'T USE REVERS IN THE CUSTOM REDUCE
    INSTEAD, REVERSE THE ...REST PARAMS ARRAY IN THE THIRD SECIONT AND PASS THAT TO REDUCE.

    HOW DO I RE-USE FILTER?
      PASS IN THE ARRAY AND RETRIEVE THE OBJECT BASED ON MY INPUT
         IE:  X.SOMEKEY === "SOME KEY"
         
*/


/*
  Rember to use arr.revers() to ensure that the functions are called right -> left
  As an edge case, consider filtering the params to ensure that only functions are called.
 */



const fn = (x, y) => {
  console.log(`
          fn  x: ${x} y: ${y}
          value :${x + y}
      `);
  return x + y;
};

const fn2 = (x, y) => {
  console.log(`
          fn2  x: ${x} y: ${y}
          value :${x + y}
      `);
  return x + y;
};

const fn3 = (x, y) => {
  console.log(`
          fn3  x: ${x} y: ${y}
          value :${x + y}
      `);
  return x + y;
};

/*
    I want each element pushed into the functions.

    This way I have each function grabbing the elements.  Same?
*/
const m1 = (...args) => {
  return (arr) => {
    return args.reduceRight((acc, fn) => {
      arr.forEach((element) => {
        acc = fn(acc, element);
      });
      return acc;
    }, 0);
  };
};

const m2 = (...args) => {
  return (arr) => {
    let value = 0;
    arr.forEach((element) => {
      value += args.reduceRight((acc, fn) => {
        acc = fn(acc, element);
        return acc;
      }, 0);
    });

    return value;
  };
};

//Test Array -> move this to where it's execukted
const testArray = [1];
const results1 = m1(fn, fn2, fn3)(testArray);
const results2 = m2(fn, fn2, fn3)(testArray);

//results1: ${JSON.stringify(results1)}
console.log(`
results1: ${JSON.stringify(results1)}
results2: ${JSON.stringify(results2)}
`);

// const m2 = (...args) => {
//   //const args = Array.from(rest);
//   console.log(`
//   args is array ${Array.isArray(args)}
//   args type ${typeof args}
//   args length ${args.length}
//   args is
//   ${JSON.stringify(args)}

//   args[4] is ${typeof args[4]}

//    args[4]()  ${args[4]()}
//   `);

//   args[4]();
// };

// m2("Hello", 1, 2, 3, () => {
//   return 1;
// });
