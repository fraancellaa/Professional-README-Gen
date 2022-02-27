
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![badge](https://img.shields.io/badge/license-${data.license}-brightblue)<br />

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightblue)<br />
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