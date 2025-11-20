export type Locale = "en" | "es";

type PersonalInfo = {
  name: string;
  phone: string;
  city: string;
  email: string;
  idNumber: string;
  currentRole: string;
};

type Experience = {
  title: string;
  company: string;
  dates: string;
  location: string;
  bullets: string[];
};

type Education = {
  institution: string;
  title: string;
  location: string;
  dates: string;
  description: string;
  tags: string[];
};

type Technologies = {
  frontend: string[];
  backend: string[];
  other: string[];
};

type Language = {
  name: string;
  level: string;
};

type ProjectsSection = {
  title: string;
  description: string;
  note: string;
};

type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
};

type Navigation = {
  profile: string;
  experience: string;
  education: string;
  skills: string;
  projects: string;
  contact: string;
  contactCta: string;
};

export type Content = {
  welcome: string;
  nav: Navigation;
  hero: HeroContent;
  personalInfo: PersonalInfo;
  about: string;
  experience: Experience[];
  education: Education[];
  technologies: Technologies;
  languages: Language[];
  softSkills: string[];
  projects: ProjectsSection;
  certifications: string[];
  email: string;
  footer: string;
  projectNotFound: string;
};

const baseProfileES: PersonalInfo = {
  name: "Juan Daza",
  phone: "(593) 987 156 456",
  city: "Manta –  Ecuador",
  email: "jusedame@hotmail.com",
  idNumber: "1315354306",
  currentRole: "Estudiante de Ingeniería en Software (PUCESM)",
};

const baseProfileEN: PersonalInfo = {
  name: "Juan Daza",
  phone: "(593) 987 156 456",
  city: "Manta – Ecuador",
  email: "jusedame@hotmail.com",
  idNumber: "1315354306",
  currentRole: "Software Engineering Student (PUCESM)",
};

const experienceES: Experience[] = [
  {
    title: "Desarrollador & TICs — MedicalPluss",
    company: "MedicalPluss",
    dates: "2025 – Presente",
    location: "Manta, Ecuador",
    bullets: [
      "Desarrollo y mantenimiento de sistemas internos para la gestión médica.",
      "Implementación de mejoras y automatizaciones en los flujos de trabajo.",
      "Soporte en infraestructura tecnológica y despliegue de soluciones digitales.",
      "Colaboración con el equipo médico para adaptar el software a sus necesidades.",
    ],
  },
  {
    title: "Desarrollo web y software para consultorio dental",
    company: "Consultorio Dental (proyecto freelance)",
    dates: "2024 – 2025",
    location: "Manta, Ecuador",
    bullets: [
      "Creación de una página web moderna para un consultorio dental.",
      "Ajustes y mejoras en el software dental utilizado por el consultorio.",
      "Optimización de la experiencia de usuario y organización de la información.",
      "Integración básica con herramientas de agenda y contacto.",
    ],
  },
  {
    title: "Prácticas Preprofesionales — Hospital de Especialidades de Portoviejo",
    company: "Hospital de Especialidades de Portoviejo",
    dates: "2024",
    location: "Portoviejo, Ecuador",
    bullets: [
      "Desarrollo de un Print-Server para gestionar impresiones dentro del hospital.",
      "Integración del servidor de impresión con la red interna de la institución.",
      "Mejora en la eficiencia del flujo de documentos clínicos.",
      "Soporte técnico al personal en el uso de la nueva solución.",
    ],
  },
  {
    title: "Prácticas Preprofesionales — PUCESM",
    company: "Pontificia Universidad Católica del Ecuador Sede Manabí",
    dates: "2024",
    location: "Manta, Ecuador",
    bullets: [
      "Colaboración en proyectos internos de desarrollo de software.",
      "Soporte en mantenimiento de aplicaciones y herramientas académicas.",
      "Participación en pruebas, documentación y mejoras de sistemas.",
      "Trabajo en equipo con otros estudiantes y docentes.",
    ],
  },
  {
    title: "Ganador del concurso Dojo Code — PUCESM",
    company: "Pontificia Universidad Católica del Ecuador Sede Manabí (Dojo Code)",
    dates: "2024",
    location: "Manta, Ecuador",
    bullets: [
      "Ganador del concurso de programación Dojo Code durante la semana cultural.",
      "Resolución de desafíos de programación bajo presión de tiempo.",
      "Demostración de habilidades en lógica, algoritmos y buenas prácticas de código.",
    ],
  },
];

