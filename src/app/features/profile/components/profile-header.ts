import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-profile-header',
  imports: [MatIconModule],
  template: `
    <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <mat-icon class="text-indigo-600 text-3xl">code</mat-icon>
            <span class="text-xl font-bold text-gray-800">John Doe</span>
          </div>
          
          <nav class="hidden md:flex space-x-8">
            <a href="#home" class="text-indigo-600 font-medium">Home</a>
            <a href="#about" class="text-gray-600 hover:text-indigo-600 transition">About</a>
            <a href="#skills" class="text-gray-600 hover:text-indigo-600 transition">Skills</a>
            <a href="#projects" class="text-gray-600 hover:text-indigo-600 transition">Projects</a>
            <a href="#contact" class="text-gray-600 hover:text-indigo-600 transition">Contact</a>
          </nav>
          
          <button class="md:hidden text-gray-600 focus:outline-none">
            <mat-icon class="text-3xl">menu</mat-icon>
          </button>
        </div>
      </div>
  `,
  styles: `
    mat-icon {
      color: #4f46e5 !important;
    }
    
    .text-indigo-600 mat-icon {
      color: #4f46e5 !important;
    }
  `
})
export class ProfileHeader {

}
