function addTo(passed) {
  function add(inner) {
    return inner + passed;
  }
  return add;
}

let add3 = addTo(3);
let add4 = addTo(4);

console.log(addTo(3));
console.dir(add3);

function timesBy(starter) {
  function times(inner) {
    return inner * starter;
  }
  return times;
}

const timesTen = timesBy(10);
const timesTwenty = timesBy(20);

console.log(timesTen(50));
console.log(timesTwenty(50));

function makeSomeoneAFriend(loner) {
  function getFriend(friend) {
    return loner + " and " + friend + " are now friends!";
  }
  return getFriend;
}

const makeRayAfriend = makeSomeoneAFriend("Ray");
const makeBillAFriend = makeSomeoneAFriend("Bill");

console.log(makeRayAfriend("Sarah"));
console.log(makeBillAFriend("Andrew"));

const sum = (a, b) => a + b;

function createLimitedFunc(func, maxCalls) {
  function limitedFunc(a, b) {
    return func(a, b);
  }
  return limitedFunc;
}
const add3TimesOnly = createLimitedFunc(sum, 3);

console.log(add3TimesOnly(10, 32));
console.log(add3TimesOnly(4, 20));
console.log(add3TimesOnly(50, 100));
console.log(add3TimesOnly(34, 17));

const sum2 = (a, b) => a + b;

function createLimitedFunc(func, maxCalls) {
  function limitedFunc(a, b) {
    if (--maxCalls >= 0) return func(a, b);
  }
  return limitedFunc;
}
const limitedAdd = createLimitedFunc(sum2, 3);

console.log(limitedAdd(10, 32));
console.log(limitedAdd(4, 20));
console.log(limitedAdd(50, 100));
console.log(limitedAdd(34, 17));

const counter = num => {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
};

function limitCounter(func, maxReps) {
  function limitedFunction(num) {
    if (--maxReps >= 0) {
      return func(num);
    }
  }
  return limitedFunction;
}

const limitedCount = limitCounter(counter, 3);

limitedCount(2);
limitedCount(2);
limitedCount(2);
limitedCount(2);
limitedCount(2);

function youSayGoodbye() {
  console.log("Good Bye!");
  function andIsayHello() {
    console.log("hello!");
  }
  return andIsayHello;
}

function stopWatch() {
  var startTime = Date.now();
  function getDelay() {
    var elapsedTime = Date.now() - startTime;
    console.log(elapsedTime);
  }
  return getDelay;
}

var timer = stopWatch();
// do something that takes some time
for (var i = 0; i < 100000; i++) {
  var foo = Math.random() * 10000;
}

// invoke the returned function
timer();

function shout(string) {
  console.log(string);
}

function only(anyFunction, num) {
  function innerFunction(str) {
    if (--num >= 0) {
      return anyFunction(str);
    } else {
      console.log("no");
    }
  }
  return innerFunction;
}

let x = only(shout, 3);

x();
x();
x();
x();
x();

function sayHi() {
  console.log("hi");
}

function once(func) {
  let count = 0;
  function innerFunction() {
    if (count < 1) {
      count++;
      return func();
    } else {
      console.log("no");
    }
  }
  return innerFunction;
}

let sayHiOnce = once(sayHi);
sayHiOnce();
sayHiOnce();
sayHiOnce();
sayHiOnce();
sayHiOnce();

function createMultiplier(mult) {
  function multiplyNum(num) {
    return num * mult;
  }
  return multiplyNum;
}

const multiplyBy5 = createMultiplier(5);
const result = multiplyBy5(9);

console.log(multiplyBy5(10));
