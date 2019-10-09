function euroTester(argArray) {
  let totalSum = argArray.reduce((acc, next, index, array) => {
    acc += next;
    if (index === array.length - 1) {
      //console.log(array[index]);
      return acc / array.length;
    } else {
      return acc;
    }
  });

  return totalSum;
}

const euros = [29.76, 41.85, 46.5];
let smallArray = [4, 4, 4, 4];
console.log(euroTester(smallArray));
