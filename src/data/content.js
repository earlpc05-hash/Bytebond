// All site content lives here so the components stay clean.

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'members', label: 'Members' },
  { id: 'contact', label: 'Contact' },
]

export const EMAIL = 'bytebond2@gmail.com'

export const STATS = [
  { value: '02', label: 'Members' },
  { value: '06', label: 'Projects' },
  { value: '04', label: 'Languages' },
]

export const TECH = ['Python', 'JavaScript', 'HTML', 'CSS', 'React', 'OCR', 'OOP', 'Image Processing']

export const ABOUT = {
  why: 'ByteBond started from a shared interest in programming, technology, and learning together. We wanted a space where ideas can be shared and explored.',
  mission: 'To learn, collaborate, experiment, and develop our skills as aspiring IT professionals.',
  vision: 'To grow together by turning what we learn into creative and meaningful ideas.',
  values: ['Connection', 'Collaboration', 'Curiosity', 'Growth', 'Creativity'],
}

export const PROJECTS = [
  {
    id: 1,
    title: 'Library Management System',
    summary: 'A Python-based library management system created to practice programming concepts and system development.',
    category: 'Python',
    tags: ['Python', 'Library System'],
    authors: ['Azumi Gajutos'],
  },
  {
    id: 2,
    title: 'Bank Account Encapsulation',
    summary: 'A Python OOP project demonstrating encapsulation through a simple bank account program.',
    category: 'Python',
    tags: ['OOPROG', 'Python'],
    authors: ['Earl Kenneth Panuncial', 'Azumi Gajutos'],
  },
  {
    id: 3,
    title: 'Text Extractor',
    summary: 'A Python project that extracts text from images using optical character recognition.',
    category: 'Python',
    tags: ['Python', 'OCR'],
    authors: ['Earl Kenneth Panuncial', 'Azumi Gajutos'],
  },
  {
    id: 4,
    title: 'Pixel Maker',
    summary: 'A Python image project that creates a pixel-style version of an image.',
    category: 'Python',
    tags: ['Python', 'Image Processing'],
    authors: ['Earl Kenneth Panuncial', 'Azumi Gajutos'],
  },
  {
    id: 5,
    title: 'Background Remover',
    summary: 'A Python project that processes images and removes their backgrounds.',
    category: 'Python',
    tags: ['Python', 'Image Processing'],
    authors: ['Earl Kenneth Panuncial', 'Azumi Gajutos'],
  },
  {
    id: 6,
    title: 'Personal Portfolio',
    summary: 'A personal portfolio created for PLTECH using HTML, featuring GitHub and social media connections.',
    category: 'Web',
    tags: ['PLTECH', 'HTML'],
    authors: ['Earl Kenneth Panuncial', 'Azumi Gajutos'],
  },
]

export const PROJECT_FILTERS = ['All', 'Python', 'Web']

export const MEMBERS = [
  {
    id: 'earl',
    number: '01',
    name: 'Earl Kenneth Panuncial',
    role: 'Aspiring Game & Web Developer',
    bio: 'Interested in game development, web development, and programming.',
    skills: 'Problem-solving, basic software development, web development, creative thinking, programming fundamentals, and team collaboration.',
    tech: ['Python', 'JavaScript', 'HTML', 'CSS'],
    facebook: 'https://www.facebook.com/share/1PNPtb9up3/',
    github: 'https://github.com/earlpc05-hash',
  },
  {
    id: 'azumi',
    number: '02',
    name: 'Azumi Gajutos',
    role: 'Aspiring Web Developer',
    bio: 'Interested in programming, technology, learning, coding, and problem-solving.',
    skills: 'Basic web development, problem-solving, web design, creative thinking, programming fundamentals, and collaboration.',
    tech: ['HTML', 'CSS', 'Python', 'Basic JavaScript'],
    facebook: 'https://www.facebook.com/share/1DmKxCdy3V/',
    github: 'https://github.com/AzumiGajutos',
  },
]