const experienceEN: Experience[] = [
  {
    title: "Developer & ICT — MedicalPluss",
    company: "MedicalPluss",
    dates: "2025 – Present",
    location: "Manta, Ecuador",
    bullets: [
      "Development and maintenance of internal medical management systems.",
      "Implementing workflow improvements and automations.",
      "Infrastructure support and deployment of digital solutions.",
      "Collaborating with medical staff to adapt software to their needs.",
    ],
  },
  {
    title: "Web & Software Development — Dental Office",
    company: "Consultorio Dental (freelance project)",
    dates: "2024 – 2025",
    location: "Manta, Ecuador",
    bullets: [
      "Built a modern website for a dental practice.",
      "Upgraded and improved the dental software used by the clinic.",
      "Enhanced user experience and information organization.",
      "Added basic integrations with scheduling and contact tools.",
    ],
  },
  {
    title: "Pre-professional Intern — Hospital de Especialidades de Portoviejo",
    company: "Hospital de Especialidades de Portoviejo",
    dates: "2024",
    location: "Portoviejo, Ecuador",
    bullets: [
      "Developed a print server to manage hospital printing.",
      "Integrated the server with the internal network.",
      "Improved the efficiency of clinical document flow.",
      "Provided technical support to staff using the new solution.",
    ],
  },
  {
    title: "Pre-professional Intern — PUCESM",
    company: "Pontificia Universidad Católica del Ecuador Sede Manabí",
    dates: "2024",
    location: "Manta, Ecuador",
    bullets: [
      "Collaborated on internal software development projects.",
      "Supported maintenance of academic apps and tools.",
      "Participated in testing, documentation, and system improvements.",
      "Worked closely with other students and professors.",
    ],
  },
  {
    title: "Dojo Code Contest Winner — PUCESM",
    company: "Pontificia Universidad Católica del Ecuador Sede Manabí",
    dates: "2024",
    location: "Manta, Ecuador",
    bullets: [
      "Winner of the Dojo Code programming contest during cultural week.",
      "Solved programming challenges under time pressure.",
      "Showcased skills in logic, algorithms, and clean code practices.",
    ],
  },
];

const educationES: Education[] = [
  {
    title: "Ingeniería en Software",
    institution: "Pontificia Universidad Católica del Ecuador Sede Manabí (PUCESM)",
    location: "Portoviejo, Ecuador",
    dates: "2022 – Presente",
    description:
      "Cursando la carrera de Ingeniería en Software, desarrollando habilidades en desarrollo web, backend, bases de datos, redes y arquitectura de software.",
    tags: ["Programación en Java", "Desarrollo Web", "Bases de Datos SQL", "Ingeniería de Software", "Redes de Computadoras"],
  },
  {
    title: "Programa de Intercambio en Ingeniería de Software",
    institution: "Universidad Europea del Atlántico",
    location: "España, Santander",
    dates: "2025 – 2025",
    description:
      "Intercambio académico enfocado en ampliar la visión internacional del desarrollo de software, metodologías ágiles y trabajo colaborativo en proyectos multiculturales.",
    tags: ["Metodologías Ágiles", "Trabajo Colaborativo", "Proyectos Internacionales", "Desarrollo Web"],
  },
  {
    title: "Bachiller en Ciencias",
    institution: "Colegio Talentos de Manta",
    location: "Manta, Ecuador",
    dates: "2022",
    description:
      "Formación en ciencias con énfasis en razonamiento lógico, matemáticas y bases para estudios en tecnología y software.",
    tags: ["Ciencias", "Matemáticas", "Lógica", "Tecnología"],
  },
];

const educationEN: Education[] = [
  {
    title: "Software Engineering",
    institution: "",
    location: "Portoviejo, Ecuador",
    dates: "2022 – Present",
    description:
      "Pursuing a Software Engineering degree, developing skills in web development, backend, databases, networks, and software architecture.",
    tags: ["Java Programming", "Web Development", "SQL Databases", "Software Engineering", "Computer Networks"],
  },
  {
    title: "Software Engineering Exchange Program",
    institution: "Universidad Europea del Atlántico",
    location: "Spain, Santander",
    dates: "2025 – 2025",
    description:
      "Academic exchange focused on expanding the international perspective of software development, agile methodologies, and collaborative work across multicultural teams.",
    tags: ["Agile Methodologies", "Collaborative Work", "International Projects", "Web Development"],
  },
  {
    title: "Science High School Diploma",
    institution: "Colegio Talentos de Manta",
    location: "Manta, Ecuador",
    dates: "2022",
    description:
      "Science-focused studies emphasizing logical reasoning, mathematics, and foundations for technology and software programs.",
    tags: ["Science", "Mathematics", "Logic", "Technology"],
  },
];

