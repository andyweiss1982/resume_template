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
  headingEmojis: {
    workExperience: {
      character: '👨‍💻',
      ariaLabel: 'computer-man',
    },
    educationExperience: {
      character: '👨‍🎓',
      ariaLabel: 'graduate-man',
    },
    skills: {
      character: '💪',
      ariaLabel: 'muscle',
    },
  },
  workExperiences: [
    {
      emoji: '🍔',
      ariaLabel: 'hamburger',
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
      ariaLabel: 'teacher',
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
      ariaLabel: 'graph',
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
      ariaLabel: 'handshake',
      institution: 'Consultant',
      dates: '2014 - present',
      details: [
        'Design and develop web and native applications for existing businesses and startups',
        'Work with clients to test and revise assumptions throughout application development',
      ],
    },
    {
      emoji: '🌱',
      ariaLabel: 'seedling',
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
      ariaLabel: 'globe',
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
      ariaLabel: 'notebook',
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
      ariaLabel: 'peace-sign',
      university: 'Georgetown University',
      school: 'Walsh School of Foreign Service',
      dates: '2000 - 2004',
      details: [
        'BSFS, Regional and Comparative Studies, Latin America',
        'Magna Cum Laude, Phi Beta Kappa',
      ],
    },
  ],
  skills: [
    {
      emoji: '🗣',
      ariaLabel: 'talking',
      dates: '1982 - present',
      skillone: 'Languages',
      skilltwo: 'Frameworks',
      details: [
        'React, Node, SQL, Python, Ruby, HTML, CSS, JavaScript, Serverless',
        'Native English, Advanced Spanish, Basic Portuguese',
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
const phoneLink = document.querySelector('li:nth-child(1) a');
phoneLink.href += data.phoneNumber;

const emailContainer = document.querySelector('#email');
emailContainer.textContent = data.email;
const emailLink = document.querySelector('li:nth-child(2) a');
emailLink.href += data.email;

const githubContainer = document.querySelector('#github-link');
githubContainer.textContent += data.githubHandle;
const githubLink = document.querySelector('li:nth-child(3) a');
githubLink.href += data.githubHandle;

const linkedInContainer = document.querySelector('#linkedin-link');
linkedInContainer.textContent += data.linkedInHandle;
const linkedInLink = document.querySelector('li:nth-child(4) a');
linkedInLink.href += data.linkedInHandle;

const workExperienceHeadingEmojiContainer = document.querySelector(
  "h2:nth-of-type(1) span[role='img']"
);
workExperienceHeadingEmojiContainer.textContent =
  data.headingEmojis.workExperience.character;
workExperienceHeadingEmojiContainer.setAttribute(
  'aria-label',
  data.headingEmojis.workExperience.ariaLabel
);
const educationalExperienceHeadingEmojiContainer = document.querySelector(
  "h2:nth-of-type(2) span[role='img']"
);
educationalExperienceHeadingEmojiContainer.textContent =
  data.headingEmojis.educationExperience.character;
educationalExperienceHeadingEmojiContainer.setAttribute(
  'aria-label',
  data.headingEmojis.educationExperience.ariaLabel
);
const skillsHeadingEmojiContainer = document.querySelector(
  "h2:nth-of-type(3) span[role='img']"
);
skillsHeadingEmojiContainer.textContent = data.headingEmojis.skills.character;
skillsHeadingEmojiContainer.setAttribute(
  'aria-label',
  data.headingEmojis.skills.ariaLabel
);

function renderWorkExperience(workExperience) {
  return `
  <div>
    <span class="date">${workExperience.dates}</span>
    <h3>
      <span role="img" aria-label="${workExperience.ariaLabel}">${
    workExperience.emoji
  }</span>
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
      <span role="img" aria-label="${educationalExperience.ariaLabel}">${
  educationalExperience.emoji
}</span>
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

function renderSkills(skill) {
  return `
  <div>
    <span class="date">${skill.dates}</span>
    <h3>
      <span role="img" aria-label="${skill.ariaLabel}">${skill.emoji}</span>
      ${skill.skillone}<span class="comma">,</span>
      <span class="light">${skill.skilltwo}</span>
    </h3>
    <ul>
    ${skill.details.map(detail => `<li>${detail}</li>`).join('')}
    </ul>
  </div>`;
}
const skillContainer = document.querySelector(`#skills`);
const eachSkillHTML = data.skills.map(renderSkills);
const allSkillsHTML = eachSkillHTML.join('');
skillContainer.innerHTML = allSkillsHTML;
