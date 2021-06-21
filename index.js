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
      //Project description
      type: 'input',
      name: 'description',
      message: 'Describe your project.',
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please provide a description of your project.");
          return false;
        }
      }
    },
    {
      // project usage
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and exammples for use.'
    }, 
    {
      // built with section
      type: 'checkbox',
      name: 'stack',
      message: 'What are the languages used on your application?',
      choices: []
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators.'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select the following licenses needed for your project',
      choices: ["GNU GPLv3" , "ISC" , "Apache" , "No licence required"],
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide a listing of contributions as necessary.'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are some steps to test your application?'
    },
]);



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
