var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./generateMarkdown");



let questions = [
    {
        type: "input",
        message: "What is the title of your repository?",
        name: "title"
    },{
        type: "input",
        message: "Decription of repository",
        name: "description"
    },{
        type: "input",
        message: "Which dependencies must be installed to run application",
        name: "installation"
    },{
        type: "input",
        message: "How is the app used?",
        name: "usage"
    },{
        type: "input",
        message: "Contributors",
        name: "contributors"
    },{
        type: "input",
        message: "Testing instructions",
        name: "testing"
    },{
        type: "list",
        message: "Please select the license you would like to use",
        name: "license",
        choices: [
            "MIT",
            "GNU GPLv3",
            "Apache License 2.0",
            "Mozilla Public License 2.0",
            "None"
        ],
    },{
        type: "input",
        message: "Enter github username",
        name: "username"
    },{
        type: "input",
        message: "Enter github URL link",
        name: "github"
    },{
        type: "input",
        message: "Enter email address",
        name: "email" 
    },
]

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}

function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("./dist/README.md", generateMarkdown(data));
        console.log(data)

    })
}

init();


