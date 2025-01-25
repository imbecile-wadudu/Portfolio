const animatedText = document.getElementById('animated-text');
const kendrickQuote = document.getElementById('kendrick-quote');
const sections = document.querySelectorAll('section');
const mainContent = document.querySelector('main');

// Header text animation
const textArray = ['Hello!', 'Welcome!', 'Greetings!', 'Hi there!'];
let textIndex = 0;

function changeText() {
  animatedText.textContent = textArray[textIndex];
  textIndex = (textIndex + 1) % textArray.length;
}

setInterval(changeText, 1000);

// Header zoom-out animation
setTimeout(() => {
  animatedText.style.transform = 'scale(1)';
}, 500);

// Show main content after header animation
setTimeout(() => {
  mainContent.classList.add('visible');
}, 1000); // Delay to match header animation

// Section animations on scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - window.innerHeight * 0.2 && scrollY <= sectionTop + sectionHeight) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});
