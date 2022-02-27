// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of repository? (Required)'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the repository (Required)'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Describe the installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the usage information.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Was a license used for this project?, If so, select an option.',
        choices: ['MIT', 'None', 'Apache 2.0'],
    },
    {
        type: 'contribute',
        name: 'contribution',
        message: 'Can others contribute?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Can the project be tested? How?.'
    },
    {
        type: 'input',
        name: 'screenshotjs',
        message: 'Please also provide a screenshot.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username. (Required)'
    },
    {
        type: 'input',
        name: "email",
        message: 'Provide your email-address.'
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
const writeFile = fileContent => {
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