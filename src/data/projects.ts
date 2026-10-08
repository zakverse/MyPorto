export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  githubUrl: string;
  images: string[];
  featured: boolean;
  category: "AI / Computer Vision" | "Web Applications" | "Deep Learning";
}

export const projects: Project[] = [
  {
    id: "roaddamage-ai",
    title: "RoadDamage-AI",
    tagline: "Computer Vision System for Road Surface Damage Analysis",
    description:
      "AI-based web application for automated road defect identification and severity classification, developed during the Vinix7 internship program. Designed to streamline municipal infrastructure inspection through automated visual diagnostics.",
    highlights: [
      "Integrated computer vision pipeline for crack and pothole pattern identification",
      "Interactive web UI for defect inspection, image upload, and bounding box visualization",
      "Engineered during technical internship at Vinix7 AI Division",
    ],
    technologies: [
      "AI / Machine Learning",
      "Computer Vision",
      "Python",
      "Web Application",
      "Image Processing",
    ],
    githubUrl: "https://github.com/zakverse/RoadDamage_AI",
    images: ["/projects/RoadDamage1.png", "/projects/RoadDamage2.png"],
    featured: true,
    category: "AI / Computer Vision",
  },
  {
    id: "pneumovision-ai",
    title: "PneumoVision-AI",
    tagline: "Deep Learning Medical Imaging for Chest X-Ray Analysis",
    description:
      "Deep learning diagnostic assistance system developed to analyze chest radiograph (X-ray) images for pneumonia indicators. Utilizes convolutional architectures paired with a dedicated FastAPI backend service.",
    highlights: [
      "Deep learning classification pipeline trained on thoracic radiograph datasets",
      "FastAPI inference server with asynchronous endpoints for rapid analysis",
      "Structured output for clinical review support without speculative claims",
    ],
    technologies: [
      "Python",
      "Deep Learning",
      "Computer Vision",
      "FastAPI",
      "PyTorch / TensorFlow",
    ],
    githubUrl: "https://github.com/zakverse/PneumoVision_AI",
    images: [
      "/projects/Pneumonia1.png",
      "/projects/Pneumonia2.png",
      "/projects/Pneumonia3.png",
    ],
    featured: true,
    category: "Deep Learning",
  },
  {
    id: "fitness-app",
    title: "Fitness App (Rep Counter)",
    tagline: "Pose Estimation & Exercise Repetition Counter",
    description:
      "Computer vision-assisted fitness application that automates workout repetition tracking. Evaluates movement phases in real time to assist athletes and users with form discipline and training logs.",
    highlights: [
      "Real-time movement tracking and repetition counter using computer vision",
      "Interactive dashboard monitoring exercise volume and workout history",
      "Responsive web interface engineered for desktop and mobile screens",
    ],
    technologies: [
      "Computer Vision",
      "Python",
      "JavaScript",
      "Web Application",
      "Exercise Tracking",
    ],
    githubUrl: "https://github.com/zakverse/FITNESS-COUNTER-REPS-WEB",
    images: [
      "/projects/FitnessCounter1.png",
      "/projects/FitnessCounter2.png",
    ],
    featured: true,
    category: "AI / Computer Vision",
  },
  {
    id: "sinau-bareng",
    title: "Sinau Bareng",
    tagline: "Collaborative Learning & Educational Management Platform",
    description:
      "Collaborative educational platform engineered to facilitate peer-to-peer study sessions, academic material sharing, and structured discussion threads for students and educators.",
    highlights: [
      "Centralized study hub with resource sharing and category taxonomy",
      "Collaborative project engineering with Git version control",
      "Database-driven state management for user interactions and learning assets",
    ],
    technologies: [
      "Web Application",
      "PHP",
      "MySQL",
      "JavaScript",
      "Collaborative Learning",
    ],
    githubUrl: "https://github.com/wahyuuuwid/sinau-bareng",
    images: ["/projects/SinauBareng1.png"],
    featured: false,
    category: "Web Applications",
  },
  {
    id: "schoolverse",
    title: "SchoolVerse",
    tagline: "Administrative School Management System",
    description:
      "Comprehensive web application for institutional administration, academic scheduling, student record management, and faculty data coordination.",
    highlights: [
      "Relational database architecture for student rosters and gradebooks",
      "Role-based administrative views for school staff and teachers",
      "Modular backend architecture with clean separation of concerns",
    ],
    technologies: [
      "Web Application",
      "PHP",
      "MySQL",
      "HTML5 / CSS3",
      "School Management",
    ],
    githubUrl: "https://github.com/zakverse/SchoolVerse_-School-Management-System-",
    images: ["/projects/SchoolVerse1.png"],
    featured: false,
    category: "Web Applications",
  },
  {
    id: "batik-ai",
    title: "Batik-AI",
    tagline: "Machine Learning Classifier for Traditional Indonesian Batik",
    description:
      "Machine learning research project aimed at preserving cultural heritage through automated pattern recognition. Identifies and classifies traditional Indonesian batik motifs from textile imagery.",
    highlights: [
      "Feature extraction and image classification model for complex textile geometry",
      "Modular Python codebase for dataset preprocessing and evaluation runs",
      "Cultural preservation application through applied computer vision",
    ],
    technologies: [
      "AI / Machine Learning",
      "Computer Vision",
      "Image Classification",
      "Python",
    ],
    githubUrl: "https://github.com/zakverse/Batik-AI-",
    images: [], // Clean text-based project presentation (no fabricated screenshots)
    featured: false,
    category: "AI / Computer Vision",
  },
];
