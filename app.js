const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'input',
    message: 'What is the title of your Application?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is a brief description of your Application?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Please provide installation instructions.',
    name: 'instructions',
  },
  {
    type: 'input',
    message: 'Please provide brief usage details.',
    name: 'details',
  },
  {
    type: "list",
    name: "license",
    message: "What license would you like to use?",
    choices: [
      "Apache 2.0 License",
      "The MIT License",
      "The Artistic License 2.0",
      "DWTFYWT License",
      "Mozilla Public License 2.0",
      "Creative Commons License",
      "No License"
    ]
  },
  {
    type: 'input',
    message: 'What is your github?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
])
.then((response) => {
  const markdownLiteral = `# ${response.title}

# Table of Contents
1. [${response.title}](#${response.title.replace(/ /g, '-')})
2. [Installation Instructions](#${response.instructions.replace(/ /g, '-')})
3. [Usage Instructions](#${response.details.replace(/ /g, '-')})
4. [License](#${response.license.replace(/ /g, '-')})
5. [GitHub Repository](#${response.github.replace(/ /g, '-')})
6. [Contact Me](#contact-me)

${response.description}

## Installation Instructions 
${response.instructions}

## Usage Instructions
${response.details}

## License
${response.license}

## GitHub Repository
Attached is my GitHub Repository: ${response.github}

## Contact Me
For further questions or inquiries, please contact me at 📧: ${response.email}
`;

  fs.writeFile('readme-gen.md', markdownLiteral, (error) =>
    error ? console.error(error) : console.log('committed!')
  );
});



    
    // inquirer.prompt({
    //     type: "input",
    //     name: "License",
    //     message: "What license would you like to use?",
    //     choices: [
    //       "Apache 2.0 License",
    //       "The MIT License",
    //       "The Artistic License 2.0",
    //       "DWTFYWT License",
    //       "Mozilla Public License 2.0",
    //       "Creative Commons License",
    //       "No License"
    //     ]
    //   }).then(answer => {
    //     handleLicenseSelection(answer.license)
    //   });
      
    //   function handleLicenseSelection(licenseSelection) {
    //     switch (licenseSelection) {
    //       case "Apache 2.0 License":
    //         chooseApacheLicense();
    //         break;
    //       case "The MIT License":
    //         chooseMITLicense();
    //         break;
    //       case "The Artistic License 2.0":
    //         chooseArtisticLicense();
    //         break;
    //       case "DWTFYWT License":
    //         chooseDWTFYWTLicense();
    //         break;
    //       case "Mozilla Public License 2.0":
    //         chooseMozillaLicense();
    //         break;
    //       case "Creative Commons License":
    //         chooseCCLicense();
    //         break;
    //       case "No License":
    //         chooseNoLicense();
    //         break;
      
    //       default:
    //         console.log("I don't know what you picked!");
    //     }
    //   }
      
    //   function chooseApacheLicense({
        
    //   })