const technologies: Technologies = {
  frontend: ["React", "Next.js", "JavaScript", "HTML / CSS"],
  backend: ["Nest.js", "Express", "SQL", "Java", "Python"],
  other: ["Git / GitHub", "Diseño básico UI/UX"],
};

const certificationsES = [
  "CCNA: Introduction to Networks — Cisco Networking Academy (2024)",
  "Curso de Next.js — DevTalleres por Fernando Herrera (2025)",
  "Beca de Excelencia Académica (5 certificaciones) — PUCESM",
  "Beca de Intercambio a España — PUCESM",
  "Ganador concurso Dojo Code — PUCESM (Semana Cultural)",
];

const certificationsEN = [
  "CCNA: Introduction to Networks — Cisco Networking Academy (2024)",
  "Next.js Course — DevTalleres by Fernando Herrera (2025)",
  "Academic Excellence Scholarship (5 certificates) — PUCESM",
  "Exchange Scholarship to Spain — PUCESM",
  "Dojo Code Contest Winner — PUCESM (Cultural Week)",
];

const languagesES: Language[] = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "B1" },
];

const languagesEN: Language[] = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "B1" },
];

const softSkillsES = ["Liderazgo", "Comunicación efectiva", "Trabajo en equipo", "Resolución de problemas", "Toma de decisiones"];

const softSkillsEN = ["Leadership", "Effective communication", "Teamwork", "Problem solving", "Decision making"];

const projectsSectionES: ProjectsSection = {
  title: "Proyectos",
  description: "Este espacio está reservado para enlazar mis repositorios de GitHub u otros proyectos destacados.",
  note: "Pronto agregaré los enlaces y descripciones relevantes.",
};

const projectsSectionEN: ProjectsSection = {
  title: "Projects",
  description: "This space is reserved to link my GitHub repositories or other highlighted work.",
  note: "I will add detailed links and descriptions soon.",
};

export const translations: Record<Locale, Content> = {
  es: {
    welcome: "Bienvenido",
    nav: {
      profile: "Perfil",
      experience: "Experiencia",
      education: "Educación",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      contactCta: "Escríbeme →",
    },
    hero: {
      eyebrow: "Portafolio",
      title: "Hola, soy Juan Daza",
      subtitle: "Ingeniero en Software",
      description:
        "Desarrollo aplicaciones web modernas, escalables y centradas en el usuario. Me apasiona crear soluciones limpias, eficientes y bien estructuradas utilizando tecnologías actuales.",
      primaryCta: "Contactarme",
      secondaryCta: "Ver mi trabajo",
    },
    personalInfo: baseProfileES,
    about:
      "Soy un estudiante universitario de Ingeniería en Software en la Pontificia Universidad Católica del Ecuador Sede Manabí. Amante de la tecnología con interés en desarrollo web, backend, soluciones para el sector salud y sistemas digitales modernos. Me considero responsable, analítico y autodidacta.",
    experience: experienceES,
    education: educationES,
    technologies,
    languages: languagesES,
    softSkills: softSkillsES,
    projects: projectsSectionES,
    certifications: certificationsES,
    email: baseProfileES.email,
    footer: "© 2025 Juan Daza. Todos los derechos reservados.",
    projectNotFound: "Proyecto no encontrado.",
  },
  en: {
    welcome: "Welcome",
    nav: {
      profile: "Profile",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      contactCta: "Contact me →",
    },
    hero: {
      eyebrow: "Portfolio",
      title: "Hi, I'm Juan Daza",
      subtitle: "Software Engineer",
      description:
        "I build modern, scalable, user-centered web applications. I love crafting clean, efficient, and well-structured solutions using today’s technologies.",
      primaryCta: "Contact me",
      secondaryCta: "View my work",
    },
    personalInfo: baseProfileEN,
    about:
      "I am a Software Engineering student at Pontificia Universidad Católica del Ecuador, Manabí campus. I love technology in many areas with a focus on web development, backend, solution design, healthcare software and modern digital systems. I consider myself responsible, analytical and self-taught.",
    experience: experienceEN,
    education: educationEN,
    technologies,
    languages: languagesEN,
    softSkills: softSkillsEN,
    projects: projectsSectionEN,
    certifications: certificationsEN,
    email: baseProfileEN.email,
    footer: "© 2025 Juan Daza. All rights reserved.",
    projectNotFound: "Project not found.",
  },
};
