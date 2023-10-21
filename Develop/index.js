// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the name of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description about your project."
        },
        {
            type: "input",
            name: "install",
            message: "What do you need to install in order for your application to work?"
        },
        {
            type: "input",
            name: "use",
            message: "How do you use this application?"
        },
        {
            type: "input",
            name: "languages",
            message: "What programming languages did you use for this project?"
        },
        {
            type: "list",
            name: "license",
            message: "What type of license would you like?",
            choices: [
                "Apache License 2.0",
                "GNU GPLv3",
                "MIT",
                "ISC",
                "None"
            ]
        },
        {
            type: "list",
            name: "contributors",
            message: "Where there any contributers on your project?",
            choices: [
                "Yes",
                "No"
            ]
        }
    ])
    .then((response) => {
        console.log(response)
    })

// TODO: Create a function to write README file

// TODO: Create a function to initialize app

// function call to initialize app
