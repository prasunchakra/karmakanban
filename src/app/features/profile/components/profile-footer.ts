import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-footer',
  imports: [],
  template: `
    <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex items-center space-x-2 mb-4 md:mb-0">
            <span class="material-icons primary-text text-3xl">code</span>
            <span class="text-xl font-bold">John Doe</span>
          </div>
          
          <div class="text-gray-400 text-sm mb-4 md:mb-0">
            © 2023 John Doe. All rights reserved.
          </div>
          
          <div class="flex space-x-6">
            <a href="#" class="text-gray-400 hover:primary-text transition">
              <span class="material-icons">facebook</span>
            </a>
            <a href="#" class="text-gray-400 hover:accent-text transition">
              <span class="material-icons">twitter</span>
            </a>
            <a href="#" class="text-gray-400 hover:primary-text transition">
              <span class="material-icons">linkedin</span>
            </a>
            <a href="#" class="text-gray-400 hover:accent-text transition">
              <span class="material-icons">github</span>
            </a>
          </div>
        </div>
      </div>
  `,
  styles: ``
})
export class ProfileFooter {

}
