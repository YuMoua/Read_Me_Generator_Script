// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
let badge = '';

  switch (license) {
    case 'MIT':
      badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'GPL-3.0':
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      break;
    case 'Apache-2.0':
      badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      break;
    default:
      return ``;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return 'No license Provided.'
  }
  let link = '';


  switch (license) {
    case 'MIT':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'GPL-3.0':
      link = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'Apache-2.0':
      link = 'https://opensource.org/licenses/Apache-2.0';
      break;
    default:
      return ``;
  }

  return link;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }

  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);

  return `
## License
This project is licensed under the ${license} License. ${licenseBadge}

For more details see [the LICENSE file](${licenseLink}).
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license)

  return `
  # ${data.projectTitle}

  ## Description
  ${data.projectDescription}

  ## Table of Contents
  - [installation](#installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)

  ## Installation
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ##Usage
  ${data.usage}

  ## License
  ${licenseSection}

  ## Contributing
  ${data.contribution}

  ## Tests
  \`\`\`
  ${data.testInstructions}
  \`\`\`
  
`;
}

module.exports = generateMarkdown;
