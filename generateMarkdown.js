// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "none") {
       return ""
    } else if (license === "MIT"){
        return "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (license === "GNU General Public License (GPL) 3.0"){
        return "[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/gpl-3.0"
    } else if (license === "Apache License 2.0"){
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (license === "Mozilla Public License 2.0"){
        return "![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
    
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "none") {
        return ""
     } else if (license === "MIT"){
         return "(https://opensource.org/licenses/MIT)"
     } else if (license === "GNU General Public License (GPL) 3.0"){
         return "[(https://opensource.org/licenses/gpl-3.0"
     } else if (license === "Apache License 2.0"){
         return "[(https://opensource.org/licenses/Apache-2.0)"
     } else if (license === "Mozilla Public License 2.0"){
         return "!(https://opensource.org/licenses/MPL-2.0)"
     }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}



function generateMarkdown(data) {
    return `${renderLicenseBadge(data.license)}
# ${data.title}
https://github.com/${data.username}/${data.title}

# Description
${data.description}

# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
    
# Installation 
The following dependencies must be installed to run application: 
${data.installation}

# Usage
Instructions to use app... 
${data.usage}

# License
${data.license}
${renderLicenseLink(data.license)}

# Contributors
${data.contributors}

# Testing
${data.testing}

# Questions
* Github Username: ${data.username}
* Github profile: ${data.github}
* ${data.email}

`
}

module.exports = generateMarkdown;