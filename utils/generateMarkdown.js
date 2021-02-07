// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	console.log("renderLicenseBadge", license);
	if(license !== 'None') {
		return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
	}
	
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// return `#license`
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
	console.log(data);

  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  
>## Description
 ${data.description}

## Table of contents
* [Description](#Description)
* [Installation Instructions](#Installation-Instructions)
* [Usage Information](#Usage-Information)
* [Contributing](#Contributing)
* [Test Instructions](#Test-Instructions)
* [License](#License)
* [General info](#General-info)
* [Screenshots](#Screenshots)
* [Questions](#Questions)
* [Credits](#Credits)



## Installation Instructions
${data.installationInstructions}

## Usage Information
${data.usageInformation}

## Contributing
${data.contributionGuidelines}

## Test Instructions
${data.testInstructions}

## License

* [License](#${data.license})
This Project is licensed under ${data.license}

## Screenshots
![Example screenshot](${data.screenshot})

## Questions

### For further enquiries you can contact me via:

* GitHub username: ${data.githubUsername}
* [Github Link](https://github.com/${data.githubUsername}/)
* Email Address: ${data.email}


## General info
Add more detailed information about project. 


## Credits
* Created by: ${data.name}
### Resources used: 
*
*
`;
}

module.exports = generateMarkdown;
