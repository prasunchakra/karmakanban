import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-profile-about',
  imports: [MatButtonModule, MatIconModule],
  template: `
    <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">About Me</h2>
        
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div class="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
              <img src="images/JuniorFrontendDeveloper.png" 
                   alt="Working on laptop" 
                   class="w-full h-full object-cover">
            </div>
          </div>
          
          <div class="md:w-2/3 md:pl-12">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Who I Am</h3>
            <p class="text-gray-600 mb-6">
              I'm a passionate frontend developer specializing in Angular with 1.5 years of professional experience. 
              I love turning complex problems into simple, beautiful, and intuitive interface designs.
            </p>
            <p class="text-gray-600 mb-6">
              When I'm not coding, you'll find me contributing to open-source projects, learning new technologies, 
              or sharing my knowledge through tech blogs and tutorials.
            </p>
            
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="flex items-center">
                <span class="material-icons primary-text mr-2">person</span>
                <span class="text-gray-700">John Doe</span>
              </div>
              <div class="flex items-center">
                <span class="material-icons primary-text mr-2">email</span>
                <span class="text-gray-700">john&#64;example.com</span>
              </div>
              <div class="flex items-center">
                <span class="material-icons primary-text mr-2">location_on</span>
                <span class="text-gray-700">Rocinha, Porto Verde, Brazil</span>
              </div>
              <div class="flex items-center">
                <span class="material-icons primary-text mr-2">school</span>
                <span class="text-gray-700">BSc Computer Science</span>
              </div>
            </div>
            
            <button mat-raised-button color="primary">
              <mat-icon class="mr-2">download</mat-icon>
              Download Resume
            </button>
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
  `
})
export class ProfileAbout {

}
