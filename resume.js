const data = {
  name: 'Andy Weiss',
  mainEmoji: {
    character: '👋',
    ariaLabel: 'wave',
  },
  phoneNumber: '305.710.4925',
  email: 'andyweiss1982@gmail.com',
  githubHandle: 'andyweiss1982',
  linkedInHandle: 'andyweiss',
  workExperiences: [
    {
      emoji: '🍔',
      jobTitle: 'Software Engineer',
      institution: 'Restaurant Brands International',
      dates: '2020 - present',
      details: [
        'Write frontend and backend code for Burger King, Popeyes and Tim Hortons web and mobile applications',
        'Teach internal web development bootcamp',
        "Manage company's technical blog",
      ],
    },
    {
      emoji: '👨‍🏫',
      jobTitle: 'Head Instructor',
      institution: 'Wyncode Academy',
      dates: '2018 - 2020',
      details: [
        'Taught course that prepares career changers for jobs in web development',
        'Developed curriculum focused on Git, HTML, CSS, JavaScript, React and Ruby on Rails',
        'Led activities focused on Agile best practices, Lean Startup and other soft skills',
      ],
    },
    {
      emoji: '📈',
      jobTitle: 'Lead Engineer',
      institution: 'Nuro Retention',
      dates: '2015 - 2018',
      details: [
        'Led development teams for student retention platform to mitigate dropout risk',
        'Translated business requirements from stakeholders into acceptance criteria',
        'Built integrations with learning management systems and school information systems',
      ],
    },
    {
      emoji: '🤝',
      jobTitle: 'Software Developer',
      institution: 'Consultant',
      dates: '2014 - present',
      details: [
        'Design and develop web and native applications for existing businesses and startups',
        'Work with clients to test and revise assumptions throughout application development',
      ],
    },
    {
      emoji: '🌱',
      jobTitle: 'Founder',
      institution: 'Weiss Tutoring and College Planning',
      dates: '2008 - 2014',
      details: [
        'Established independent test prep and college counseling practice',
        'Prepared students for SAT and ACT exams with individual and group tutoring',
      ],
    },
    {
      emoji: '🌎',
      jobTitle: 'Lead Teacher',
      institution: 'Miami-Dade County Public Schools',
      dates: '2004 - 2011',
      details: [
        'Scholars Academy Lead Teacher and IB Coordinator at Miami Beach Senior High',
        'Global Studies Academy Lead Teacher at Brownsville Middle School',
        'Taught Journalism, World History, and SAT/ACT prep',
      ],
    },
  ],
  educationalExperiences: [
    {
      emoji: '📓',
      university: 'Harvard University',
      school: 'Graduate School of Education',
      dates: '2006 - 2007',
      details: [
        'Ed. M. Teaching and Curriculum, Social Studies',
        'Urban Scholars Fellow',
      ],
    },
    {
      emoji: '✌️',
      university: 'Georgetown University',
      school: 'Walsh School of Foreign Service',
      dates: '2000 - 2004',
      details: [
        'BSFS, Regional and Comparative Studies, Latin America',
        'Magna Cum Laude, Phi Beta Kappa',
      ],
    },
  ],
};

document.title = data.name;

const name = document.querySelector('#name');
name.textContent = data.name;

const emojiContainer = document.querySelector('h1 span[role="img"]');
emojiContainer.textContent = data.mainEmoji.character;
emojiContainer.setAttribute('aria-label', data.mainEmoji.ariaLabel);

const phoneNumberContainer = document.querySelector('#phone-number');
phoneNumberContainer.textContent = data.phoneNumber;

const emailContainer = document.querySelector('#email');
emailContainer.textContent = data.email;

const githubContainer = document.querySelector('#github-link');
githubContainer.textContent += data.githubHandle;

const linkedInContainer = document.querySelector('#linkedin-link');
linkedInContainer.textContent += data.linkedInHandle;

function renderWorkExperience(workExperience) {
  return `
  <div>
    <span class="date">${workExperience.dates}</span>
    <h3>
      <span role="img" aria-label="">${workExperience.emoji}</span>
      ${workExperience.jobTitle}<span class="comma">,</span>
      <span class="light">${workExperience.institution}</span>
    </h3>
    <ul>
      ${workExperience.details.map(detail => `<li>${detail}</li>`).join('')}
    </ul>
  </div>`;
}

const workExperienceContainer = document.querySelector('#work-experience');
const eachWorkExperienceHTML = data.workExperiences.map(renderWorkExperience);
const allWorkExperiencesHTML = eachWorkExperienceHTML.join('');
workExperienceContainer.innerHTML = allWorkExperiencesHTML;

const renderEducationalExperience = educationalExperience => `
  <div>
    <span class="date">${educationalExperience.dates}</span>
    <h3>
      <span role="img" aria-label="">${educationalExperience.emoji}</span>
      ${educationalExperience.university}<span class="comma">,</span>
      <span class="light">${educationalExperience.school}</span>
    </h3>
    <ul>
      ${educationalExperience.details
        .map(detail => `<li>${detail}</li>`)
        .join('')}
    </ul>
  </div>`;

const educationContainer = document.querySelector('#education');
const eachEducationalExperienceHTML = data.educationalExperiences.map(
  renderEducationalExperience
);
const allEducationalExperiencesHTML = eachEducationalExperienceHTML.join('');
educationContainer.innerHTML = allEducationalExperiencesHTML;
