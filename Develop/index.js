const Choice = require("inquirer/lib/objects/choice");
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const { title } = require("process");
const inquirer = require("inquirer");

// array of questions for user=
const questions = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: title => {
                if (title) { return true; } else {
                    console.log("A name is required for every project");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project',
            validate: title => {
                if (title) { return true; } else {
                    console.log("A description is required.");
                    return false;
                }
            }
        },
        // {
        //     type: 'input',
        //     name: 'Table of Contents',
        //     message: 'Provide a table of contents for the project'
        // },
        {
            type: 'input',
            name: 'installation',
            message: 'Give installation instructions',
            validate: install => {
                if (install) { return true; } else {
                    console.log("Add install insctructions");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: "Usage",
            message: "Provide usage information"
        },
        {
            type: 'input',
            name: 'Contribution guidelines',
            message: 'Provide contribution guidelines',
            validate: guideline => {
                if (guideline) { return true; } else {
                    console.log("Add contribution guidelines");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "Test instructions",
            message: "Provide test instructions"
        },
        {
            type: "checkbox",
            name: "license",
            message: "What license(s) would you like to add to this project?",
            choices: ['MIT', 'APACHE', 'GPL', 'NONE']
        },

    ]);
}

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {

}

// function call to initialize program
init();