function reverse(word) {
  const wordArray = word.split("")
  const reversedWordArray = wordArray.reverse()
  const reversedWord = reversedWordArray.join("")
  return reversedWord
}

function isPalindrome(word) {
  // reverse the input sting
  const reversedWord = reverse(word)
  // if the input is the same as the reversed input 
 return word === reversedWord
}

/* 
  write a function that will return true if a word is a palindrome and false if not. that means if the word is the same as it is backwords, return true. 
  otherwise flase if not a palindrome.

  reverse the sting 

  if the input is the same as the reversed input 
  return true
  else 
  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // expecting mom to === mom //true
  // expecting cat to === tac // false 
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
