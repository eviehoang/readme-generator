// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Extract the filename from a file path:
const path = require("path");

// Markdown Doc
const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
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
            message: "How do you use this application? Is it on web, mobile, etc?"
        },
        {
            type: "input",
            name: "tech",
            message: "Which technologies did you use?"
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
    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log("Generating README... please give me a moment!");
        writeToFile("./generated-readme/README.md", markdown({ ...answers}));
    })
}

// function call to initialize app
init();