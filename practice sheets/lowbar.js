const _ = {};

_.Once = func => {
  let counter = 0;
  function innerFunction() {
    if (counter < 1) {
      counter++;
      return func();
    }
  }
  return innerFunction;
};

function shout() {
  console.log("YEEEAHHAHAH");
}

_.Before = (n, func) => {
  function innerFunction() {
    if (--n >= 0) {
      return func();
    } else {
      console.log("no");
    }
  }
  return innerFunction;
};

const { expect } = require("chai");

const _ = require("../finishedCodeForTesting");

describe("#Once", () => {
  it("Creates a function that is restricted to invoking func once. Repeat calls to the function return the value of the first invocation. The func is invoked with the this binding and arguments of the created function. an empty array", () => {
    function testFunc() {
      return "Function Has Worked";
    }
    let initialise = _.Once(testFunc);
    expect(initialise()).to.eql("Function Has Worked");
    expect(initialise()).to.eql(undefined);
  });
});

describe("#Before", () => {
  it("Creates a function that invokes func, with the this binding and arguments of the created function, while it's called less than n times. Subsequent calls to the created function return the result of the last func invocation.", () => {
    function testFunc() {
      return "Function Has Worked";
    }
    let initialise = _.Once(testFunc);
    expect(initialise()).to.eql("Function Has Worked");
    expect(initialise()).to.eql(undefined);
  });
});
