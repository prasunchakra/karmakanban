import { Component, OnInit } from '@angular/core';
import { ProfileHeader } from '../../components/profile-header';
import { ProfileHero } from '../../components/profile-hero';
import { ProfileAbout } from '../../components/profile-about';
import { ProfileSkill } from '../../components/profile-skill';
import { ProfileProject } from '../../components/profile-project';
import { ProfileContact } from '../../components/profile-contact';
import { ProfileFooter } from '../../components/profile-footer';
import { DynamicPortfolioComponent } from '../../../dynamic-portfolio/dynamic-portfolio.component';
import { PortfolioService } from '../../../../services/portfolio.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProfileData } from '../../../../types/portfolio';

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
    DynamicPortfolioComponent
  ],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio implements OnInit {
  portfolioData: ProfileData | null = null;
  currentProfile: string | null = null;
  loading = false;
  error = false;
  constructor(private portfolioService: PortfolioService, private route: ActivatedRoute,) {}
  ngOnInit() {
    // this.portfolioService.portfolioData$.subscribe(data => {
    //   this.hasUserPortfolio = data !== null;
    // });
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
