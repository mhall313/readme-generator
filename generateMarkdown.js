// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.name}
    ## Description

    ${data.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)

    ## Installation

    ${data.installation}

    ## Usage

    ${data.usage}

    ## Credits

    ${data.credits}

    ## License

    ${data.license}

  `;
  }
  
  module.exports = generateMarkdown;
  