import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfileHeader } from '../../components/profile-header';
import { ProfileHero } from '../../components/profile-hero';
import { ProfileAbout } from '../../components/profile-about';
import { ProfileSkill } from '../../components/profile-skill';
import { ProfileProject } from '../../components/profile-project';
import { ProfileContact } from '../../components/profile-contact';
import { ProfileFooter } from '../../components/profile-footer';
import { ProfileService } from '../../services/profile.service';
import { ProfileData } from '../../types/profile';

@Component({
  selector: 'app-portfolio',
  imports: [
    CommonModule,
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
  loading = true;
  error = false;
  currentProfile: string = '';

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      const username = paramMap.get('username');
      if (username) {
        this.currentProfile = username;
        this.loadProfileData(username);
      }
    });
  }

  /**
   * Load profile data for the given username
   * @param username - The username to load profile for
   */
  loadProfileData(username: string) {
    this.loading = true;
    this.error = false;
    this.profileService.getProfileData(username).subscribe({
      next: (data) => {
        if (data) {
          this.portfolioData = data;
          this.currentProfile = username;
          this.loading = false;
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
}
