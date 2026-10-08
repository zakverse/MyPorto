export interface PersonalInfo {
  name: string;
  role: string;
  focus: string[];
  bioHero: string;
  aboutParagraphs: string[];
  location: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  github: string;
  linkedin: string;
  photoUrl?: string;
  education: {
    institution: string;
    major: string;
    degree: string;
    period: string;
    gpa: string;
    details: string[];
  };
}

export const personalInfo: PersonalInfo = {
  name: "Dzaki Khothir",
  role: "Informatics Engineering Student",
  photoUrl: "/potoaing.jpeg",
  focus: ["AI / Machine Learning", "Software Engineering", "Backend & Systems"],
  bioHero:
    "Building practical software and AI solutions through machine learning, data, and modern web technologies.",
  aboutParagraphs: [
    "I am an Informatics Engineering student at Telkom University with a strong focus on artificial intelligence, machine learning, and software engineering. My work centers on bridging computational intelligence with practical, production-ready applications.",
    "Through academic coursework and hands-on internship experience, I build systems spanning computer vision models, data analysis pipelines, RESTful APIs, and full-stack web architectures. I work extensively with Python, Go, modern web frameworks, and machine learning toolkits.",
    "I prioritize clean engineering principles, reproducible model workflows, and pragmatic problem-solving over speculative complexity.",
  ],
  location: "Purwokerto, Indonesia",
  email: "dzaki.khothir123@gmail.com",
  phone: "082181576809",
  phoneFormatted: "+62 821-8157-6809",
  github: "https://github.com/zakverse",
  linkedin: "https://www.linkedin.com/in/dzaki-khothir-393b49315/",
  education: {
    institution: "Telkom University",
    major: "Informatics Engineering",
    degree: "Undergraduate (S1)",
    period: "2024 – Present",
    gpa: "3.65 / 4.00",
    details: [
      "Rigorous foundations in algorithms, data structures, discrete mathematics, and software engineering.",
      "Core focus on machine learning theory, computer vision systems, and applied backend engineering.",
      "Active GPA: 3.65 out of 4.00.",
    ],
  },
};
