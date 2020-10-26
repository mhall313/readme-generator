const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./generateMarkdown");



const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of the application or project?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a brief description of your project. The why, what and how"
    },
    {
        type: "input",
        name: "installation",
        message: "What steps are required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and screenshots on how to use your application."
    },
    {
        type: "input",
        name: "credits",
        message: "Did anyone collaborate on this project? Credit them here."
    },
    {
        type: "input",
        name: "license",
        message: "Are there any appropriate licenses that need listing?"
    }
]

function generateReadme(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log("Your readme is being generated");
        generateReadme("readme.md", generateMarkdown({...inquirerResponses}));
    })
}

init();
