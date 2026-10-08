export interface Certification {
  id: string;
  name: string;
  issuer: string;
  platform: string;
  year: string;
  description: string;
  credentialUrl?: string;
  topics: string[];
}

export const certifications: Certification[] = [
  {
    id: "google-ai-professional",
    name: "Google AI Professional Certificate",
    issuer: "Google",
    platform: "Coursera",
    year: "2026",
    description:
      "Comprehensive professional curriculum covering practical applications of artificial intelligence, foundational models, data prep, and ethical deployment of intelligent solutions.",
    credentialUrl: "/certificates/Google_AI_Certificate.pdf",
    topics: [
      "Artificial Intelligence",
      "Applied Machine Learning",
      "Ethical AI & Safety",
      "Model Evaluation",
    ],
  },
  {
    id: "google-data-analysis-python",
    name: "Google Data Analysis with Python Specialization",
    issuer: "Google",
    platform: "Coursera",
    year: "2026",
    description:
      "Rigorous technical specialization focusing on exploratory data analysis, data manipulation with pandas/NumPy, data cleaning pipelines, and statistical analysis using Python.",
    credentialUrl: "/certificates/Google_Data_Analysis_Specialization.pdf",
    topics: [
      "Python for Data Science",
      "pandas & NumPy",
      "Exploratory Data Analysis",
      "Statistical Insights",
    ],
  },
];
