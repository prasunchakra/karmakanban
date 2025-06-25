import { Component } from '@angular/core';
import { ProfileHeader } from '../../components/profile-header';
import { ProfileHero } from '../../components/profile-hero';
import { ProfileAbout } from '../../components/profile-about';
import { ProfileSkill } from '../../components/profile-skill';
import { ProfileProject } from '../../components/profile-project';
import { ProfileContact } from '../../components/profile-contact';
import { ProfileFooter } from '../../components/profile-footer';

@Component({
  selector: 'app-portfolio',
  imports: [
    ProfileHeader,
    ProfileHero,
    ProfileAbout,
    ProfileSkill,
    ProfileProject,
    ProfileContact,
    ProfileFooter,
  ],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {

  portfolioData = {
    headerData : {
      name: 'John Doe',
      icon: 'code',
      mobileMenuIcon: 'menu',
      navigation: [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
      ]
    },
    heroData :{
      name: 'John Doe',
      title: 'Junior Frontend Developer',
      specialization: 'Angular Specialist',
      description: 'I build beautiful, responsive web applications with modern JavaScript frameworks. Passionate about creating intuitive user experiences with clean, maintainable code.',
      image: 'images/JuniorFrontendDeveloper.png',
      primaryButton: 'View My Work',
      secondaryButton: 'Contact Me'
    },
    aboutData : {
      image: 'images/JuniorFrontendDeveloper.png',
      whoIAmDescription: 'I\'m a passionate frontend developer specializing in Angular with 1.5 years of professional experience. I love turning complex problems into simple, beautiful, and intuitive interface designs.',
      additionalDescription: 'When I\'m not coding, you\'ll find me contributing to open-source projects, learning new technologies, or sharing my knowledge through tech blogs and tutorials.',
      personalInfo: {
        name: 'John Doe',
        email: 'john@example.com',
        location: 'San Francisco, CA',
        education: 'BSc Computer Science'
      }
    },
    skillData : {
      title: 'My Skills',
      description: 'I\'ve worked with a variety of technologies in the web development world. Here are my core competencies.',
      categories: [
        {
          title: 'Frontend',
          icon: 'desktop_windows',
          skills: [
            'Angular (Advanced)',
            'TypeScript/JavaScript',
            'HTML5 & CSS3',
            'RxJS & NgRx',
            'Tailwind CSS',
            'Angular Material'
          ]
        },
        {
          title: 'Backend',
          icon: 'storage',
          skills: [
            'Node.js & Express',
            'RESTful APIs',
            'Firebase',
            'MongoDB',
            'PostgreSQL'
          ]
        },
        {
          title: 'Tools & Others',
          icon: 'settings',
          skills: [
            'Git & GitHub',
            'Jest & Jasmine',
            'Docker Basics',
            'Agile/Scrum',
            'Figma & Adobe XD'
          ]
        }
      ]
    },
    projectData :{
      title: 'Featured Projects',
      description: 'Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.',
      demoText: 'View Demo',
      sourceText: 'Source Code',
      viewAllButton: 'View All Projects',
      projects: [
        {
          title: 'Task Management App',
          description: 'A productivity application built with Angular and Firebase that helps teams organize and prioritize work.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          technologies: ['Angular', 'Firebase', 'NgRx', 'Tailwind'],
          demoLink: '#',
          sourceLink: '#'
        },
        {
          title: 'E-commerce Dashboard',
          description: 'Admin dashboard for e-commerce stores with analytics, product management, and order tracking.',
          image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          technologies: ['Angular', 'Node.js', 'MongoDB', 'Chart.js'],
          demoLink: '#',
          sourceLink: '#'
        },
        {
          title: 'Weather Forecast App',
          description: 'Real-time weather application with 5-day forecast using OpenWeatherMap API and geolocation.',
          image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          technologies: ['Angular', 'RxJS', 'API Integration', 'PWA'],
          demoLink: '#',
          sourceLink: '#'
        }
      ]
    },
    contactData : {
      title: 'Get In Touch',
      description: 'Have a project in mind or want to discuss potential opportunities? Feel free to reach out!',
      form: {
        nameLabel: 'Your Name',
        emailLabel: 'Your Email',
        subjectLabel: 'Subject',
        messageLabel: 'Your Message',
        submitButton: 'Send Message'
      },
      contactInfo: {
        title: 'Contact Information',
        items: [
          {
            icon: 'email',
            label: 'Email',
            value: 'john@example.com'
          },
          {
            icon: 'phone',
            label: 'Phone',
            value: '+1 (555) 123-4567'
          },
          {
            icon: 'location_on',
            label: 'Location',
            value: 'San Francisco, CA'
          }
        ]
      },
      social: {
        title: 'Connect with me',
        links: [
          {
            icon: 'code',
            link: '#',
            bgClass: 'primary-light-bg',
            textClass: 'primary-text'
          },
          {
            icon: 'link',
            link: '#',
            bgClass: 'accent-light-bg',
            textClass: 'accent-text'
          },
          {
            icon: 'alternate_email',
            link: '#',
            bgClass: 'primary-light-bg',
            textClass: 'primary-text'
          },
          {
            icon: 'chat',
            link: '#',
            bgClass: 'accent-light-bg',
            textClass: 'accent-text'
          }
        ]
      }
    },
    footerData : {
      name: 'John Doe',
      icon: 'code',
      copyright: '© 2023 John Doe. All rights reserved.',
      socialLinks: [
        {
          icon: 'facebook',
          link: '#',
          hoverClass: 'primary-text'
        },
        {
          icon: 'twitter',
          link: '#',
          hoverClass: 'accent-text'
        },
        {
          icon: 'linkedin',
          link: '#',
          hoverClass: 'primary-text'
        },
        {
          icon: 'github',
          link: '#',
          hoverClass: 'accent-text'
        }
      ]
    }
  }

}
