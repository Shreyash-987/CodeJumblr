const alphaChange = new Object(); // Functionally works as a dictionary

for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i); // 65 is the ASCII code for 'A', so everything forwards up until 65 + 26 will be the letters of the alphabet
    alphaChange[letter] = letter; // Assigning the letter to itself
}


/* Checking if the input string only contains alphabetical characters */
function validateAlphabetical(inputString) {
    inputString.value = inputString.value.toUpperCase();
    const errorMessage = inputChar.nextElementSibling;
    const verifyExpression = /^[A-Z]*$/; // Literally goes through every single uppercase letter lol

  // Check if the input is a single uppercase letter
    if (!regex.test(inputString.value)) {
        input.value = input.value.replace(/[^A-Z]/g, "")
        errorMessage.style.display = "inline"; // Show error message since input is invalid
    } else {
        errorMessage.style.display = "none"; // Hide error message since input is valid
    }
}

/* Checking if the value input for the cipher is only one character in length */
function isSingleCharacter(inputChar) {
    const errorMessage = inputChar.nextElementSibling; // Get the error message element
    const label = inputChar.previousElementSibling; // Get the label element
    
    if (inputChar.length != 1) {
        errorMessage.style.display = "inline"; // Display error message since the input was invalid
    } else {
        errorMessage.style.display = "none"; // No error message
        alphaChange[label.textContent] = inputChar; // Changes value for the key with the same name in alphaChange
    }
}

