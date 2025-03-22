function validateCharInput(inputChar) {
    const verifyRange = /^[A-Z]$/; // Literally goes through every single uppercase letter lol

    if (!verifyRange.test(inputChar.value)) {
        inputChar.value = ""; // Clear the input
        alert("Please enter a single letter (A-Z)."); // Show an alert
      }
}