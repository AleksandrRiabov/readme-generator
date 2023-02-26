const questions = [
  // Prompt for GitHub username, project name, and other information needed for README file
  {
    type: 'input',
    message: 'What is your GitHub name?',
    name: 'githubName'
  },
  {
    type: 'input',
    message: 'What is your Email?',
    name: 'email'
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
    message: 'If you want to include the Walk Through Video, please add the link. Otherwise press enter.',
    name: 'projectVideo'
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
]

module.exports = questions;

