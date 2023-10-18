const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./prompt');
const {Circle, Triangle, Square} = require('./shapes')

function generateSVG(text, textColor, shape, shapeColor) {
  // Replace with your SVG generation logic based on the provided input
  // Example: Creating a simple SVG with the given text and shape
  const svgContent = `
    <svg width="300" height="200">
      <rect width="300" height="200" fill="${shapeColor}" />
      <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dy=".3em">${text}</text>
    </svg>
  `;

  return svgContent;
}

// Function to write SVG content to a file
function writeSVGToFile(svgContent) {
  fs.writeFileSync('logo.svg', svgContent);
}

function generateLogo() {
  inquirer.prompt(questions)
    .then(userInput => {
      const selectedShapeClass = userInput.shape.toLowerCase() === 'circle'
        ? Circle
        : userInput.shape.toLowerCase() === 'triangle'
          ? Triangle
          : Square;

      const shape = new selectedShapeClass();

      const svgContent = generateSVG(userInput.text, userInput.textColor, userInput.shape, userInput.shapeColor);
      writeSVGToFile(svgContent);

      console.log('Generated logo.svg');
    })
    .catch(error => console.error('Error:', error));
}


module.exports = generateLogo;