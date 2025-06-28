export const INDUSTRIES : string[] = [
    'IT & Software Development', // Default industry
  ];
  
  export const PROFILE_SECTIONS : string[] = [
    'Home', // Active section by default
    'About',
    'Skills',
    'Projects',
    'Contact',
  ];
  
  export interface ProfileSummary {
    username: string;
    name: string;
    title: string;
    jobRole: string;
    description: string;
    image: string;
    lastLogin: Date;
    industry: string;
  }
  
  
  export interface ProfileData {
    isPublic?: boolean;
    category?: string;
    headerData: any;
    heroData: any;
    aboutData: any;
    skillData: any;
    projectData: any;
    contactData: any;
    footerData: any;
  }