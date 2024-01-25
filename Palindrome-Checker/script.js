document.addEventListener("DOMContentLoaded", () => {
    const checkBtn = document.getElementById("check-btn");
    const textInput = document.getElementById("text-input");
    const result = document.getElementById("result");
  
    checkBtn.addEventListener("click", checkIfValid);
  
    function checkIfValid() {
      if (textInput.value.trim() === "") {
        alert("Please input a value");
      } else {
        let inputStr = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, '');
        let reversedStr = inputStr.split("").reverse().join("");

        if (inputStr === reversedStr) {
          result.textContent = `${textInput.value} is a palindrome.`;
        } else {
          result.textContent = `${textInput.value} is not a palindrome.`;
        }
      }
    }
 });