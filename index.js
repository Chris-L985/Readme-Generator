// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateMd = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      //Github Username
      type: 'input',
      name: 'username',
      message: 'Enter your username',
      validate: (usernameInput) => {
        if (usernameInput) {
          return true;
        } else {
          console.log("Enter your GitHub username.");
          return false;
        }
      }
    },
    {
      //Project title
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log ("Enter your project title.");
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and exammples for use.'
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators.'
    },
    {
      type: 'input',
      name: 'license',
      message: 'What are the steps required to install your project?'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?'
    },
    {
      type: 'input',
      name: 'features',
      message: 'What are the features of your application?'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the steps required to install your project?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the steps required to install your project?'
    },
]);



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
