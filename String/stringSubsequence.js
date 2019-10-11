/*
By removing some number of characters of any string, we can form a subsequence of that string (possibly no deletions).
Now you have two strings source and target, please return the minimum number of subsequences of source such that their concatenation equals target. If the task is impossible, return -1.

Example 1:


Input: source = "abc", target = "abcbc"
Output: 2
Explanation: The target "abcbc" can be formed by "abc" and "bc", which are subsequences of source "abc".

Example 2:
Input: source = "abc", target = "acdbc"
Output: -1
Explanation: The target string cannot be constructed from the subsequences of source string due to the character "d" in target string.

Example 3:
Input: source = "xyz", target = "xzyxz"
Output: 3
Explanation: The target string can be constructed as follows "xz" + "y" + "xz".



*/

/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */

function shortestWay(source, target) {
  //Put your code here.
  let myMap = new Map();
  for (let index = 0; index < source.length; index++) {
    if (myMap.get(source[index])) {
      const arr = myMap.get(source[index]);
      arr.push(index);
      myMap.set(source[index], arr);
    } else {
      myMap.set(source[index], [index]);
    }
  }
  let minSubs = 0;
  for (let i = 0; i < target.length; i++) {
    const indexes = myMap.get(target[i]);
    if (indexes === void 0) return -1;
    minSubs += 1;
    let highest = 0;
    indexes.forEach(index => {
      let j = 0;
      let skip = 0;
      while (source[index + j + skip] !== void 0) {
        if (target[i + j] !== source[index + j + skip]) {
          skip++;
        } else {
          highest = Math.max(highest, j++);
        }
      }
    });
    i += highest;
  }
  return minSubs;

  //return 0;
}

var source = readline();
var target = readline();
print(shortestWay(source, target));
