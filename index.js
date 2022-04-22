var inquirer = require("inquirer");
var fs = require("fs");
var generateReadme = require("./generateReadme");



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
            "GNU General Public License (GPL) 2.0",
            "Apache License 2.0",
            "GNU General Public License (GPL) 3.0",
            "BSD License 2.0 (3-clause, New or Revised",
            "None"
        ],
    },{
        type: "input",
        message: "Enter github username",
        name: "username"
    },{
        type: "input",
        message: "Enter github URL link",
        name: "gitbhub"
    },{
        type: "input",
        message: "Enter email address",
        name: "email" 
    },
]

function init () {
    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {
        console.log("Making Readme");
        fs.writeFileSync("Readme.md", inquirerResponse, data);
    })
    .catch((err) => {
        console.log(err);
    })
}

init();





// function writeToFile(fileName, data) {

//     fs.writeFile(fileName, data, function(err) {
//         console.log(fileName)
//         console.log(data)
//         if (err) {
//             return console.log(err)
//         } else {
//             console.log("success")
//         }
//     })
// }

// function init() {
//     inquirer.prompt(questions)
//     .then(function(data) {
//         writeToFile("README.md", generatorMarkdown(data));
//         console.log(data)

//     })
// }

// init();



// inquirer.prompt(questions).then(function(response) {
//     console.log(response);

//     const content = generateReadme(response);
//     console.log(content);
//     fs.writeFile("./README.md", content, function(err){
//         if (err) throw err
//         console.log("success");
//     });
// });



// .then((answers) => {
//     var content = generateReadme(response);
//     fs.writeFile("./README.md", content, (err) =>
//         err ? console.log(err) : console.log("Successfully created file")
//     );
// });