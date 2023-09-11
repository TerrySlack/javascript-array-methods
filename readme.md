# Technical Assignment (JS)

## Getting Started

1. Clone this repository `git clone https://github.com/cube-planning/technical-assignment-js.git`
2. `cd technical-assignment-js`
3. `npm install`

## Assignment

There are no constraints when implementing the solutions to the following sections, but please take a moment to read through each section carefully before you get started.

The submission will be evaluated by the following criteria:

- **Reliability** - The solution works as intended and is bug-free
- **Readability** - The code is easy to read and understand
- **Testability** - Unit tests are of high quality and cover all cases
- **Reusability** - The code is written in a modular and reusable way


Let us know if you have any questions!

**Sections**

- [Section 1](#section-1)
- [Section 2](#section-2)
- [Section 3](#section-3)

---

### Section 1:

Create a custom implementation of the [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) function.

So that the following expression:

```js
reduce((a, v) => a + v)([1, 2, 3]);
```

Produces the following output:

```js
6;
```

#### Requirements

- Should execute a reducer function for each element in an array
- Should return a single value
- Should accept all parameters defined in [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- Should work for an array of different data types
- Should not execute over an empty array
- Should not mutate the original array

### Section 2:

Create a custom implementation of the [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) function.

So that the following expression:

```js
filter((x) => x !== "a")(["a", "b", "c", "d"]);
```

Produces the following output:

```js
["b", "c", "d"];
```

#### Requirements

- Should create a new array with elements that pass a test provided by the function
- Should accept all parameters defined in [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- Should work for an array of different data types
- Should not execute over an empty array
- Should not mutate the original array

### Section 3:

Create a function that takes any number of functions and invokes them from right to left

```js
myFunc(func1, func2)(args);
```

Using this function, create another function that when given the following input:

```js
[
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
```

Produces the following output:

```js
{
  1: 45,
  2: 24
}
```

#### Requirements

- Should create a new array that consolidates the elements by object key
- Should add all unique array values for each object key
- Should not execute over an empty array
- Should not mutate the original array
- Use your custom implementations from the previous sections

## Submit Your Assignment

When you're done, push your code to a private GitHub repository under your username (e.g. github.com/your-username/technical-assignment-js). Please download it as a zip file and send it via email.
