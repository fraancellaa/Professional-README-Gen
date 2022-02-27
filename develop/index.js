// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of repository? (Required)',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a description of the repository (Required)',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Describe the installation instructions.',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Describe the usage information.',
        name: 'Usage'
    },
    {
        type: 'input',
        message: 'Can the project be tested? How?.',
        name: 'test'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Was a license used for this project?, If so, select an option.',
        choices: [
            'MIT',
            'None',
            'Apache 2.0'
        ],
    },
    {
        type: 'input',
        message: 'Enter your GitHub username. (Required)',
        type: 'Github'
    },
    {
        type: 'input',
        message: 'Provide your email-address.',
        input: "Email"
    },
    
    {
        type: 'input',
        message: 'Please also provide a screenshot.',
        name: 'screenshotjs'
    },
];

// Prompt user to questions

prompt = () => {
    inquirer
    .prompt(questions)
    .then((answers) => {
        let markdown = generateMarkdown(answers)
        console.log(markdown)

        writeFile(markdown)
    })
    .catch((error) => {
        if(error.isTtyError) {
            // prompt couldnt be rendered
        } else {
            // something else went wrong
        }
    });
}

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('your-README.md', fileContent, err => {
            if(err) {
                reject(err);
                return;
            }
        resolve({
            ok: true,
            message: 'File created!'
        });
        });
    });
}


// TODO: Create a function to initialize app
function init() {
    prompt();
}

// Function call to initialize app
init();