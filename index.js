const inquirer = require('inquirer');
const fs = require('fs')


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your GitHub name?',
      name: 'githubName'
    },
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'projectName'
    },
    {
      type: 'input',
      message: 'Add some project description?',
      name: 'projectDescription'
    },
    {
      type: 'input',
      message: 'What is the project repo url?',
      name: 'projectUrl'
    },
    {
      type: 'input',
      message: 'What is the command used to install the project?',
      name: 'projectInstalation'
    },
    {
      type: 'input',
      message: 'Provide some instructions how to use the app.',
      name: 'projectUsage'
    },
    {
      type: 'list',
      message: 'What is this project license?',
      name: 'projectLicense',
      choices: ['MIT', 'ISC', 'MPL_2.0', 'Apache_2.0', 'ODC_BY']
    },
    {
      type: 'input',
      message: 'How to contribute to the project?',
      name: 'projectContributing'
    },
    {
      type: 'input',
      message: 'Add tests instructions, or leave it blank.',
      name: 'projectTests'
    }
  ])
  .then(res => {
    fs.writeFile('readme.md', generateReadme(res), error => {
      error ? console.log(error) : console.log('Readme file has been created');
    })
  });

const generateReadme = (response) => {
  const {
    projectName,
    projectDescription,
    projectLicense,
    projectUrl,
    projectInstalation,
    githubName,
    projectUsage,
    projectContributing,
    projectTests

  } = response;

  return `
  [![License: MIT](https://img.shields.io/badge/License-${projectLicense}-yellow.svg)](https://opensource.org/licenses/${projectLicense})

# ${projectName}

## Description 
 ${projectDescription}

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Questions](#Questions)
- [License](#license)

## Installation
Clone repository using <code> git clone ${projectUrl} </code> and run <code>${projectInstalation}</code> comand.

## Usage
${projectUsage}

## License
This projcet is licensed under **${projectLicense}** license.

## Contributing
${projectContributing}

${projectTests && '## Tests'}
${projectTests}


## Questions

If you have any questions, please ask [${githubName}](https://github.com/A${githubName}) 
  `
}