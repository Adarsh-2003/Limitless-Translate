// logic to generate the blob
function generateTextFile() {
    var textInput = document.getElementById("textInput").value;
    // Convert the text to Blob using UTF-8 encoding
    var blob = new Blob([decodeURIComponent(encodeURIComponent(textInput))], { type: "text/plain;charset=utf-8" });

    var url = URL.createObjectURL(blob);
    window.open(url, "_blank");
}

  // Function to oprn the popup
function openPopup() {
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('wrapper').classList.add('blur');
  }

  // Function to close the popup
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('wrapper').classList.remove('blur');
  }


// Function to check textarea before calling generateTextFile
function validateAndGenerate() {
    const textarea = document.getElementById('textInput');
    if (!textarea.value.trim()) {
      alert('Please enter some text before submitting!');
      return;
    }
    generateTextFile();
  }