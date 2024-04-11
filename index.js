function isPalindrome(word) {
  // Write your algorithm here
  function isPalindrome(str) {
    // Convert the string to lowercase
    str = str.toLowerCase();

    // Initialize two pointers, one at the start and one at the end of the string
    let left = 0;
    let right = str.length - 1;

    // Loop through the string until the pointers meet
    while (left < right) {
        // If characters at the pointers don't match, return false
        if (str[left] !== str[right]) {
            return false;
        }

        // Move the pointers towards each other
        left++;
        right--;
    }

    // If the loop completes without returning false, the string is a palindrome
    return true;
}


}


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
function isPalindrome(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();

  // Initialize two pointers, one at the start and one at the end of the string
  let left = 0;
  let right = str.length - 1;

  // Loop through the string until the pointers meet
  while (left < right) {
      // If characters at the pointers don't match, return false
      if (str[left] !== str[right]) {
          return false;
      }

      // Move the pointers towards each other
      left++;
      right--;
  }

  // If the loop completes without returning false, the string is a palindrome
  return true;
}

// Test cases
console.log(isPalindrome('abba'));     // true
console.log(isPalindrome('racecar'));  // true
console.log(isPalindrome('a'));        // true
console.log(isPalindrome('robot'));    // false
console.log(isPalindrome('ab'));       // false

