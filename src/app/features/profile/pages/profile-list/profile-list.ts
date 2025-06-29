import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { PortfolioService } from '../../../../services/portfolio.service';
import { ProfileSummary } from '../../../../types/portfolio';

@Component({
  selector: 'app-profile-list',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './profile-list.html',
  styleUrl: './profile-list.scss'
})
export class ProfileList {
  loading = false;
  error = false;
  publicProfiles: ProfileSummary[] = [];
  constructor(private portfolioService: PortfolioService, private router: Router) {}

  ngOnInit() {
    this.loadProfiles();
  }

  loadProfiles() {
    this.loading = true;
    this.error = false;
    this.portfolioService.getPublicProfileSummaries().subscribe({
      next: (profiles: ProfileSummary[]) => {
        this.publicProfiles = profiles;
        this.loading = false;
      },
      error: (error) => {
        this.error = true;
        this.loading = false;
      },
    });
  }
  navigateToPortfolio(username: string) {
    this.router.navigate(['/portfolio', username]);
  }
  navigateToLandingPage() {
    this.router.navigate(['/']);
  }
  navigateToPortfolioBuilder() {
    this.router.navigate(['/portfolio-builder']);
  }
}
