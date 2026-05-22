// Select the line element
const line = document.getElementById('line');

// Maintain a global variable for the rotation angle
let angle = 0;

// Use setInterval to update the angle every 20 milliseconds
setInterval(() => {
  // Increase the angle by 2 degrees
  angle += 2;
  
  // Apply the rotation using CSS transformations
  line.style.transform = `rotate(${angle}deg)`;
  
}, 20);