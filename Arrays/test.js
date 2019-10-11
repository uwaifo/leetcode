function isPalindrome(word) {
  let strLen = Math.floor(word.length / 2);
  word = word.toLocaleLowerCase();

  for (let i = 0; i < strLen; i++) {
    if (word[i] !== word[strLen - i - 1]) {
      return false;
    }
  }
  return true;
}
var word = 'Deleveled';
var word2 = 'adam';
console.log(isPalindrome(word));
console.log(isPalindrome(word2));
