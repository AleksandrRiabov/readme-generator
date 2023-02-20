// Require the necessary modules
const inquirer = require('inquirer');
const fs = require('fs');

const questions = require('./questions.js');

// Use Inquirer to prompt the user for input
inquirer
  .prompt(questions)
  .then(res => {
    // Write the contents of the README file to disk using the generateReadme function
    fs.writeFile('readme.md', generateReadme(res), error => {
      error ? console.log(error) : console.log('Readme file has been created');
    })
  });


// Function to generate the contents of the README file based on user input
const generateReadme = (response) => {
  // Extract variables from the response object
  const {
    projectName,
    projectDescription,
    projectLicense,
    projectUrl,
    projectInstalation,
    githubName,
    projectUsage,
    projectContributing,
    projectTests,
    projectScreenshot

  } = response;

  // Use template literals to generate the README file contents
  return `
  ${projectLicense && `[![License: MIT](https://img.shields.io/badge/License-${projectLicense}-yellow.svg)](https://opensource.org/licenses/${projectLicense})`}

# ${projectName || 'Project Name'}

## Description 
 ${projectDescription || 'Add some project description here..'}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
Clone repository using <code> git clone ${projectUrl || 'repository'} </code> and run <code>${projectInstalation || '"npm install"'}</code> comand.

## Usage
${projectUsage || 'N/A'}

${projectScreenshot && `### Screenshot `}
${projectScreenshot && `![${projectName} screenshot](${projectScreenshot})`}

## License
This projcet is licensed under **${projectLicense}** license.

## Contributing
${projectContributing}

${projectTests && '## Tests'}
${projectTests}

## Questions
If you have any questions, please ask [${(githubName).replace(/\s/g, '')}](https://github.com/${(githubName).replace(/\s/g, '')}) 
`
}