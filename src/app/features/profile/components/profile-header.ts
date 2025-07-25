import { Component, OnInit, OnDestroy, HostListener, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-header',
  imports: [MatIconModule],
  template: `
    <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <mat-icon class="text-3xl header-icon">{{ headerData.icon }}</mat-icon>
            <span class="text-xl font-bold text-gray-800">{{ headerData.name }}</span>
          </div>
          
          <nav class="hidden md:flex space-x-8">
            @for (navItem of headerData.navigation; track navItem.id) {
              <a [href]="'#' + navItem.id"
                 [class]="getNavLinkClass(navItem.id)"
                 (click)="scrollToSection(navItem.id, $event)">
                {{ navItem.label }}
              </a>
            }
          </nav>
          <div class="flex items-center space-x-4">
            <button 
              (click)="navigateToPortfolio()"
              class="hidden md:flex items-center px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
              <mat-icon class="text-lg mr-1">arrow_back</mat-icon>
              Back to Gallery
            </button>
          </div>
        </div>
      </div>
  `,
  styles: `
    .header-icon {
      color: var(--primary-color);
    }
    
    .nav-link {
      transition: color 0.3s ease;
      color: #6b7280;
    }
    
    .nav-link.active {
      color: var(--primary-color);
      font-weight: 500;
    }
    
    .nav-link:hover {
      color: var(--primary-color);
    }
  `
})
export class ProfileHeader implements OnInit, OnDestroy {
  private activeSection = 'home';
  private sections = ['home', 'about', 'skills', 'projects', 'contact'];

  @Input() headerData: any;
  constructor(private router: Router) {}

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
    const baseClasses = 'nav-link';
    return this.activeSection === section 
      ? `${baseClasses} active` 
      : baseClasses;
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

  navigateToBuilder() {
    this.router.navigate(['/portfolio-builder']);
  }
  navigateToPortfolio() {
    this.router.navigate(['/portfolio']);
  }
}
