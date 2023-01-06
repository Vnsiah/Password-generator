// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let characterSet = [];
let passwordLength = 0;

// Function to prompt user for password options
function getPasswordOptions() {
  
  // this needs to be between 8 and 128
  // check that the value that the user entered meets these criteria
  while(passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How long would you like your password to be?");
    if(passwordLength < 8 || passwordLength > 128) {
      alert("Password length must be between 8 and 128 characters");
    }
  }

  if(confirm("Would you like to use lowercase letters?")){
    characterSet = characterSet.concat(lowerCasedCharacters);
  }

  if(confirm("Would you like to use uppercase letters?")){
    characterSet = characterSet.concat(upperCasedCharacters);
  }

  // make sure the user has chosen at least one set of characters
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Function to generate password with user input
function generatePassword() {
  let password = "";
  // Get some input from the user about their desired password
  getPasswordOptions();
  // Then we need to create a random password based on that user input
  // using a for loop based on the desired password length, randomly choose that many characters
  // from the character set that was created  
  for(let i = 0; i < passwordLength; i++) {
    password += getRandom(characterSet);
  }
  // Then we need to return that password
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);