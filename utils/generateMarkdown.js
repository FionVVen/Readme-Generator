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

  # ${data.title}
>## Description
 ${data.description}

## Table of contents
* [Description](#Description)
* [Installation Instructions](#Installation-Instructions)
* [Usage Information](#Usage-Information)
* [Contributing](#Contributing)
* [Test Instructions](#Test-Instructions)

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)


## Installation Instructions
${data.installationInstructions}

## Usage Information
${data.usageInformation}

## Contributing
${data.contributionGuidelines}

## Test Instructions
${data.testInstructions}

## Questions

* GitHub username: ${data.githubUsername}
* [Github Link](https://github.com/${data.githubUsername}/)
* Email Address: ${data.email}

## Code Examples
Show examples of usage:
"put-your-code-here"

## General info
Add more general information about project. What the purpose of the project is? Motivation?

## Screenshots
![Example screenshot](./img/screenshot.png)

## Technologies
* Tech 1 - version 1.0
* Tech 2 - version 2.0
* Tech 3 - version 3.0

## Features
List of features ready and TODOs for future development
* Awesome feature 1
* Awesome feature 2
* Awesome feature 3

To-do list:
* Wow improvement to be done 1
* Wow improvement to be done 2

## Status
Project is: _in progress_, _finished_, _no longer continue_ and why?

## Inspiration
Add here credits. Project inspired by..., based on...

## Contact
Created by
`;
}

module.exports = generateMarkdown;
