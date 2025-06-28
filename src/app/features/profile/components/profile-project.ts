import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-profile-project',
  imports: [
    MatCardModule,
    MatButtonModule,
  ],
  template: `
    <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-4">{{ projectData.title }}</h2>
        <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          {{ projectData.description }}
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (project of projectData.projects; track project.title) {
          <mat-card class="overflow-hidden hover:shadow-lg transition">
            <img mat-card-image [src]="project.image" [alt]="project.title">
            <mat-card-content>
              <h3 class="text-xl font-semibold text-gray-200 mb-2">{{ project.title }}</h3>
              <p class="text-gray-100 mb-4">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                @for (tech of project.technologies; track tech) {
                <span class="px-2 py-1 primary-light-bg primary-text text-xs rounded-full">
                  {{ tech }}
                </span>
                }
              </div>
            </mat-card-content>
            <mat-card-actions class="flex justify-between px-4 pb-4">
              <a [href]="project.demoLink" class="primary-text hover:underline">{{ projectData.demoText }}</a>
              <a [href]="project.sourceLink" class="text-gray-600 hover:underline">{{ projectData.sourceText }}</a>
            </mat-card-actions>
          </mat-card>
          }
        </div>
        
        <div class="text-center mt-12">
          <button mat-stroked-button color="accent">
            {{ projectData.viewAllButton }}
          </button>
        </div>
      </div>
  `,
  styles: ``
})
export class ProfileProject {
  @Input() projectData: any;
}
