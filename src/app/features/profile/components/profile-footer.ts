import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-footer',
  imports: [],
  template: `
    <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex items-center space-x-2 mb-4 md:mb-0">
            <span class="material-icons primary-text text-3xl">{{ footerData.icon }}</span>
            <span class="text-xl font-bold">{{ footerData.name }}</span>
          </div>
          
          <div class="text-gray-400 text-sm mb-4 md:mb-0">
            {{ footerData.copyright }}
          </div>
          
          <div class="flex space-x-6">
            @for (social of footerData.socialLinks; track social.icon) {
              <a [href]="social.link" 
                 [class]="'text-gray-400 hover:' + social.hoverClass + ' transition'">
                <span class="material-icons">{{ social.icon }}</span>
              </a>
            }
          </div>
        </div>
      </div>
  `,
  styles: ``
})
export class ProfileFooter {
  @Input() footerData: any;
}
