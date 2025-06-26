import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ProfileService } from '../../services/profile.service';
import { ProfileSummary, INDUSTRIES } from '../../types/profile';

@Component({
  selector: 'app-profile-list-public',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
  ],
  templateUrl: './profile-list-public.html',
  styleUrl: './profile-list-public.scss',
})
export class ProfileListPublic {
  profiles: ProfileSummary[] = [];
  filteredProfiles: ProfileSummary[] = [];
  industries : string[] = INDUSTRIES;
  selectedIndustry: string = INDUSTRIES[0];
  loading = true;
  error = false;

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit() {
    this.loadProfiles();
  }

  loadProfiles() {
    this.loading = true;
    this.error = false;

    this.profileService.getPublicProfiles().subscribe({
      next: (profiles) => {
        this.profiles = profiles;
        this.filteredProfiles = profiles;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading profiles:', error);
        this.error = true;
        this.loading = false;
      },
    });
  }

  filterByIndustry(industry: string) {
    // TODO: Implement filter by industry
  }

  viewPortfolio(username: string) {
    this.router.navigate(['/portfolio', username]);
  }
}
