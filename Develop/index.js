const inquirer = require('inquirer');
const generateLogo = require('./lib/logoGenerator.js');
const questions = require('./lib/prompt.js');

// Run the logo generation function
function runLogoGeneration() {
    generateLogo();
}

runLogoGeneration();
