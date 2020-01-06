let num = 10;

const func = function() {
  let num = 3;
  const printNum = function() {
    console.log(num);
  };
  printNum();
};

func();

let num = 10;

const printNum = function() {
  console.log(num);
};

const func = function() {
  let num = 3;
  printNum();
};

func();
