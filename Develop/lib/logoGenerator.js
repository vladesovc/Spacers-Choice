const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./prompt');
const { Circle, Triangle, Square } = require('./shapes')

function generateSVG(text, textColor, shapeRender) {
  const svgContent = `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    ${shapeRender}
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
      let selectedShapeClass;
      userInput.shape === 'circle'
        ? selectedShapeClass = new Circle()
        : userInput.shape === 'triangle'
          ? selectedShapeClass = new Triangle()
          : selectedShapeClass = new Square();

      selectedShapeClass.setColor(userInput.shapeColor)

      const svgContent = generateSVG(userInput.text, userInput.textColor, selectedShapeClass.render());
      writeSVGToFile(svgContent);

      console.log('Generated logo.svg');
    })
    .catch(error => console.error('Error:', error));
}

module.exports = generateLogo;