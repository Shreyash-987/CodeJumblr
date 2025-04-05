document.addEventListener("DOMContentLoaded", () => {
    const modifyButton = document.getElementById("modify-button"); // Modify text by pressing this button
    const clearButton = document.getElementById("clear-button"); // Clear text by pressing this button
    modifyButton.addEventListener("click", () => {
      const inputText = document.getElementById("input-text").value; // Track input text element
      const removeChars = document.getElementById("remove-chars").value; // Track characters meant to be removed by element
      const output = document.getElementById("modified-text"); // This is where the modified text will go
  
      if (!removeChars.trim()) {
        output.value = "Please enter letters to remove."; // Checks if the entry for character removal was valid
        return;
      }
  
      const clean = removeChars.replace(/[^a-zA-Z]/g, ""); // Any instance of a character in removeChars will be removed from the input string
      const regex = new RegExp("[" + clean + "]", "gi"); // Formats clean in order to be passed on as an output string later
      const modified = inputText.replace(regex, ""); // Creates a string that will be passed on as output after the modification
  
      output.value = modified; // This is what's going to be output to the "Modified Text" text area
    });
  
    clearButton.addEventListener("click", () => { // SImply clears everything
      document.getElementById("remove-chars").value = "";
      document.getElementById("input-text").value = "";
      document.getElementById("modified-text").value = "";
    });
  });