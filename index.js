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
      name: 'title',
      message: 'What is the title of your project?:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Add a Description of your project/application:',
    },
    {
      type: 'input',
      name: 'installationInstructions',
      message: 'Please provide installation instructions:',
    },
    {
      type: 'input',
      name: 'usageInformation',
      message: 'Please provide usage information:',
    },
    {
      type: 'input',
      name: 'contributionGuidelines',
      message: 'Please provide Contribution guidelines:',
    },
    {
      type: 'input',
      name: 'testInstructions',
      message: 'Please provide test instructions:',
    },
    
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license from the list:',
      choices: ['MIT', 'GPL', 'Apache', 'BSD', 'None'],
      },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Please Enter your GitHub Username:',
      },
    {
        type: 'input',
        name: 'email',
        message: 'Please Enter your Email Address:',
      },

  ]);
};



const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('./sampleReadme/readme.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to readme.md'))
      .catch((err) => console.error(err));
  };

init();

// TODO: Create a function to initialize app
// function init() {
//     generateMarkdown("data");}

// Function call to initialize app


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// const generateReadme = (answers) =>
// `# ${answers.title}
// >   ## Description
//  ${answers.description}

// ## Table of contents
// * [Description](#Description)
// * [Installation Instructions](#Installation-Instructions)
// * [Usage Information](#Usage-Information)
// * [Contributing](#Contributing)
// * [Test Instructions](#Test-Instructions)

// * [General info](#general-info)
// * [Screenshots](#screenshots)
// * [Technologies](#technologies)
// * [Setup](#setup)
// * [Features](#features)
// * [Status](#status)
// * [Inspiration](#inspiration)
// * [Contact](#contact)


// ## Installation Instructions
// ${answers.installationInstructions}

// ## Usage Information
// ${answers.usageInformation}

// ## Contributing
// ${answers.contributionGuidelines}

// ## Test Instructions
// ${answers.testInstructions}

// ## Questions

// * GitHub username: ${answers.githubUsername}
// * [Github Link](https://github.com/${answers.githubUsername}/)
// * Email Address: ${answers.email}

// ## Code Examples
// Show examples of usage:
// "put-your-code-here"

// ## General info
// Add more general information about project. What the purpose of the project is? Motivation?

// ## Screenshots
// ![Example screenshot](./img/screenshot.png)

// ## Technologies
// * Tech 1 - version 1.0
// * Tech 2 - version 2.0
// * Tech 3 - version 3.0

// ## Features
// List of features ready and TODOs for future development
// * Awesome feature 1
// * Awesome feature 2
// * Awesome feature 3

// To-do list:
// * Wow improvement to be done 1
// * Wow improvement to be done 2

// ## Status
// Project is: _in progress_, _finished_, _no longer continue_ and why?

// ## Inspiration
// Add here credits. Project inspired by..., based on...

// ## Contact
// Created by
// `;

