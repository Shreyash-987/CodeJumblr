function encrypt() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Makes all inputs and outputs uppercase
    const key = document.getElementById("cipher-key").value.toUpperCase();
    const input = document.getElementById("decoded-text").value.toUpperCase();

    const outputArea = document.getElementById("coded-message");
  
    // Basic checks for key length and characters, ensures key is exactly 26 letters.
    if (key.length !== 26) {
      outputArea.value = "Key must be exactly 26 letters.";
      return;
    }

    // Error handling:
    let letters = {};
    for (let i = 0; i < key.length; i++) { 
      let char = key[i];
      if (char < 'A' || char > 'Z') { // Checks if message contains only viable letters.
        outputArea.value = "Key must only contain letters A–Z.";
        return;
      }
      if (letters[char]) { // Checks if message contains unique letters.
        outputArea.value = "Key must not have repeated letters.";
        return;
      }
      letters[char] = true;
    }
  
    // Encrypts the inputted message
    let encrypted = ""; // Initializes encrypted string
    for (let i = 0; i < input.length; i++) { // Iterates through the length of the inputted message
      let char = input[i];
      if (alphabet.includes(char)) {
        let index = alphabet.indexOf(char);
        encrypted += key[index];
      } else { 
        encrypted += char; // Adds the space, punctuation, number etc back into the encrypted list.
      }
    }
  
    outputArea.value = encrypted; // Outputs the newly made encrypted string ont the outputArea element.
  }

  // Generates a randomized cipher key with unique letters.
  function generate() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // Splits the string into an array containing each individual letter.
    let shuffled = []; // initializes unshuffled list.
  
    while (alphabet.length > 0) {
      const randomIndex = Math.floor(Math.random() * alphabet.length); // Generates random index.
      const letter = alphabet.splice(randomIndex, 1)[0]; // Using the random index, it selects a corresponding letter from alphabet array.
      shuffled.push(letter); // Adds randomly selected letter to list.
    }
  
    document.getElementById("cipher-key").value = shuffled.join(""); // Outputs the randomized cipher key.
  }