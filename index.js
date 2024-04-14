const inquirer = require("inquirer");

// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the Title of your project?',
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please enter the description of your project: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation guide:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter contribution guidelines:',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Please enter test instructions:',
    },
    {
        type: 'checkbox',
        message: 'What type of licensing do you need?',
        name: 'license',
        choices: ['MIT', 'GPL-3.0', 'Apache-2.0', 'None'],
    },
    {
        type: 'input',
        name: 'githubAccount',
        message: 'What is your github account name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];


// TODO: Create a function to write README file

function writeReadMe(data, filename = 'README.md') {
    const markdownContent = generateMarkdown(data);
    fs.writeFile(path.join(process.cwd(), filename), markdownContent,'utf8', function(err) {
        if (err) {
            console.log('An error occured while writing README to File.');
            return console.log(err);
        }
        console.log('README file has been saved')

    });

}

    // TODO: Create a function to initialize app
    function init() {
        inquirer.prompt(questions)
            .then((answers) => {
                writeReadMe(answers)
            })
    }




    // Function call to initialize app
    init();



