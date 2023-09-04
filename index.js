const phrases = ["Web Developer", "Frontend Developer", "Wordpress Developer"];
const typingSpan = document.getElementById("typingSpan");

let currentPhraseIndex = 0;
let currentCharacterIndex = 0;

function type() {
  if (currentPhraseIndex >= phrases.length) {
    currentPhraseIndex = 0;
  }

  const currentPhrase = phrases[currentPhraseIndex];
  const currentCharacter = currentPhrase.charAt(currentCharacterIndex);

  typingSpan.textContent += currentCharacter;
  currentCharacterIndex++;

  if (currentCharacterIndex < currentPhrase.length) {
    setTimeout(type, 100); // Adjust typing speed (milliseconds per character)
  } else {
    setTimeout(erase, 2000); // Wait for 2 seconds before erasing
  }
}

function erase() {
  if (currentCharacterIndex >= 0) {
    const currentPhrase = phrases[currentPhraseIndex];
    typingSpan.textContent = currentPhrase.substring(0, currentCharacterIndex);
    currentCharacterIndex--;

    setTimeout(erase, 50); // Adjust erasing speed (milliseconds per character)
  } else {
    currentPhraseIndex++;
    setTimeout(type, 1000); // Wait for 1 second before typing the next phrase
  }
}

type(); // Start typing animation
