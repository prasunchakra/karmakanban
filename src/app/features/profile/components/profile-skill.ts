import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-skill',
  imports: [],
  template: `
    <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-4">{{ skillData.title }}</h2>
        <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          {{ skillData.description }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (category of skillData.categories; track category.title) {
          <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <div class="flex items-center mb-4">
              <span class="material-icons primary-text text-4xl mr-3">{{ category.icon }}</span>
              <h3 class="text-xl font-semibold text-gray-800">{{ category.title }}</h3>
            </div>
            <div class="space-y-3">
              @for (skill of category.skills; track skill) {
              <div class="flex items-center">
                <div class="w-2 h-2 primary-bg rounded-full mr-2"></div>
                <span class="text-gray-700">{{ skill }}</span>
              </div>
              }
            </div>
            </div>
          }
        </div>
      </div>
  `,
  styles: ``
})
export class ProfileSkill {
  @Input() skillData: any;
}
