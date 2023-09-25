const inquirer = require('inquirer');
const fs = require('fs');

function generateLicenseBadge(license) {
    switch (license) {
        case 'MIT License':
            return 'https://img.shields.io/badge/License-MIT-yellow.svg';
        case 'GNU GPLv3':
            return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
        default:
            return '';
    }
}

function generateHTML({ title, description, installation, usage, contribution, test, license, github, email}) {
    const licenseBadge = generateLicenseBadge(license);

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>ReadMe Project</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Montserrat', sans-serif;
            background-color: #ece6db;
            color: black;  
        }
        h1 {
            background-color: #b7c6ad;
            width: 100%;
            padding: 20px 0;
            font-size: 30px;
        }
        h5 {
            text-decoration: underline;
        }
    </style>
  <body>
  <h1>${title}</h1>
  <img src="${licenseBadge}" alt="${license} License Badge">
  <p><h5>Description:</h5>${description}</p>
  <p><h5>Table of Contents:</h5><ul>
        <li>Installation</li>
        <li>Usage</li>
        <li>Contribution</li>
        <li>Test</li>
        <li>License</li>
        <li>Questions</li>
    </ul>
    </p>
  <p><h5>Installation Instuctions:</h5>${installation}</p>
  <p><h5>Usage Information:</h5>${usage}</p>
  <p><h5>Contribution Guidelines:</h5>${contribution}</p>
  <p><h5>Test Instructions:</h5>${test}</p>
  <p><h5>License:</h5>${license}</p>
  <p><h5>Questions:</h5>GitHub username: <a href="https://github.com/${github}" target="_blank">${github}</a><br>
  Email: ${email}</p>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1.11.3/dayjs.min.js"
    integrity="sha256-iu/zLUB+QgISXBLCW/mcDi/rnf4m4uEDO0wauy76x7U="
    crossorigin="anonymous"></script>
</body>
</html>`;
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Successfully created ${fileName}!`);
        }
    });
}


function init() {
    const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter the usage information:'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter the contribution guidelines:',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter the test instructions:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your application:',
            choices: ['MIT License', 'GNU GPLv3'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
        },
    ];

    inquirer.prompt(questions)
        .then((answers) => {
            const htmlPageContent = generateHTML(answers);

            writeToFile('index.html', htmlPageContent);

            const readmeContent = generateReadme(answers);
            writeToFile('README.md', readmeContent);
        });
}

function generateReadme(data) {
    const licenseBadge = generateLicenseBadge(data.license);
    return `
# ${data.title}

${licenseBadge}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [License](#license)
- [Questions](#questions)

## Installation Instructions
${data.installation}

## Usage Information
${data.usage}

## Contribution Guidelines
${data.contribution}

## Test Instructions
${data.test}

## License

This project is licensed under the ${data.license}.

## Questions

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

function generateLicenseBadge(license) {
    switch (license) {
        case 'MIT License':
            return 'https://img.shields.io/badge/License-MIT-yellow.svg';
        case 'GNU GPLv3':
            return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
        default:
            return '';
    }
}

init();

// TODO: Include packages needed for this application
// TODO: Create an array of questions for user input
// TODO: Create a function to write README file
// TODO: Create a function to initialize app
// Function call to initialize app
