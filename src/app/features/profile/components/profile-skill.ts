import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-skill',
  imports: [],
  template: `
    <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-4">My Skills</h2>
        <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          I've worked with a variety of technologies in the web development world. Here are my core competencies.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Frontend Skills -->
          <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <div class="flex items-center mb-4">
              <span class="material-icons primary-text text-4xl mr-3">desktop_windows</span>
              <h3 class="text-xl font-semibold text-gray-800">Frontend</h3>
            </div>
            <div class="space-y-3">
              <div class="flex items-center">
                <div class="w-2 h-2 primary-bg rounded-full mr-2"></div>
                <span class="text-gray-700">Angular (Advanced)</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 primary-bg rounded-full mr-2"></div>
                <span class="text-gray-700">TypeScript/JavaScript</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 primary-bg rounded-full mr-2"></div>
                <span class="text-gray-700">HTML5 & CSS3</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 primary-bg rounded-full mr-2"></div>
                <span class="text-gray-700">RxJS & NgRx</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 primary-bg rounded-full mr-2"></div>
                <span class="text-gray-700">Tailwind CSS</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 primary-bg rounded-full mr-2"></div>
                <span class="text-gray-700">Angular Material</span>
              </div>
            </div>
          </div>
          
          <!-- Backend Skills -->
          <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <div class="flex items-center mb-4">
              <span class="material-icons accent-text text-4xl mr-3">storage</span>
              <h3 class="text-xl font-semibold text-gray-800">Backend</h3>
            </div>
            <div class="space-y-3">
              <div class="flex items-center">
                <div class="w-2 h-2 accent-bg rounded-full mr-2"></div>
                <span class="text-gray-700">Node.js & Express</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 accent-bg rounded-full mr-2"></div>
                <span class="text-gray-700">RESTful APIs</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 accent-bg rounded-full mr-2"></div>
                <span class="text-gray-700">Firebase</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 accent-bg rounded-full mr-2"></div>
                <span class="text-gray-700">MongoDB</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 accent-bg rounded-full mr-2"></div>
                <span class="text-gray-700">PostgreSQL</span>
              </div>
            </div>
          </div>
          
          <!-- Other Skills -->
          <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <div class="flex items-center mb-4">
              <span class="material-icons primary-text text-4xl mr-3">settings</span>
              <h3 class="text-xl font-semibold text-gray-800">Tools & Others</h3>
            </div>
            <div class="space-y-3">
              <div class="flex items-center">
                <div class="w-2 h-2 primary-bg rounded-full mr-2"></div>
                <span class="text-gray-700">Git & GitHub</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 primary-bg rounded-full mr-2"></div>
                <span class="text-gray-700">Jest & Jasmine</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 primary-bg rounded-full mr-2"></div>
                <span class="text-gray-700">Docker Basics</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 primary-bg rounded-full mr-2"></div>
                <span class="text-gray-700">Agile/Scrum</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 primary-bg rounded-full mr-2"></div>
                <span class="text-gray-700">Figma & Adobe XD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  `,
  styles: ``
})
export class ProfileSkill {

}
