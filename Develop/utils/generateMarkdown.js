
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
  ${renderLicenseBadge(data.license)}

  ## Description 🗒️
  \`\`\`
  ${data.description}
  \`\`\`

  ## Licenses 🪪
  \`\`\`
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  \`\`\`
  
  ## Installations 💻
  \`\`\`
  ${data.dependencies}
  \`\`\`

  ## How To Use ✍️
  \`\`\`
  ${data.use}
  \`\`\`

  ## Technologies Used 🤖
  \`\`\`
  ${data.tech}
  \`\`\`

  ## Contributors 🤖
  \`\`\`
  ${data.contributors}
  \`\`\`


  ## Author Info 🤸
  - GitHub: [${data.github}](https://github.com/${data.github}/)
  - Email:  ${data.email}
`;
}

module.exports = generateMarkdown;