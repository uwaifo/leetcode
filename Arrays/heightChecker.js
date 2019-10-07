/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  //variable to track outliers
  let wrongStanding = 0;

  //make a newcopy of the heights array .
  //Here I use es6 spread operator
  var newHeight = [...heights];

  //By default, the sort() function sorts values as strings.
  //So to sort numerically
  newHeight.sort((a, b) => a - b);

  //loop through heights array
  for (let index = 0; index < heights.length; index++) {
    //compare heights iteration value to that of sorted newHeights and
    //pre-increase wrongstanding . Why ?
    newHeight[index] !== heights[index] && ++wrongStanding;
    /*if (newHeight[index] !== heights[index]) {
              ++wrongStanding;
            }
            */
  }

  console.log(newHeight);

  return wrongStanding;
};

let input = [1, 1, 4, 2, 1, 3];
console.log(heightChecker(input));

/*
Students are asked to stand in non-decreasing order of heights for an annual photo.
Return the minimum number of students not standing in the right positions. 
 (This is the number of students that must move in order for all students to be standing in non-decreasing order of height.)
Example 1:

Input: [1,1,4,2,1,3]
Output: 3
Explanation:
Students with heights 4, 3 and the last 1 are not standing in the right positions.


RESOURCES
https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array
https://www.w3schools.com/js/js_array_sort.asp
https://stackoverflow.com/questions/3469885/somevariable-vs-somevariable-in-javascript
 */
