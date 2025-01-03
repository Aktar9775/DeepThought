// Select button and message elements
const button = document.getElementById('interactiveButton');
const message = document.getElementById('message');

// Event Listener for Button Click
button.addEventListener('click', () => {
  // Change Button Text and Color
  button.textContent = button.textContent === 'Click Me!' ? 'Clicked!' : 'Click Me!';
  button.style.backgroundColor = button.style.backgroundColor === 'rgb(74, 144, 226)' ? '#f06' : '#4a90e2';

  // Update Message Text
  message.textContent = 'You clicked the button!';
  message.style.marginTop = '10px';

  // Reset Message after 2 seconds
  setTimeout(() => {
    message.textContent = '';
  }, 2000);
});
