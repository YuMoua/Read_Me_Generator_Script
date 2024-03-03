const inquirer = require("inquirer");

// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
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
        message: 'Please enter the description of your project, the installation guide, usage information, contrabution guidelines, and test instructions.',
    },
    {
        type: 'checkbox',
        message: 'What type of licensing do you need?',
        name: 'license',
        choices: ['MIT License', 'None'],
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
// put questions inside array

        
    // ])
    // .then((data) => {
    //     const filename = `${data.projectTitle.toLowerCase().split(' ').join('')}.json`;

    //     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //         err ? console.log(err) : console.log('Success!')
    //     );
    // });


// function fetchJSONData() {
//     fetch('./' + `${data.projectTitle.toLowerCase().split(' ').join('')}.json` + '.json');
// };


// function writeReadMe() {
//     const readMeData = [projectTitle, projectDescription, liscense, githubAccount, email];
//     fs.writeToFile(README.md, readMeData,)
// };


// TODO: Create a function to write README file

function writeReadMe({projectTitle, ProjectDescription, license, githubAccount, email}) {

}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(writeReadMe())
}




// Function call to initialize app
init();



