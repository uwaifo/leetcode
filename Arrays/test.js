function tester(arg) {
  let sum = arg.reduce((accu, next) => accu + next);
  return sum;
}

let smallTest = [1, 1, 4, 2, 1, 3];
let bigTest = [
  10,
  6,
  6,
  10,
  10,
  9,
  8,
  8,
  3,
  3,
  8,
  2,
  1,
  5,
  1,
  9,
  5,
  2,
  7,
  4,
  7,
  7
];
console.log(tester(smallTest));
