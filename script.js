const animatedText = document.getElementById('animated-text');
const kendrickQuote = document.getElementById('kendrick-quote');
const sections = document.querySelectorAll('section');

// Header text animation
const textArray = ['Hello!', 'Welcome!', 'Greetings!', 'Hi there!'];
let textIndex = 0;

function changeText() {
  animatedText.textContent = textArray[textIndex];
  textIndex = (textIndex + 1) % textArray.length;
}

setInterval(changeText, 1000);

// Header zoom-out animation
animatedText.style.transform = 'scale(1.2)';
setTimeout(() => {
  animatedText.style.transform = 'scale(1)';
}, 500);

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
