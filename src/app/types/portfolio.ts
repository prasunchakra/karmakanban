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
  firstName: string;
  lastName: string;
  title: string;
  specialization: string;
  description: string;
  image: string;
  primaryButton: string;
  secondaryButton: string;
 }
  export interface AboutData {
    image: string;
    name: string;
    whoIAmDescription: string;
    additionalDescription: string;
    professionalQualification: string;
    academicQualification: string;
    pronouns: string;
    location: string;
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
    description: string;
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
    email: string;
    phoneNumber: string;
    facebook: string;
    linkedin: string;
    twitter: string;
    github: string;
  }
  export interface FooterData {
    name: string;
    icon: string;
    copyright: string;
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
  