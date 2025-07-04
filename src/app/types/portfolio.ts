import { INDUSTRIES_ENUM } from "./profile";

 export interface HeaderData {
  name: string;
  icon: string;
  mobileMenuIcon: string;
  navigation: {
    id: string;
    label: string;
  }[];
 }
 export interface HeroData {
  name: string;
  title: string;
  specialization: string;
  description: string;
  image: string;
  primaryButton: string;
  secondaryButton: string;
 }
  export interface AboutData {
    image: string;
    whoIAmDescription: string;
    additionalDescription: string;
    email: string;
    location: string;
    education: string;
  }
  export interface SkillData {
    title: string;
    description: string;
    categories: {
      title: string;
      icon: string;
      skills: string[];
    }[];
  }
  export interface ProjectData {
    title: string;
    description: string;
    demoText: string;
    sourceText: string;
    viewAllButton: string;
    projects: {
      title: string;
      description: string;
      technologies: string[];
      demoLink: string;
      sourceLink: string;
      image: string;
    }[];
  }
  export interface ContactData {
    title: string;
    description: string;
    form: {
      nameLabel: string;
      emailLabel: string;
      subjectLabel: string;
      messageLabel: string;
      submitButton: string;
    };
    contactInfo: {
      title: string;
      items: {
        icon: string;
        label: string;
        value: string;
      }[];
    };
    social: {
      title: string;
      links: {
        icon: string;
        label: string;
        link: string;
      }[];
    };
  }
  export interface FooterData {
    name: string;
    icon: string;
    copyright: string;
    socialLinks: {
      icon: string;
      link: string;
    }[];
  }
  export interface ProfileData {
    isPublic: boolean;
    industry: string;
    headerData: HeaderData;
    heroData: HeroData;
    aboutData: AboutData;
    skillData: SkillData;
    projectData: ProjectData;
    contactData: ContactData;
    footerData: FooterData;
  }

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
  