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
                <mat-label>{{ contactData.form.nameLabel }}</mat-label>
                <input matInput type="text" required>
              </mat-form-field>
              
              <mat-form-field class="w-full">
                <mat-label>{{ contactData.form.emailLabel }}</mat-label>
                <input matInput type="email" required>
              </mat-form-field>
              
              <mat-form-field class="w-full">
                <mat-label>{{ contactData.form.subjectLabel }}</mat-label>
                <input matInput type="text" required>
              </mat-form-field>
              
              <mat-form-field class="w-full">
                <mat-label>{{ contactData.form.messageLabel }}</mat-label>
                <textarea matInput rows="5" required></textarea>
              </mat-form-field>
              
              <button mat-raised-button color="primary" class="w-full md:w-auto">
                {{ contactData.form.submitButton }}
              </button>
            </form>
          </div>
          
          <div class="md:w-1/2">
            <div class="bg-white p-8 rounded-lg shadow-sm h-full">
              <h3 class="text-xl font-semibold text-gray-800 mb-6">{{ contactData.contactInfo.title }}</h3>
              
              <div class="space-y-6">
                @for (info of contactData.contactInfo.items; track info.icon) {
                <div class="flex items-start">
                  <span class="material-icons primary-text text-2xl mr-4">{{ info.icon }}</span>
                  <div>
                    <h4 class="text-gray-600 font-medium">{{ info.label }}</h4>
                    <p class="text-gray-700">{{ info.value }}</p>
                  </div>
                </div>
                }
              </div>
              
              <div class="mt-8">
                <h4 class="text-gray-600 font-medium mb-4">{{ contactData.social.title }}</h4>
                <div class="flex space-x-4">
                  @for (social of contactData.social.links; track social.icon) {
                    <a [href]="social.link" 
                       [class]="'w-10 h-10 rounded-full ' + social.bgClass + ' flex items-center justify-center ' + social.textClass + ' hover:bg-opacity-80 transition'">
                      <span class="material-icons">{{ social.icon }}</span>
                    </a>
                  }
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
}
