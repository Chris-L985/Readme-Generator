// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateMd = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
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
        },
      },
      {
        //Email for questions
        type: 'input',
        name: 'email',
        message: 'Enter your current email address.',
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Enter your email address");
            return false;
          }
        },
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
        },
      },
      {
        // project usage
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
        validate: (usageInput) => {
          if (usageInput) {
            return true;
          } else {
            console.log("Please provide your usage instructions.");
            return false;
          }
        },
      }, 
      {
        // built with section
        type: 'checkbox',
        name: 'languages',
        message: 'What are the languages used on your application? (Check all that apply)',
        choices: ['HTML', 'CSS', 'JavaScript', 'SQL' , 'ES6' , 'Bootstrap' , 'Node']
      },
      {
        // Input Contributions
        type: 'input',
        name: 'contributions',
        message: 'List your collaborators.'
      },
      {
        // Input Licenses
        type: 'list',
        name: 'license',
        message: 'Select the following licenses needed for your project',
        choices: ["GNU GPLv3" , "ISC" , "Apache" , "No license required"],
      },
      {
        // Input Installation
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        validate: (validateInput) => {
          if (validateInput) {
            return true
          } else {
            console.log("Please enter steps required to install your Application. (Enter N/A if no steps are required) ")
            return false;
          }
        },
      },
      {
        // Input for testing application
        type: 'input',
        name: 'tests',
        message: 'What are some steps to test your application? (Type N/A if not applicable)',
        validate: (testInput) => {
          if (testInput) {
            return true;
          } else {
            console.log("Please enter your steps for testing the application.");
            return false;
          }
        },
      },
  ]);
};



// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile("./README.md", data, (err) => {
    if (err) {
      console.log("There was an issue. Please try again");
      return;
    } else {
      console.log("File created.");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  promptUser().then((readmeData) => {
    return generateMd(readmeData);
  })
  .then((createXML) => {
    return writeToFile(createXML);
  })
}

// Function call to initialize app
init();
