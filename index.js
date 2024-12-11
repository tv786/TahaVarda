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

// //////

// Function to add a new project
function addProject(projectName, imageUrl, siteUrl) {
  const projectDiv = $('<div>').addClass('project');
  const projectLink = $('<a>').attr('href', siteUrl).attr('target', '_blank');
  const projectImage = $('<img>').attr('src', imageUrl).attr('alt', projectName);
  const projectNameElement = $('<h5>').text(projectName);
  
  projectLink.append(projectImage, projectNameElement);
  projectDiv.append(projectLink);
  $('#projects-container').append(projectDiv);
}

// Add Projects
addProject('Siberia Snus', './images/23.jpeg', 'https://www.siberia-snus.de/');
addProject('Kinews 24', './images/29.jpeg', 'https://kinews24.de/');
addProject('ConnectMore', './images/30.jpeg', '#portfolio');
addProject('Doinsight', './images/31.jpeg', 'https://do-insights.com/');
addProject('Hidden Smiles', './images/3.jpeg', 'http://hidden-smiles.com/');
addProject('Em2 Consulting', './images/22.jpeg', 'https://em2-consulting.com/');
addProject('Tech Now', './images/21.jpeg', 'https://tech-now.io/');
addProject('The Aiq', './images/25.jpeg', 'https://theaiq.de/');
addProject('BMR Digital', './images/32.jpeg', 'https://www.bmr.digital/');
addProject('J&E Designer Windows', './images/34.jpeg', 'https://jedesignerwindows.in/');
addProject('Goya Hills', './images/26.jpeg', 'https://goya-hills.com/');
addProject('MCS Communications', './images/33.jpeg', 'https://mcscommunications.in/');
addProject('Ayursudha Coaching', './images/27.jpeg', 'https://ayursudhacoaching.com/');
addProject('WIKI', './images/28.jpeg', 'https://wiki.com.au/');
addProject('Eurodoors', './images/15.jpeg', 'https://eurodoors.org/');
addProject('Angel Wealth Advisor', './images/8.jpeg', 'https://angelwealthadvisors.com/');
addProject('LEPI Venture', './images/9.jpeg', '#portfolio');
addProject('Gutachter24', './images/16.jpeg', 'https://gutachter24.berlin/');
addProject('Go-Finance', './images/1.jpeg', 'https://go-infofinance.com/');
addProject('Go-tech Solutions', './images/2.jpeg', 'https://go-techsolution.org/');
addProject('Jawahar Deep cleaning', './images/4.jpeg', 'https://jawahardeepcleaning.com/');
addProject('Travinix', './images/5.jpeg', 'https://visittravenex.com/');
addProject('Turquoise', './images/6.jpeg', 'https://trqauto.com/');
addProject('Tiru Pooja Store', './images/7.jpeg', 'https://tirupoojastore.in/');
addProject('Weddings For U', './images/11.jpeg', 'https://weddingsforu.in/');
addProject('Aryavart', './images/12.jpeg', 'https://aryavarttls.org/');
addProject('YK Infra Trading', './images/13.jpeg', 'https://ykinfratrading.com/');
addProject('Raj Astrologer', './images/14.jpeg', 'https://rajastrologer.in/');
addProject('PDS Clicks', './images/17.jpeg', 'https://pdsclicks.in/');
addProject('Alaikha', './images/18.jpeg', 'https://alaikha.com/');
addProject('4D', './images/19.jpeg', 'https://www.thefourd.com/');
addProject('Swarit Studios', './images/20.jpeg', '#portfolio');
addProject('Shree Tours', './images/24.jpeg', 'https://shreetoursudaipur.com/');