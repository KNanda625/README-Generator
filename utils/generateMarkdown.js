function makeUrl(username, title) {
    return `https://github.com/${username}/${title}`
};

function generateMarkdown(data) {

    return `
  # ${data.title}      
  
    ${data.description}
      \n* [Installation](#Installation)
      \n* [Instructions](#Instructions)
      \n* [License](#License)
      \n* [Contributors](#Contributors)
      \n* [Author](#Author)
      \n* [Tests](#Tests)

  ## Installation
      ${data.install}

  ## Instructions
      ${data.instruction}

  ## License 
      This project is licensed under ${data.license}

  ## Contributors
      ${data.contributorName}
  
  ## Tests
      ${data.tests}

  ## Author 
      \n![ProfileImage](${data.gitProfileImage})
      \n**${data.gitName}**
      \nEmail: ${data.gitEmail}
      \nLocation:${data.gitlocation}
      \nGitHub: ${data.gitUrl}

  `;
  }

  makeUrl();
  
  module.exports = generateMarkdown;