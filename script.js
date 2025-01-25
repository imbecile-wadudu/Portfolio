// Floating animation for "Hello"
const hello = document.getElementById('hello');
let delay = 0;

hello.textContent.split('').forEach((char, index) => {
  const span = document.createElement('span');
  span.textContent = char;
  span.style.animation = `floatText 1s ${delay}s infinite alternate`;
  hello.appendChild(span);
  delay += 0.1;
});
