
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ""
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `* [License](#license-📛)`
    )
  }
  return ""
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
    `## License 📛 
    Copyright @ ${license}. All rights reserved.`
    )
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
