import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-profile-about',
  imports: [MatButtonModule],
  template: `
    <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">About Me</h2>
        
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div class="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
              <img [src]="aboutData.image" 
                   alt="Working on laptop" 
                   class="w-full h-full object-cover">
            </div>
          </div>
          
          <div class="md:w-2/3 md:pl-12">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Who I Am</h3>
            <p class="text-gray-600 mb-6">
              {{ aboutData.whoIAmDescription }}
            </p>
            <p class="text-gray-600 mb-6">
              {{ aboutData.additionalDescription }}
            </p>
            
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="flex items-center">
                <span class="material-icons primary-text mr-2">work</span>
                <span class="text-gray-700">{{ aboutData.professionalQualification }}</span>
              </div>
              <div class="flex items-center">
                <span class="material-icons primary-text mr-2">school</span>
                <span class="text-gray-700">{{ aboutData.academicQualification }}</span>
              </div>
            </div>
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
  @Input() aboutData: any;
}
