const text = "Hello";
const textElement = document.getElementById("text");
textElement.innerHTML = "";

let charIndex = 0;
const typeInterval = setInterval(() => {
  if (charIndex < text.length) {
    textElement.innerHTML += text[charIndex];
    charIndex++;
  } else {
    clearInterval(typeInterval);
  }
}, 200);
