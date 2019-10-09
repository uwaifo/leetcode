/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  let sum = A.reduce((acc, current) => acc + current, 0) / 3;
  let count = 0;
  A.reduce((acc, current) => {
    acc -= current;
    if (acc === 0) {
      count++;
      acc = sum;
    }
    return acc;
  }, sum);
  return count === 3;
};

let input1 = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1];
let input2 = [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1];
let input3 = [3, 3, 6, 5, -2, 2, 5, 1, -9, 4];

console.log(canThreePartsEqualSum(input1));

/*
Given an array A of integers, return true if and only if we can partition the array into three non-empty parts with equal sums.

Formally, we can partition the array if we can find indexes i+1 < j with (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1])

*/

/*
SOULTION
The reduce method cycles through each number in the array much like it would in a for-loop.
https://www.freecodecamp.org/news/reduce-f47a7da511a9/
*/
