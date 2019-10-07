/*
Given a sorted array and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.
You may assume no duplicates in the array.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsertNovice = function(nums, target) {
  let found = false;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === target) {
      return index;
    } else if (nums[index] > target && nums[index - 1] < target) {
      found = true;
      return index;
    }
  }
};

function searchInsert(nums, target) {
  //get index position of target
  let index = nums.indexOf(target);
  //if target is not in nums expect a -1
  //if target is greater than -1 return it the target index position .
  //But why ? Becaus it may be grteater and yet not in nums
  if (index > -1) return index;

  //if first element in nums is greater than target return 0. But why ?
  if (nums[0] > target) return 0;
  //if the last element in nums lesss than target , then return the length of nums array
  if (nums[nums.length - 1] < target) return nums.length;
  //loop through nums array
  for (let i = 0; i < nums.length; i++) {
    //if iteration value of nums is less than target and the next iteration value of nums array is greater than target
    if (nums[i] < target && nums[i + 1] > target) {
      //return next iteration
      return i + 1;
    }
  }
}

input = [1, 3, 5, 6];

console.log(searchInsert(input, 5));
