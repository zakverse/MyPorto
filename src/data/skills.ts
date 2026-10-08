export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for systems, backend services, and machine learning pipelines.",
    skills: ["Python", "Go", "PHP", "JavaScript"],
  },
  {
    title: "AI & Machine Learning",
    description: "Foundational and modern intelligent systems, computer vision, and neural models.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Data Analysis",
      "Exploratory Data Analysis",
      "LLM / Generative AI",
    ],
  },
  {
    title: "Frameworks & Libraries",
    description: "Backend microservices, web applications, and UI engineering toolkits.",
    skills: [
      "FastAPI",
      "Gin",
      "GORM",
      "Laravel",
      "Next.js",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    title: "Data Engineering & Analytics",
    description: "Relational persistence, numerical computing, and data manipulation libraries.",
    skills: ["MySQL", "pandas", "NumPy", "Jupyter Notebook"],
  },
  {
    title: "Developer Tools & Workflow",
    description: "Engineering environment, version control, containerization, and API testing.",
    skills: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Figma"],
  },
];
