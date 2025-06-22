import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-profile-project',
  imports: [
    MatCardModule,
  ],
  template: `
    <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-4">Featured Projects</h2>
        <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project 1 -->
          <mat-card class="overflow-hidden hover:shadow-lg transition">
            <img mat-card-image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                 alt="Project screenshot">
            <mat-card-content>
              <h3 class="text-xl font-semibold text-gray-200 mb-2">Task Management App</h3>
              <p class="text-gray-100 mb-4">
                A productivity application built with Angular and Firebase that helps teams organize and prioritize work.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Angular</span>
                <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Firebase</span>
                <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">NgRx</span>
                <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Tailwind</span>
              </div>
            </mat-card-content>
            <mat-card-actions class="flex justify-between px-4 pb-4">
              <a href="#" class="text-indigo-600 hover:underline">View Demo</a>
              <a href="#" class="text-gray-600 hover:underline">Source Code</a>
            </mat-card-actions>
          </mat-card>
          
          <!-- Project 2 -->
          <mat-card class="overflow-hidden hover:shadow-lg transition">
            <img mat-card-image src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                 alt="Project screenshot">
            <mat-card-content>
              <h3 class="text-xl font-semibold text-gray-200 mb-2">E-commerce Dashboard</h3>
              <p class="text-gray-100 mb-4">
                Admin dashboard for e-commerce stores with analytics, product management, and order tracking.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Angular</span>
                <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Node.js</span>
                <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">MongoDB</span>
                <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Chart.js</span>
              </div>
            </mat-card-content>
            <mat-card-actions class="flex justify-between px-4 pb-4">
              <a href="#" class="text-indigo-600 hover:underline">View Demo</a>
              <a href="#" class="text-gray-600 hover:underline">Source Code</a>
            </mat-card-actions>
          </mat-card>
          
          <!-- Project 3 -->
          <mat-card class="overflow-hidden hover:shadow-lg transition">
            <img mat-card-image src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                 alt="Project screenshot">
            <mat-card-content>
              <h3 class="text-xl font-semibold text-gray-200 mb-2">Weather Forecast App</h3>
              <p class="text-gray-100 mb-4">
                Real-time weather application with 5-day forecast using OpenWeatherMap API and geolocation.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Angular</span>
                <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">RxJS</span>
                <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">API Integration</span>
                <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">PWA</span>
              </div>
            </mat-card-content>
            <mat-card-actions class="flex justify-between px-4 pb-4">
              <a href="#" class="text-indigo-600 hover:underline">View Demo</a>
              <a href="#" class="text-gray-600 hover:underline">Source Code</a>
            </mat-card-actions>
          </mat-card>
        </div>
        
        <div class="text-center mt-12">
          <button mat-stroked-button color="primary" class="!border-indigo-600 !text-indigo-600">
            View All Projects
          </button>
        </div>
      </div>
  `,
  styles: ``
})
export class ProfileProject {

}
