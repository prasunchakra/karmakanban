import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-profile-contact',
  imports: [MatFormFieldModule,MatInputModule,MatButtonModule],
  template: `
     <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-4">Get In Touch</h2>
        <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>
        
        <div class="flex flex-col md:flex-row gap-12">
          <div class="md:w-1/2">
            <form class="space-y-6">
              <mat-form-field class="w-full">
                <mat-label>Your Name</mat-label>
                <input matInput type="text" required>
              </mat-form-field>
              
              <mat-form-field class="w-full">
                <mat-label>Your Email</mat-label>
                <input matInput type="email" required>
              </mat-form-field>
              
              <mat-form-field class="w-full">
                <mat-label>Subject</mat-label>
                <input matInput type="text" required>
              </mat-form-field>
              
              <mat-form-field class="w-full">
                <mat-label>Your Message</mat-label>
                <textarea matInput rows="5" required></textarea>
              </mat-form-field>
              
              <button mat-raised-button color="primary" class="!bg-indigo-600 !text-white w-full md:w-auto">
                Send Message
              </button>
            </form>
          </div>
          
          <div class="md:w-1/2">
            <div class="bg-white p-8 rounded-lg shadow-sm h-full">
              <h3 class="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              
              <div class="space-y-6">
                <div class="flex items-start">
                  <span class="material-icons text-indigo-600 text-2xl mr-4">email</span>
                  <div>
                    <h4 class="text-gray-600 font-medium">Email</h4>
                    <p class="text-gray-700">john&#64;example.com</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <span class="material-icons text-indigo-600 text-2xl mr-4">phone</span>
                  <div>
                    <h4 class="text-gray-600 font-medium">Phone</h4>
                    <p class="text-gray-700">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <span class="material-icons text-indigo-600 text-2xl mr-4">location_on</span>
                  <div>
                    <h4 class="text-gray-600 font-medium">Location</h4>
                    <p class="text-gray-700">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <div class="mt-8">
                <h4 class="text-gray-600 font-medium mb-4">Connect with me</h4>
                <div class="flex space-x-4">
                  <a href="#" class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition">
                    <span class="material-icons">code</span>
                  </a>
                  <a href="#" class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition">
                    <span class="material-icons">link</span>
                  </a>
                  <a href="#" class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition">
                    <span class="material-icons">alternate_email</span>
                  </a>
                  <a href="#" class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition">
                    <span class="material-icons">chat</span>
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

}
