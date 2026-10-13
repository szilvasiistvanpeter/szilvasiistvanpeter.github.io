import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import SchoolIcon from '@mui/icons-material/SchoolOutlined';

export const contactLinks = [
  {
    label: 'contacts.labels.email',
    href: 'mailto:szilvasipeter@protonmail.com',
    value: 'szilvasipeter@protonmail.com',
    icon: <EmailIcon />,
  },
  {
    label: 'contacts.labels.linkedin',
    href: 'https://www.linkedin.com/in/szilva/',
    value: 'linkedin.com/in/szilva',
    icon: <LinkedInIcon />,
  },
  {
    label: 'contacts.labels.github',
    href: 'https://github.com/szilvasiistvanpeter',
    value: 'github.com/szilvasiistvanpeter',
    icon: <GitHubIcon />,
  },
  {
    label: 'contacts.labels.phone',
    href: 'tel:+36307986829',
    value: '+36 30 798 6829',
    icon: <PhoneIcon />,
  },
];

export const jobs = [
  {
    company: 'Eszterházy Károly Katolikus Egyetem',
    role: 'jobs.roles.lecturer',
    period: '2026.02 – jelenleg',
    current: true,
    courses: ['jobs.courses.ai', 'jobs.courses.database', 'jobs.courses.nosql', 'jobs.courses.cloud'],
    tech: 'MongoDb, Neo4j, Python, Node.js, Azure, Terraform, PL SQL, GitHub Actions',
  },
  {
    company: 'Siemens',
    role: 'jobs.roles.senior_fullstack',
    period: '2025.11 – jelenleg',
    current: true,
    tech: 'React.js, Next.js, Hybrid Cloud (AWS)',
  },
  {
    company: 'Deutsche Telekom IT Solutions HU',
    role: 'jobs.roles.senior_fullstack',
    period: '2023.05 – 2025.11',
    tech: 'C#, TypeScript, Angular, Oracle',
  },
  {
    company: 'ALLWIN Informatika Kft.',
    role: 'jobs.roles.fullstack_eng',
    period: '2022.03 – 2023.05',
    tech: 'ASP.NET Core, Angular, ArcGIS Maps SDK',
  },
  {
    company: 'Accenture',
    role: 'jobs.roles.senior_eng',
    period: '2021.09 – 2022.03',
    tech: 'Savigent Platform, MES/MOM, AngularJS',
  },
  {
    company: 'evosoft Hungary Kft.',
    role: 'jobs.roles.software_eng_sm',
    period: '2018.08 – 2021.08',
    tech: 'React, .NET Core, Azure DevOps, Scrum',
  },
  {
    company: 'ZF Hungária Kft.',
    role: 'jobs.roles.prod_it',
    period: '2017.11 – 2018.08',
    tech: 'Siemens PLC, Profibus, Profinet, Ghost',
  },
  {
    company: 'Procter & Gamble Hyginett Kft.',
    role: 'jobs.roles.it_support',
    period: '2017.09 – 2017.11',
    tech: 'Szerver karbantartás, Avaya, ServiceNow',
  },
  {
    company: 'Tamiasz Kft.',
    role: 'jobs.roles.it_teacher',
    period: '2017.05 – 2017.08',
    tech: 'GINOP felnőttképzés, MS Office',
  },
  {
    company: 'Wigner Jenő Szakoktatási Kft.',
    role: 'jobs.roles.it_teacher',
    period: '2016.08 – 2017.08',
    tech: 'C#, OOP, CISCO CCNA',
  },
  {
    company: 'Robert Bosch Kft.',
    role: 'jobs.roles.trainee',
    period: '2015.06 – 2016.07',
    tech: 'C#, TSQL, DevExpress, TFS',
  },
];

export const education = [
  {
    period: '2025 – 2026',
    degree: 'education.degrees.msc_teacher',
    institution: 'Eszterházy Károly Katolikus Egyetem',
    description: 'education.descriptions.msc_teacher',
    icon: <SchoolIcon color="primary" />,
  },
  {
    period: '2022 – 2024',
    degree: 'education.degrees.msc_eng',
    institution: 'Miskolci Egyetem',
    description: 'education.descriptions.msc_eng',
    icon: <SchoolIcon color="primary" />,
  },
  {
    period: '2013 – 2016',
    degree: 'education.degrees.bsc_prog',
    institution: 'Eszterházy Károly Katolikus Egyetem',
    description: 'education.descriptions.bsc_prog',
    icon: <SchoolIcon color="primary" />,
  },
];

export const pages = [
  { name: 'nav.about', path: '/' },
  { name: 'nav.jobs', path: '/jobs' },
  { name: 'nav.schools', path: '/schools' },
  { name: 'nav.contact', path: '/contact' },
  { name: 'nav.project', path: '/project' },
];

export const techStack = [
  'React 18',
  'Material UI v6',
  'TypeScript',
  'GitHub Actions',
  'Prettier & ESLint',
  'MkDocs',
];
