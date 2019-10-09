//import { stringify } from 'querystring';

let genArray = function(params) {
  let myArray = [];
  for (let index = 1; index <= params; index++) {
    myArray.push(index);
  }
  return myArray;
};

var fizzBuzz = function(arg) {
  let fizzledArray = genArray(arg);
  let newArg = [];

  for (let i = 0; i < fizzledArray.length; i++) {
    if (fizzledArray[i] % 5 === 0 && fizzledArray[i] % 3 === 0) {
      newArg.push('FizzBuzz');
    } else if (fizzledArray[i] % 5 === 0) {
      newArg.push('Buzz');
    } else if (fizzledArray[i] % 3 === 0) {
      newArg.push('Fizz');
    } else {
      newArg.push(`${fizzledArray[i]}`);
    }
  }
  return newArg;
};

console.log(fizzBuzz(15));

//console.log(genArray(30));
