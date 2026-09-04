export const profile = {
  name: 'NIKHIL',
  firstName: 'Nikhil',
  shortLogo: 'NIKHIL AI/ML',
  title: 'AI/ML Full Stack Developer',
  headline: 'Building Intelligent Applications with Modern Full-Stack Technology',
  stackLine: 'React • JavaScript • Python • AI/ML',
  location: 'Noida, Delhi (NCR)',
  email: 'nikhilj5prime@gmail.com',
  phone: '8800868912',
  phoneHref: 'tel:+918800868912',
  github: 'https://github.com/nikhilcodesdev',
  githubLabel: 'nikhilcodesdev',
  company: 'Audax Labs Pvt. Ltd.',
  yearsExperience: 5,
  intro:
    'AI/ML Full Stack Developer with 5 years of experience designing, developing, and maintaining software applications. Strong in React.js, JavaScript, and Python, with hands-on work on AI/ML-powered search and content discovery platforms used in banking, investigations, and IoT environments.',
  about:
    'I build intelligent, scalable applications at the intersection of modern frontend engineering and AI/ML-powered search. At Audax Labs Pvt. Ltd., I contribute to production systems such as DataBeagle and Content Lens — platforms that combine React.js interfaces, RESTful APIs, and advanced search algorithms to improve content discovery and reduce manual information retrieval. I collaborate across product and engineering in Agile teams, with a focus on UI development, code quality, testing, and reliable production support.',
  tagline: 'Building intelligent applications with modern technology.',
  resumePath: '/Nikhil_Resume.pdf',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  {
    id: 'years',
    label: 'Years Experience',
    value: 5,
    suffix: '+',
    detail: 'Designing, developing, and maintaining software applications since September 2021.',
    icon: 'Timer',
  },
  {
    id: 'focus',
    label: 'Primary Focus',
    value: 'AI/ML Full Stack',
    numeric: false,
    detail: 'Intelligent search, content discovery, and modern full-stack product engineering.',
    icon: 'Brain',
  },
  {
    id: 'frontend',
    label: 'Frontend',
    value: 'React / JavaScript',
    numeric: false,
    detail: 'React.js, JavaScript, TypeScript, Redux, and component-driven UI development.',
    icon: 'Layout',
  },
  {
    id: 'backend',
    label: 'Backend',
    value: 'Python / APIs',
    numeric: false,
    detail: 'Python, FastAPI, Django, RESTful APIs, and microservices-oriented delivery.',
    icon: 'Server',
  },
  {
    id: 'aiml',
    label: 'AI/ML',
    value: 'Search / NLP / RAG',
    numeric: false,
    detail: 'AI/ML-powered search, NLP-based content discovery, semantic search, and RAG workflows.',
    icon: 'Sparkles',
  },
]

export const highlights = [
  '5 years building production software',
  'React.js, JavaScript, and Python',
  'AI/ML-powered search applications',
  'Content discovery platforms',
  'Scalable UI and API integration',
  'Cross-functional Agile collaboration',
]

export const engineeringFlow = [
  { id: 'query', label: 'User Query' },
  { id: 'app', label: 'Application' },
  { id: 'ai', label: 'AI / NLP' },
  { id: 'search', label: 'Search / Retrieval' },
  { id: 'response', label: 'Response' },
]

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nikhil',
  jobTitle: 'AI/ML Full Stack Developer',
  email: 'mailto:nikhilj5prime@gmail.com',
  telephone: '+91-8800868912',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Noida',
    addressRegion: 'Delhi (NCR)',
    addressCountry: 'IN',
  },
  url: 'https://github.com/nikhilcodesdev',
  sameAs: ['https://github.com/nikhilcodesdev'],
  worksFor: {
    '@type': 'Organization',
    name: 'Audax Labs Pvt. Ltd.',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Bengal College of Engineering and Technology',
  },
  knowsAbout: [
    'React.js',
    'JavaScript',
    'Python',
    'AI/ML-powered search',
    'NLP',
    'RAG',
    'Content discovery',
  ],
}
