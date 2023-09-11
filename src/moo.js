const { filter } = require("./section-2");

//NOTE:  REVIEW THE EDGE CASES AND WRITES TESTS FOR THEM AS WELL

//Test for no initial value
//console.log(reduce((a, v) => a + v)([1, 2, 3]));
//Expected output 6

//Test for initial value
//console.log(reduce((a, v) => a + v, 3)([1, 2, 3]));
//expected output 9

//Test with an array of objects
console.log(filter((x) => x !== "a")(["a", "b", "c", "d"]));
//expected output { num: 6 }

//Test with an array of objects with an initial value
// console.log(
//   reduce(
//     (a, v) => {
//       a.total += v.num;
//       return a;
//     },
//     { total: 5 }
//   )([{ num: 1 }, { num: 2 }, { num: 3 }])
// );
//expected output { total: 11 }

//Testing for an empty array, but an initial value is passed
//console.log(reduce((a, v) => a + v, 3)([]));
//expected output 3

//Testing for an empty array, an no initial value.  Should throw an exception
//console.log(reduce((a, v) => a + v)([]));
//expected output 3
