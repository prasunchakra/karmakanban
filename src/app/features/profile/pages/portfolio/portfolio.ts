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
import { HEADER_DATA, INDUSTRY_ICONS } from '../../../../types/profile';

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
  mapProfileData(profileData: ProfileData): any {
    return {
      headerData: {
        ...HEADER_DATA,
        name: profileData.heroData.name,
        icon: INDUSTRY_ICONS[profileData.industry as keyof typeof INDUSTRY_ICONS],
      },
      heroData: {
        name: profileData.heroData.name,
        title: profileData.heroData.title,
        specialization: profileData.heroData.specialization,
        description: profileData.heroData.description,
        image: profileData.heroData.image,
        primaryButton: profileData.heroData.primaryButton,
        secondaryButton: profileData.heroData.secondaryButton,
      },
      aboutData: {
        name: profileData.heroData.name,
        whoIAmDescription: profileData.aboutData.whoIAmDescription,
        additionalDescription: profileData.aboutData.additionalDescription,
        email: profileData.aboutData.email,
        location: profileData.aboutData.location,
        education: profileData.aboutData.education,
        image: profileData.aboutData.image,
      },
    }
  }
}
