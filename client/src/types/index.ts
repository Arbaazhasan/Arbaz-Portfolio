export type ThemeMode = 'light' | 'dark';

export interface ArchitectureNode {
  id: string;
  name: string;
  role: string;
  iconName: string;
  tech: string;
  details: string;
}

export interface ProcessingStep {
  step: number;
  title: string;
  description: string;
  badge: string;
}

export interface TechDecision {
  technology: string;
  reason: string;
  tradeoff: string;
}

export interface CaseStudyData {
  problemStatement: string;
  solutionOverview: string;
  architectureDescription: string;
  architectureNodes: ArchitectureNode[];
  technologyDecisions: TechDecision[];
  processingWorkflow: ProcessingStep[];
  realTimeCommunication: {
    overview: string;
    protocol: string;
    flow: string[];
  };
  challenges: {
    challenge: string;
    resolution: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  featuredBadge?: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  keyFeatures: string[];
  architectureHighlights: string[];
  githubUrl: string;
  liveUrl: string;
  caseStudy: CaseStudyData;
}

export interface SkillItem {
  name: string;
  level?: string;
  icon?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
  impactHighlights: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  organizer: string;
  period?: string;
  project: string;
  description: string;
  stats: string;
  badges: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  reason?: string;
  subject: string;
  message: string;
  company_fax?: string; // honeypot
  website_trap?: string; // honeypot
}
