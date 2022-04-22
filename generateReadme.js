function generateReadme(data) {
    return `
    
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
    The following dependencies must be installed to run application: ${data.installation}
    # Usage
    Instructions to use app... ${data.usage}
    # License
    This project is licensed under the ${data.license}

    # Contributors
    ${data.contribtors}
    # Testing
    ${data.testing}
    # Questions
    ${data.email}
    `
}

module.exports = generateReadme;