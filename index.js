// Require the necessary modules
const inquirer = require('inquirer');
const fs = require('fs')

// Use Inquirer to prompt the user for input
inquirer
  .prompt([
    // Prompt for GitHub username, project name, and other information needed for README file
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
      type: 'input',
      message: 'If you want to include the screenshot, please add link or path. Otherwise press enter.',
      name: 'projectScreenshot'
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
${projectScreenshot && `![alt text](${projectScreenshot})`}

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