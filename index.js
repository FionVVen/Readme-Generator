// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
// const questions = [
    
// ];  
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Add a Description of your project/application',
    },
    {
      type: 'input',
      name: 'Installation Instructions',
      message: 'Please provide installation instructions.',
    },
    {
      type: 'input',
      name: 'Usage Information',
      message: 'Please provide usage iinformation.',
    },
    {
      type: 'input',
      name: 'Contribution guidelines',
      message: 'Please provide Contribution guidelines.',
    },
    {
      type: 'input',
      name: 'Test Instructions',
      message: 'Please provide test instructions.',
    },
    
    
    {
        type: 'list',
        name: 'License.',
        message: 'Please choose a license from the list.',
        choices: ['',],

      },
    {
        type: 'input',
        name: 'GitHub Username',
        message: 'Please Enter your GitHub Username.',
      },
    {
        type: 'input',
        name: 'Email',
        message: 'Please Enter your Email Address.',
      },
  
  
  


  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    generateMarkdown("data");}

// Function call to initialize app
init();
