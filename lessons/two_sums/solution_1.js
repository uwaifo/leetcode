/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*final solution*/

function twoSums(nums, target) {
  let hash = {};
  let i, j;
  for (i = 0; i < nums.length; i++) {
    j = target - nums[i];
    if (typeof hash[j] !== "undefined") {
      return [hash[j], i];
    }
    hash[nums[i]] = i;
  }
  return [];
}

//console.log(twoSums([2, 7, 11, 15], 9));

/* O(n2) Solution*/
var twoSum = function(nums, target) {
  let i, j;
  for (i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j].sort((a, b) => a - b);
      }
    }
  }
  return [];
};

console.log(twoSums([3, 5, -4, 8, 11, 1, -1, 6], 10));
//console.log(twoSum([2, 7, 11, 15], 9));

//twoSum([5, 8, 9, 43, 2, 4], 9);
/////////////////

/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].


*/
