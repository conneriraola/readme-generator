const inquirer = require("inquirer");
const fs = require("fs");
const generateReadme = require("./generateReadme");

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
        message: "Installation instructions",
        name: "installation"
    },{
        type: "input",
        message: "Usage information",
        name: "usage"
    },{
        type: "input",
        message: "Contribution guidlines",
        name: "contribution"
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
            "GNU General Public License (GPL) 2.0",
            "Apache License 2.0",
            "GNU General Public License (GPL) 3.0",
            "BSD License 2.0 (3-clause, New or Revised",
            "None"
        ],
    },{
        type: "input",
        message: "Enter github username",
        name: "userName"
    },{
        type: "input",
        message: "Enter github URL link",
        name: "GitHub"
    },{
        type: "input",
        message: "Enter email address",
        name: "email" 
    }
];