import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
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
            <a href="#home" 
               [class]="getNavLinkClass('home')"
               (click)="scrollToSection('home', $event)">
              Home
            </a>
            <a href="#about" 
               [class]="getNavLinkClass('about')"
               (click)="scrollToSection('about', $event)">
              About
            </a>
            <a href="#skills" 
               [class]="getNavLinkClass('skills')"
               (click)="scrollToSection('skills', $event)">
              Skills
            </a>
            <a href="#projects" 
               [class]="getNavLinkClass('projects')"
               (click)="scrollToSection('projects', $event)">
              Projects
            </a>
            <a href="#contact" 
               [class]="getNavLinkClass('contact')"
               (click)="scrollToSection('contact', $event)">
              Contact
            </a>
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
export class ProfileHeader implements OnInit, OnDestroy {
  private activeSection = 'home';
  private sections = ['home', 'about', 'skills', 'projects', 'contact'];

  ngOnInit() {
    this.updateActiveSection();
  }

  ngOnDestroy() {
    // Clean up if needed
  }

  @HostListener('window:scroll')
  onScroll() {
    this.updateActiveSection();
  }

  private updateActiveSection() {
    const scrollPosition = window.scrollY + 100; // Offset for header height

    for (const section of this.sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  getNavLinkClass(section: string): string {
    const baseClasses = 'transition duration-300';
    return this.activeSection === section 
      ? `${baseClasses} text-indigo-600 font-medium` 
      : `${baseClasses} text-gray-600 hover:text-indigo-600`;
  }

  scrollToSection(section: string, event: Event) {
    event.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
