document.addEventListener("DOMContentLoaded", () => {
    const modifyButton = document.getElementById("modify-button");
    const clearButton = document.getElementById("clear-button");
  
    modifyButton.addEventListener("click", () => {
      const inputText = document.getElementById("input-text").value;
      const removeChars = document.getElementById("remove-chars").value;
      const output = document.getElementById("modified-text");
  
      if (!removeChars.trim()) {
        output.value = "Please enter letters to remove.";
        return;
      }
  
      const clean = removeChars.replace(/[^a-zA-Z]/g, "");
      const regex = new RegExp("[" + clean + "]", "gi");
      const modified = inputText.replace(regex, "");
  
      output.value = modified;
    });
  
    clearButton.addEventListener("click", () => {
      document.getElementById("remove-chars").value = "";
      document.getElementById("input-text").value = "";
      document.getElementById("modified-text").value = "";
    });
  });