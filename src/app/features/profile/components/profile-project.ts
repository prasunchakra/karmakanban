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
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        @for (project of projectData.projects; track project.title) {
        <div class="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
          <!-- Project Header with Gradient -->
          <div class="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl font-bold">{{ project.title }}</h3>
              <span class="material-icons text-2xl opacity-80">code</span>
            </div>
            <div class="w-12 h-1 bg-white rounded-full opacity-60"></div>
          </div>
          
          <!-- Project Content -->
          <div class="p-6">
            <p class="text-gray-600 mb-6 leading-relaxed">
              {{ project.description }}
            </p>
            
            <!-- Technologies -->
            <div class="mb-6">
              <h4 class="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <span class="material-icons text-sm mr-2">build</span>
                Technologies
              </h4>
              <div class="flex flex-wrap gap-2">
                @for (tech of project.technologies; track tech) {
                <span class="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200">
                  {{ tech }}
                </span>
                }
              </div>
            </div>
            
            <!-- Action Buttons -->
            <div class="flex gap-3">
              <a [href]="project.demoLink" 
                 class="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center group-hover:shadow-md h-12">
                <span class="material-icons text-sm mr-2">visibility</span>
                {{ projectData.demoText }}
              </a>
              <a [href]="project.sourceLink" 
                 class="flex-1 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-all duration-200 flex items-center justify-center group-hover:shadow-md h-12">
                <span class="material-icons text-sm mr-2">code</span>
                {{ projectData.sourceText }}
              </a>
            </div>
          </div>
        </div>
        }
      </div>
    </div>
  `,
  styles: ``
})
export class ProfileProject {
  @Input() projectData: any;
}
