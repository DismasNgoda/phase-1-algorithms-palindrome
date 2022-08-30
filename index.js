function isPalindrome(word) {
  // Write your algorithm here
  
  /*
  Avoid alphanumeric characters
  create different variables to hold the entries.
  input words or sentences to check eg racecar, RACE car, madam, nope, never odd or even, etc.
  check if the input is valid
  reverse the given input
  Compare the original entry with the reversed one
  return true if input is valid, that is, the original and reversed inputs match
  return false for invalid inputs
  */
  const input = word.toLowerCase();
  var reversedValue = input.split('').reverse().join(''); 
  return reversedValue === input;
}

/* 
  Add your pseudocode here
  function isPalindrome(){}
    entry.toLowerCase()
    input.split('')
    reversedValue.reverse() 
    reversedValue.join()
    return bolean value if input === reversedValue
*/

/*
  Add written explanation of your solution here
  initialize a function to check the entered string
  convert entry to lowercase
  store the input in a variable after invoking split method
  store reversed input in another variable
  store the final result in another variable joining the original and reversed item
  checks the match between the 2 given values and returns true or false
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
