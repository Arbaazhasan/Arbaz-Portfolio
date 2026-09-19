import { Experience, Education, Achievement } from '../types';

export const experienceData: Experience[] = [
  {
    id: 'tothenew-trainee',
    role: 'Software Developer Trainee',
    company: 'To The New',
    location: 'Noida, Uttar Pradesh',
    period: 'January 2025 – April 2025',
    type: 'Internship / Full-Time Trainee',
    responsibilities: [
      'Developed and shipped scalable full-stack web application features utilizing React.js, Node.js, Express.js, and MongoDB.',
      'Enforced Model-View-Controller (MVC) architectural patterns for separation of concerns and maintainability.',
      'Designed, documented, and optimized RESTful API endpoints for internal microservices consumption.',
      'Conducted database query profiling in MongoDB to index hot collections and eliminate unindexed scans.',
      'Improved API response latency and reduced JSON data payload size through query projection and payload minification.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'MVC Architecture'],
    impactHighlights: [
      'Reduced API response latency through query optimization',
      'Minified payload sizes for enhanced client render speeds',
      'Engineered maintainable modular features under MVC standard',
    ],
  },
];

export const educationData: Education[] = [
  {
    id: 'mca-tmu',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Teerthanker Mahaveer University',
    location: 'Moradabad, Uttar Pradesh',
    period: 'August 2023 – June 2025',
    highlights: [
      'Advanced Computer Science, Distributed Computing, Advanced Database Systems',
      'Software Engineering Methodologies and Enterprise Cloud Architecture',
      'Active leadership in university technical hackathons and competitive engineering forums',
    ],
  },
  {
    id: 'bca-tmu',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Teerthanker Mahaveer University',
    location: 'Moradabad, Uttar Pradesh',
    period: 'August 2020 – June 2023',
    highlights: [
      'Core Programming Fundamentals, Data Structures & Algorithms, OOP Concepts',
      'Relational Database Management Systems (SQL) & Web Development',
      'Graduated with strong foundation in computing and systems programming',
    ],
  },
];

export const achievementsData: Achievement[] = [
  {
    id: 'college-hackathon-helpify',
    title: 'Second Place — College Hackathon',
    event: 'Annual University Tech Fest & Hackathon',
    organizer: 'Teerthanker Mahaveer University',
    period: 'College Technical Symposium',
    project: 'Helpify',
    description:
      'Spearheaded a team of engineers to conceptualize, design, and implement "Helpify" — an innovative QR-code utility platform providing instant campus assistance, contextual emergency dispatch, and resource directory access for students and faculty.',
    stats: '2nd Place among 30+ Competing Engineering Teams',
    badges: ['Team Lead', 'Full-Stack Architecture', 'QR Systems', 'Rapid Prototyping'],
  },
];
