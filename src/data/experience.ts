export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  division: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  certificateUrl?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "vinix7-internship",
    role: "Artificial Intelligence Intern",
    company: "Vinix7",
    division: "Artificial Intelligence Division",
    period: "August 2026 – September 2026",
    location: "Indonesia",
    type: "Internship",
    summary:
      "Contributed to the development of RoadDamage-AI, an applied computer vision project focused on automated road surface damage analysis.",
    responsibilities: [
      "Contributed directly to the RoadDamage-AI codebase, applying computer vision models to identify pavement defects.",
      "Worked with standard AI/ML development workflows spanning dataset preparation, model evaluation, and web service integration.",
      "Collaborated within an internship team environment and utilized Git and GitHub for version control and peer code reviews.",
    ],
    technologies: [
      "Python",
      "Computer Vision",
      "Machine Learning",
      "Git",
      "GitHub",
      "Web Integration",
    ],
    certificateUrl: "/certificates/Vinix_Internship_Certificate.pdf",
  },
];
