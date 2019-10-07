/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let checker;
  let getIndices = [];
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    checker = nums[i];
    let new_nums = nums.filter(function(value) {
      return value !== checker;
    });
    //console.log(checker);
    //console.log(new_nums);

    for (let x = 0; x < new_nums.length; x++) {
      if (checker + new_nums[x] === target) {
        //console.log("true:", checker);
        getIndices.push(checker);
      }
    }
  }
  //console.log(getIndices);
  let output2 = getIndices.forEach(function(item, index, array) {
    //console.log(index);
    output.push(index);
  });
  console.log(output);

  //return getIndices;
};
twoSum([2, 7, 11, 15], 9);
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
