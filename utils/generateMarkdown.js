// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseBadge = "";
  if (licenseBadge === "GNU GPLv3") {
    licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg";

  } else if (license === "ISC") {
    licenseBadge = "https://img.shields.io/badge/License-ISC-blue.svg";

  } else if (license === "Apache") {
    licenseBadge = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
  }

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink = "";
  if (license === "GNU GPLv3") {
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0";

  } else if (license === "ISC") {
    licenseLink = "https://opensource.org/licenses/ISC";

  } else if (license === "Apache") {
    licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
