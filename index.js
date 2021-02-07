// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
// const questions = [
    
// ];  
const writeFileAsync = util.promisify(fs.writeFile);

//Input prompts
const promptUser = () => {
  return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Welcome, press enter at any time to skip. What is your name?:',
      },
    
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
        type: 'input',
        name: 'screenshot',
        message: 'If you have a screenshot link for your project, paste it here:',
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

