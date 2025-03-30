function encrypt() {
    // Get the shift value from the input and parse it as an integer.
    let keyInput = document.getElementById("cipher-key").value;
    let shift = parseInt(keyInput);
    
    // Only allows numbers.
    if (isNaN(shift)) {
      alert("Please enter a valid number for the cipher key.");
      return;
    }
    
    // Prevent negative shift values
    if (shift < 0) {
      alert("Please enter a non-negative shift value.");
      return;
    }
    
    // Get the decoded text from the textarea.
    let decodedText = document.getElementById("decoded-text").value;
    let codedMessage = "";

    // Loop through each character of the input text.
    for (let i = 0; i < decodedText.length; i++) {
      let char = decodedText[i];
      // Check if the character is a letter using a regular expression.
      if (char.match(/[a-z]/i)) {
        let charCode = decodedText.charCodeAt(i);
        
        // For uppercase letters.
        if (charCode >= 65 && charCode <= 90) {
          char = String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        }
        // For lowercase letters.
        else if (charCode >= 97 && charCode <= 122) {
          char = String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        }
      }
      // Append the shifted or unchanged character to the result.
      codedMessage += char;
    }

    // Output the encrypted message into the coded-message textarea.
    document.getElementById("coded-message").value = codedMessage;
}
