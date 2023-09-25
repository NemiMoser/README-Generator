function renderLicenseBadge(license) {
  if (!license) {
    return '';
}
  const badgeUrls = {
    'MIT License': 'https://img.shields.io/badge/license-MIT-brightgreen.svg',
    'GNU GPLv3': 'https://img.shields.io/badge/license-GNU%20GPLv3-blue.svg',
  };

  return `![License](${badgeUrls[license]})`;
}

function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  const licenseUrls = {
    'MIT License': 'https://opensource.org/licenses/MIT',
    'GNU GPLv3': 'https://www.gnu.org/licenses/gpl-3.0.en.html',
  };

  return `[License](${licenseUrls[license]})`;
}

function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `## License

This project is licensed under the ${license} License. See the [License](${renderLicenseLink(license)}) for details.`;
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

${renderLicenseSection(data.license)}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For questions or inquiries, please contact:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// TODO: Create a function to generate markdown for README
