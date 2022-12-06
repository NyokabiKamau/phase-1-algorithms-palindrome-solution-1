function reverseString(word) {
  return word.split("").reverse().join("")
}

function isPalindrome(word) {
  // Write your algorithm here
  return word === reverseString(word)
}

/* 
  Add your pseudocode here
  reverse a string 
  if it is a palindrome
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
  reverseString function spits a string into an array, reverses the array then joins it into a string
  isPalindrome function compared the original string with the reversed string and returns either true or false
  an if statement evaluates to a boolean value, which is true or false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
