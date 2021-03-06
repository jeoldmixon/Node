// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    
# ${data.description}
    
# ${data.installation}
    
# ${data.usage}
    
# ${data.contrib}
    
# ${data.test}
    
# ${data.checkboxLicense}
    
# ${data.github}
    
# ${data.email}
    
    `;
}

module.exports = generateMarkdown;