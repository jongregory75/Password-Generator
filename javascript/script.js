// Variable assignments
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var zeroNine = "0123456789";
var specials = "!@#$%^&*()";
var characterSet = "";
var passLength = "0";

function buildCharSet() {
  //clear characterSet and passLength for variable zeroing upon page reloads
  characterSet = "";
  passLength = "";

  //Prompt to enter requested password length
  passLength = prompt(
    "How many characters would you like your password to be?"
  );

  if (passLength >= 8 && passLength <= 128) {
    //Include upper case characters in password?
    var includeUpper = confirm("Include upper case characters?");

    //Include lower case characters in password?
    var includeLower = confirm("Include lower case characters?");

    //Include special characters in password?
    var includeSpecial = confirm(
      "Would you like to include special characters?  !@#$%^&*()"
    );
  } else {
    //If password is too short or too long, show alert box
    alert(
      "Password length must be greater than 8 characters and less than 128 characters in length."
    );
  }

  //If password should include Uppercase letters
  if (includeUpper) {
    characterSet = characterSet + upperCase;
  }

  //If password should include Lowercase letters
  if (includeLower) {
    characterSet = characterSet + lowerCase;
  }

  //If password should include numbers
  if (zeroNine) {
    characterSet = characterSet + zeroNine;
  }

  //If password should include special characters
  if (includeSpecial) {
    characterSet = characterSet + specials;
  }
}

function buildPass() {
  //set tempPass to empty
  var tempPass = "";

  //for loop to create and concat a temp password based on the given characterSet
  if (passLength >= 8 && passLength <= 128) {
    for (var i = 0; i < passLength; i++) {
      tempPass = tempPass.concat(
        characterSet.charAt(Math.random() * characterSet.length)
      );
    }
    //assign value of tempPass back into Global scope variable
    password = tempPass;
  }
}

//control function returns password for writePassword function
function generatePassword() {
  buildCharSet();
  buildPass();

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
