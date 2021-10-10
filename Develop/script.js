var generateBtn = document.querySelector("#generate");



// create array 
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var character = ["~","!","@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

// empty aaray 
var allPossible = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//character length prompt
function generatePassword () {
  // Asks for user input
 var characterLength= prompt("How many characters would you like your password? Choose between 8 and 128");
  // First if statement for user validation 


  if (characterLength=== "") {
      alert("This needs a value");

  } else if (characterLength < 8 || characterLength > 128) {
      // Validates user input
      // Start user input prompts

    alert("You must choose between 8 and 128");
  

    } else {
      // Continues once user input is validated
      uppercaseConfirm = confirm("Do you want your password to contain Uppercase letters?");
      lowercaseConfirm = confirm("Do you want your password to contain lowercase letters?");
      numberConfirm = confirm("Do you want your password to contain numbers?");
      characterConfirm = confirm("Do you want your password to contain special characters?");

  }  if (!uppercase && !lowercase && !number && !character) {
    choices= alert ("You must choose a criteria");
  
  
  }if (uppercase) {
    allPossible = allPossible.concat(uppercase)};
    
  if (lowercase) {
      allPossible = allPossible.concat(lowercase)};
        
  if (number) {
    allPossible = allPossible.concat(number)};
    
  if (character) {
      allPossible = allPossible.concat(character)}; 
      
      console.log(allPossible)
  

var password = [];


// join all array elements into a single one, and then split in order to get an array of characters 
for (var i=0; i < characterLength; i++) {
  var tempRandom = Math.floor(Math.random()* allPossible.length);
  password.push(allPossible[tempRandom]);
console.log (tempRandom)
}
return password.join("")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 