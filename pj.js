// Selecting form and output div
const form = document.getElementById('resumeForm');
const resumeOutput = document.getElementById('resumeOutput');

// Counters for dynamically adding fields 
let educationCount = 1;
let experienceCount = 1;

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const fullName = document.getElementById('fullName').value; 
    const email = document.getElementById('email').value; 
    const phone = document.getElementById('phone').value; 
    const address = document.getElementById('address').value; 
    const summary = document.getElementById('summary').value; 
    const skills = document.getElementById('skills').value; 
    const template = document.getElementById('templateSelect').value; 

    // Get education and experience values
    const educationEntries = [];
    for (let i = 1; i <= educationCount; i++) {
        const title = document.getElementById(`educationTitle${i}`).value;
        const institution = document.getElementById(`educationInstitution${i}`).value;
        const date = document.getElementById(`educationDate${i}`).value;
        educationEntries.push({ title, institution, date });
    }

    const experienceEntries = [];
    for (let i = 1; i <= experienceCount; i++) {
        const title = document.getElementById(`experienceTitle${i}`).value;
        const company = document.getElementById(`experienceCompany${i}`).value;
        const date = document.getElementById(`experienceDate${i}`).value;
        experienceEntries.push({ title, company, date });
    }

    // Generate HTML for the resume based on selected template
    let resumeHTML = '';
    if (template === 'template1') {
        resumeHTML = generateTemplate1(fullName, email, phone, address, summary, educationEntries, experienceEntries, skills);
    } else if (template === 'template2') {
        resumeHTML = generateTemplate2(fullName, email, phone, address, summary, educationEntries, experienceEntries, skills);
    }
    // Add more templates as needed

    // Update the resumeOutput div with generated HTML
    resumeOutput.innerHTML = resumeHTML;
});

// Event listener for adding education fields
document.getElementById('addEducation').addEventListener('click', function() {
    educationCount++;
    const educationFields = document.getElementById('educationFields');
    const newEducationEntry = document.createElement('div');
    newEducationEntry.classList.add('educationEntry');
    newEducationEntry.innerHTML = `
        <label for="educationTitle${educationCount}">Title:</label>
        <input type="text" id="educationTitle${educationCount}" name="educationTitle${educationCount}">

        <label for="educationInstitution${educationCount}">Institution:</label>
        <input type="text" id="educationInstitution${educationCount}" name="educationInstitution${educationCount}">

        <label for="educationDate${educationCount}">Date:</label>
        <input type="text" id="educationDate${educationCount}" name="educationDate${educationCount}">
    `;
    educationFields.appendChild(newEducationEntry);
});

// Event listener for adding experience fields
document.getElementById('addExperience').addEventListener('click', function() {
    experienceCount++;
    const experienceFields = document.getElementById('experienceFields');
    const newExperienceEntry = document.createElement('div');
    newExperienceEntry.classList.add('experienceEntry');
    newExperienceEntry.innerHTML = `
        <label for="experienceTitle${experienceCount}">Title:</label>
        <input type="text" id="experienceTitle${experienceCount}" name="experienceTitle${experienceCount}">

        <label for="experienceCompany${experienceCount}">Company:</label>
        <input type="text" id="experienceCompany${experienceCount}" name="experienceCompany${experienceCount}">

        <label for="experienceDate${experienceCount}">Date:</label>
        <input type="text" id="experienceDate${experienceCount}" name="experienceDate${experienceCount}">
    `;
    experienceFields.appendChild(newExperienceEntry);
});

// Function to generate HTML for Template 1
function generateTemplate1(fullName, email, phone, address, summary, educationEntries, experienceEntries, skills) {
    let educationHTML = educationEntries.map(entry => `
        <div>
            <p><strong>${entry.title}</strong></p>
            <p>${entry.institution}</p>
            <p>${entry.date}</p>
        </div>
    `).join('');

    let experienceHTML = experienceEntries.map(entry => `
        <div>
            <p><strong>${entry.title}</strong></p>
            <p>${entry.company}</p>
            <p>${entry.date}</p>
        </div>
    `).join('');

    let resumeHTML = `
        <div class="resume template1">
            <h2>${fullName}</h2>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Address: ${address}</p>
            <p>Summary: ${summary}</p>

            <h3>Education</h3>
            ${educationHTML}

            <h3>Work Experience</h3>
            ${experienceHTML}

            <h3>Skills</h3>
            <p>${skills}</p>
        </div>
    `;
    return resumeHTML;
}

// Function to generate HTML for Template 2 (Add more templates if needed)
function generateTemplate2(fullName, email, phone, address, summary, educationEntries, experienceEntries, skills) {
    let educationHTML = educationEntries.map(entry => `
        <div class="template2-section">
            <h3>${entry.title}</h3>
            <p>${entry.institution}</p>
            <p>${entry.date}</p>
        </div>
    `).join('');

    let experienceHTML = experienceEntries.map(entry => `
        <div class="template2-section">
            <h3>${entry.title}</h3>
            <p>${entry.company}</p>
            <p>${entry.date}</p>
        </div>
    `).join('');

    let resumeHTML = `
        <div class="resume template2">
            <div class="template2-header">
                <h1>${fullName}</h1>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Address: ${address}</p>
            </div>

            <div class="template2-summary">
                <h2>Summary</h2>
                <p>${summary}</p>
            </div>

            <div class="template2-section">
                <h2>Education</h2>
                ${educationHTML}
            </div>

            <div class="template2-section">
                <h2>Work Experience</h2>
                ${experienceHTML}
            </div>

            <div class="template2-section">
                <h2>Skills</h2>
                <p>${skills}</p>
            </div>
        </div>
    `;
    return resumeHTML;
}
