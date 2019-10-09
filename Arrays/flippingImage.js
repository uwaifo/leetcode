/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  outerMost = [];

  for (let i = 0; i < A.length; i++) {
    let outer = [];
    let inner = A[i];

    for (let j = A[i].length - 1; j >= 0; j--) {
      outer.push(inner[j]);
      if (outer.length === A[i].length) {
        outerMost.push(outer);
      }
    }
  }

  let result = [];
  outerMost.forEach(element => {
    result.push(flipper(element));
  });

  //return outerMost;
  return result;
};

let flipper = function(argArray) {
  let output = [];
  for (let index = 0; index < argArray.length; index++) {
    if (argArray[index] === 1) {
      output.push(0);
    } else {
      output.push(1);
    }
  }
  return output;
};
let arrInput = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];
var fruits = ['Banana', 'Apple', 'Mango'];

//console.log(fruits.reverse());
console.log(flipAndInvertImage(arrInput));

/*

Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

Example 1:

Input: [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

Example 2:

Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

Notes:

    1 <= A.length = A[0].length <= 20
    0 <= A[i][j] <= 1

Accepted
127,190
Submissions
172,885
Seen this question in a real interview before?
Contributor
awice

*/
