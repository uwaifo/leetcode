function removeElement(nums, value) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == value) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
  /*
  nums.forEach(element => {
    if (nums[element] == value) {
      nums.splice(element, 1);
      element--;
    }
  });
  return nums.length;
  */
}

let myArr = [0, 1, 2, 2, 3, 0, 4, 2];

console.log(removeElement(myArr, 2));
