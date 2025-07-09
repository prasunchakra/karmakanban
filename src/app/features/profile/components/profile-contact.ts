import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-profile-contact',
  imports: [MatFormFieldModule,MatInputModule,MatButtonModule],
  template: `
     <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-4">{{ contactData.title }}</h2>
        <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          {{ contactData.description }}
        </p>
        
        <div class="flex flex-col md:flex-row gap-12">
          <div class="md:w-1/2">
            <form class="space-y-6">
              <mat-form-field class="w-full">
                <mat-label>{{ contactLabels.name }}</mat-label>
                <input matInput type="text" required>
              </mat-form-field>
              
              <mat-form-field class="w-full">
                <mat-label>{{ contactLabels.email }}</mat-label>
                <input matInput type="email" required>
              </mat-form-field>
              
              <mat-form-field class="w-full">
                <mat-label>{{ contactLabels.subject }}</mat-label>
                <input matInput type="text" required>
              </mat-form-field>
              
              <mat-form-field class="w-full">
                <mat-label>{{ contactLabels.message }}</mat-label>
                <textarea matInput rows="5" required></textarea>
              </mat-form-field>
              
              <button mat-raised-button color="primary" class="w-full md:w-auto">
                {{ contactLabels.submit }}
              </button>
            </form>
          </div>
          
          <div class="md:w-1/2">
            <div class="bg-white p-8 rounded-lg shadow-sm h-full">
              <h3 class="text-xl font-semibold text-gray-800 mb-6">{{ contactLabels.contactInfo }}</h3>
              
              <div class="space-y-6">
                <div class="space-y-6">
                  <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <span class="material-icons text-blue-600">email</span>
                    <div>
                      <h4 class="text-gray-600 font-medium text-sm">Email</h4>
                      <p class="text-gray-700 font-medium">{{ contactData.email }}</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <span class="material-icons text-green-600">phone</span>
                    <div>
                      <h4 class="text-gray-600 font-medium text-sm">Phone</h4>
                      <p class="text-gray-700 font-medium">{{ contactData.phoneNumber }}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="mt-8">
                <h4 class="text-gray-600 font-medium mb-4">{{ contactLabels.social }}</h4>
                <div class="space-y-3">
                  <a href="{{ contactData.facebook }}" class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors duration-200">
                    <span class="material-icons text-xl">facebook</span>
                    <span class="text-sm font-medium">Facebook</span>
                    <span class="text-xs text-gray-500 ml-auto">{{ contactData.facebook.split('/').pop() }}</span>
                  </a>
                  <a href="{{ contactData.linkedin }}" class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg text-blue-400 hover:bg-blue-50 transition-colors duration-200">
                    <span class="material-icons text-xl">work</span>
                    <span class="text-sm font-medium">LinkedIn</span>
                    <span class="text-xs text-gray-500 ml-auto">{{ contactData.linkedin.split('/').pop() }}</span>
                  </a>
                  <a href="{{ contactData.twitter }}" class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg text-grey-200 hover:bg-blue-50 transition-colors duration-200">  
                    <span class="material-icons text-xl">chat</span>
                    <span class="text-sm font-medium">Twitter</span>
                    <span class="text-xs text-gray-500 ml-auto">{{ contactData.twitter.split('/').pop() }}</span>
                  </a>
                  <a href="{{ contactData.github }}" class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg text-black-400 hover:bg-blue-50 transition-colors duration-200">
                    <span class="material-icons text-xl">code</span>
                    <span class="text-sm font-medium">GitHub</span>
                    <span class="text-xs text-gray-500 ml-auto">{{ contactData.github.split('/').pop() }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `,
  styles: ``
})
export class ProfileContact {
  @Input() contactData: any;
  contactLabels = {
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    submit: 'Submit',
    contactInfo: 'Contact Information',
    social: 'Social Media Profiles',
  }
}
