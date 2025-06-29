import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [MatCardModule,MatIconModule,MatGridListModule,MatToolbarModule, MatButtonModule, MatCardModule, MatDividerModule, MatIconModule],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {
  constructor(private router: Router) {}

  navigateToPortfolio() {
    this.router.navigate(['/portfolio']);
  }

  navigateToPortfolioBuilder() {
    this.router.navigate(['/portfolio-builder']);
  }
}
