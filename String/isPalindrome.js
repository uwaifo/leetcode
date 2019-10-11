function isPalindrome(word) {
  // Please write your code here.
  let strLen = word.length;
  word = word.toLocaleLowerCase();

  if (strLen === 0 || strLen === 1) {
    return true;
  }
  if (word[0] === word[strLen - 1]) {
    return isPalindrome(word.slice(1, strLen - 1));
  }
  return false;
}
var word = readline();
print(isPalindrome(word));
