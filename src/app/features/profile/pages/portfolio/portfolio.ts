import { Component, OnInit } from '@angular/core';
import { ProfileHeader } from '../../components/profile-header';
import { ProfileHero } from '../../components/profile-hero';
import { ProfileAbout } from '../../components/profile-about';
import { ProfileSkill } from '../../components/profile-skill';
import { ProfileProject } from '../../components/profile-project';
import { ProfileContact } from '../../components/profile-contact';
import { ProfileFooter } from '../../components/profile-footer';
import { PortfolioService } from '../../../../services/portfolio.service';
import { ActivatedRoute } from '@angular/router';
import { ProfileData } from '../../../../types/portfolio';
import { HEADER_DATA } from '../../../../types/profile';

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
export class Portfolio implements OnInit {
  portfolioData: ProfileData | null = null;
  currentProfile: string | null = null;
  loading = false;
  error = false;
  constructor(private portfolioService: PortfolioService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      const username = paramMap.get('username');
      if (username) {
        this.currentProfile = username;
        this.loadProfileData(username);
      }
    });
  }

  loadProfileData(username: string) {
    this.loading = true;
    this.error = false;
    this.portfolioService.getProfileData(username).subscribe({
      next: (data) => {
        if (data) {
          this.portfolioData = this.mapProfileData(data);
          this.currentProfile = username;
          this.loading = false;
          console.log(this.portfolioData);
        } else {
          this.error = true;
          this.loading = false;
          console.error(`Profile not found for username: ${username}`);
        }
      },
      error: (error) => {
        this.error = true;
        this.loading = false;
        console.error('Error loading profile data:', error);
      }
    });
  }
  mapProfileData(profileData: ProfileData): ProfileData {
    return {
      isPublic: profileData.isPublic,
      industry: profileData.industry,
      headerData: {
        ...HEADER_DATA,
        name: `${profileData.heroData.firstName} ${profileData.heroData.lastName}`,
        icon: 'person',
      },
      heroData: {
        name: `${profileData.heroData.firstName} ${profileData.heroData.lastName}`,
        firstName: profileData.heroData.firstName,
        lastName: profileData.heroData.lastName,
        title: profileData.heroData.title,
        specialization: profileData.heroData.specialization,
        description: profileData.heroData.description,
        image: profileData.heroData.image,
        primaryButton: profileData.heroData.primaryButton,
        secondaryButton: profileData.heroData.secondaryButton,
      },
      aboutData: {
        name: `${profileData.heroData.firstName} ${profileData.heroData.lastName}`,
        whoIAmDescription: profileData.aboutData.whoIAmDescription,
        additionalDescription: profileData.aboutData.additionalDescription,
        professionalQualification: profileData.aboutData.professionalQualification,
        academicQualification: profileData.aboutData.academicQualification,
        image: profileData.aboutData.image,
        pronouns: profileData.aboutData.pronouns,
        location: profileData.aboutData.location, 
      },
      skillData: {
        title: profileData.skillData.title,
        description: profileData.skillData.description,
        categories: profileData.skillData.categories,
      },
      projectData: {
        description: profileData.projectData.description,
        projects: profileData.projectData.projects,
      },
      contactData: {
        email: profileData.contactData.email,
        phoneNumber: profileData.contactData.phoneNumber,
        facebook: profileData.contactData.facebook,
        linkedin: profileData.contactData.linkedin,
        twitter: profileData.contactData.twitter,
        github: profileData.contactData.github,
      },
      footerData: {
        name:`${profileData.heroData.firstName} ${profileData.heroData.lastName}`,
        icon: 'person',
        copyright: `© ${new Date().getFullYear()} ${profileData.heroData.firstName} ${profileData.heroData.lastName}. All rights reserved.`,
      },
    }
  }
}
