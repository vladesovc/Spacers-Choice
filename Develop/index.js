const fs = require('fs');
const inquirer = require('inquirer');
const generateLogoSVG = require('./logoGenerator');

const logoOptions = [
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape:',
    choices: ['Circle', 'Square', 'Triangle'],
  },
  {
    type: 'list',
    name: 'color',
    message: 'Select a color:',
    choices: ['Red', 'Green', 'Blue'],
  },
  {
    type: 'input',
    name: 'text',
    message: 'Enter 3 letter text for the logo:',
  },
  {
    type: 'input',
    name: 'filename',
    message: 'Enter the filename for the SVG file (e.g., logo.svg):',
  },
];