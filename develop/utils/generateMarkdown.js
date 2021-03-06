
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contribution)
  - [Testing](#test)
  - [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
  App covered by the ${data.license} license.

  ## Contribution
  ${data.contribution}

  ## Testing
  ${data.test}

  ## Screenshot
  ${data.screenshotjs}

  ## Contact Information
  -Github: ${data.github}
  -Email: ${data.email}
`;
}

module.exports = generateMarkdown;