const seq = ["2a", "123a", "1c2", "31a24b"];
const arr = [];
const arr2 = [];

const newArr = seq.reduce((res, element) => {
  if (element.match(/^[^c-z]*$/)) {
    res.push(element);
  }
  return res;
}, []);

console.log(newArr);
//|| element.match(/\d$/));
//console.log(arr2);

// (element.match(/\d+/) && element.match(/\d+[^c]/))
//) {
// In this problem, you need to collect all the strings
// of the form "<number>a<number>b"
// e.g. "23a56b"
// you could also have "13a"
// or you could have "56b"
// or even just "100"
// however, any other letters/characters in the string won't be permitted
// '100c' , '100a2c'

/*
 it("can get strings consisting of numbers, letter a or number followed by a and letter b and string of mixes of a and b", () => {
      let inputSequence = ["25", "13a", "b", "c", "13x", "a", "100b", "ab"];
      let actual = collectABs(inputSequence);
      let desiredOutcome = ["25", "13a", "b", "a", "100b", "ab"];
      expect(actual).to.eql(desiredOutcome);
      inputSequence = ["2a", "123a", "1", "b", "25c", "35b", "31a24b"];
      actual = collectABs(inputSequence);
      desiredOutcome = ["2a", "123a", "1", "b", "35b", "31a24b"];
      expect(actual).to.eql(desiredOutcome);
      */
