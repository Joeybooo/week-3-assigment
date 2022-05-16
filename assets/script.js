// arrays
var numeric = ["1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")"];
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// var declerations
var confirmPasswordLength = "";
var confirmNumeric;
var confirmSpecialCharacters;
var confirmLowerCaseLetters;
var confirmUpperCaseLetter;

// generate password function
function generatePassword() {
    var confirmPasswordLength = window.prompt("How long would you like your password to be? Must be a minimum of 8 characters or maximum of 128 characters");

    //Limit parameters to 8-128 character lenght
    while(confirmPasswordLength <= 7 || confirmPasswordLength >= 129) {
        alert("Password length must be between 8 and 128 characters. Please enter a valid responce");
        var confirmPasswordLength = window.prompt("How long would you like your password to be? Must be a minimum of 8 characters or maximum of 128 characters");
    }

    //allow user to see what they entered
    alert('Your password will have ' + confirmPasswordLength + " characters.")

    //parameters
    var confirmNumeric = confirm("Click OK to include NUMBERS in your password.");
    var confirmSpecialCharacters = confirm("Click OK to include SPECIALCHARACTERS in your password.");
    var confirmLowerCaseLetters = confirm("Click OK to include lowercase LETTERS in your password.");
    var confirmUpperCaseLetter = confirm("Click OK to include UPPERCASE LETTERS in your password.");

    //prevent false answers for all confirmations
    while(confirmLowerCaseLetters === false && confirmNumeric === false && confirmSpecialCharacters === false && confirmUpperCaseLetter === false) {
        alert("You must choose at least 1 character");
        var confirmNumeric = confirm("Click OK to include NUMBERS in your password.");
        var confirmSpecialCharacters = confirm("Click OK to include SPECIALCHARACTERS in your password.");
        var confirmLowerCaseLetters = confirm("Click OK to include lowercase LETTERS in your password.");
        var confirmUpperCaseLetter = confirm("Click OK to include UPPERCASE LETTERS in your password.");
    }
    var passwordCharaters = []

    if (confirmNumeric) {
        passwordCharaters = passwordCharaters.concat(numeric)
    }
    if (confirmSpecialCharacters) {
        passwordCharaters = passwordCharaters.concat(specialCharacters)
    }
    if (confirmLowerCaseLetters) {
        passwordCharaters = passwordCharaters.concat(lowerCaseLetters)
    }
    if (confirmUpperCaseLetter) {
        passwordCharaters = passwordCharaters.concat(upperCaseLetters)
    }

    console.log(passwordCharaters)

    var randomizePassword = ""

    for (var i = 0; i <confirmPasswordLength; i++) {
        randomizePassword = randomizePassword + passwordCharaters[Math.floor(Math.random() * passwordCharaters.length)];
        console.log(randomizePassword)
    }
    return randomizePassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);