import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-profile-hero',
  imports: [MatButtonModule],
  template: `
   <div class="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm <span class="text-indigo-600">John Doe</span>
          </h1>
          <h2 class="text-2xl md:text-3xl text-gray-600 mb-6">
            Junior Frontend Developer <span class="text-indigo-500">(Angular Specialist)</span>
          </h2>
          <p class="text-gray-600 mb-8 max-w-lg">
            I build beautiful, responsive web applications with modern JavaScript frameworks.
            Passionate about creating intuitive user experiences with clean, maintainable code.
          </p>
          <div class="flex space-x-4">
            <button mat-raised-button color="primary" class="!bg-indigo-600 !text-white">
              View My Work
            </button>
            <button mat-stroked-button color="primary" class="!border-indigo-600 !text-indigo-600">
              Contact Me
            </button>
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center">
          <div class="relative w-64 h-64 md:w-80 md:h-80">
            <div class="absolute inset-0 bg-indigo-100 rounded-full opacity-20"></div>
            <div class="absolute inset-4 border-4 border-indigo-200 rounded-full opacity-30"></div>
            <img src="images/JuniorFrontendDeveloper.png" 
                 alt="Developer portrait" 
                 class="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg">
          </div>
        </div>
      </div>
  `,
  styles: `
    .mat-raised-button {
      border-radius: 0.5rem;
      padding: 0.5rem 1.5rem;
      font-weight: 500;
      text-transform: none;
      transition: all 0.2s ease-in-out;
    }
    
    .mat-stroked-button {
      border-radius: 0.5rem;
      padding: 0.5rem 1.5rem;
      font-weight: 500;
      text-transform: none;
      transition: all 0.2s ease-in-out;
    }
  `
})
export class ProfileHero {

}
