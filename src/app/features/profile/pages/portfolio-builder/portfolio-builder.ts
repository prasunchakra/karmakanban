import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { INDUSTRIES, INDUSTRIES_ENUM } from '../../../../types/profile';
import { PortfolioService } from '../../../../services/portfolio.service';
import { Router } from '@angular/router';
import { FileUploadComponent } from '../../../../shared/components';

@Component({
  selector: 'app-portfolio-builder',
  imports: [
    ReactiveFormsModule, 
    MatSlideToggleModule, 
    MatCardModule, 
    MatTooltipModule, 
    MatIconModule, 
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FileUploadComponent
  ],
  templateUrl: './portfolio-builder.html',
  styleUrl: './portfolio-builder.scss'
})
export class PortfolioBuilder implements OnInit { 
  portfolioForm: FormGroup;
  
  // Array of industries for the dropdown
  industries = INDUSTRIES;

  constructor(
    public fb: FormBuilder,
    private portfolioService: PortfolioService,
    private router: Router
  ) {
    this.portfolioForm = this.fb.group({
      isPublic: [false],
      industry: [INDUSTRIES_ENUM.EIT, Validators.required],
      heroData: this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        title: ['', [Validators.required, Validators.minLength(1)]],
        specialization: ['', Validators.required],
        description: ['', Validators.required],
        image: ['', Validators.required],
        primaryButton: ['', Validators.required],
        secondaryButton: ['', Validators.required]
      }),
      aboutData: this.fb.group({
        whoIAmDescription: ['', Validators.required],
        additionalDescription: ['', Validators.required], 
        email: ['', [Validators.required, Validators.email]],
        location: ['', Validators.required],
        education: ['', Validators.required],
        image: ['', Validators.required]
      })
    });
  }

  ngOnInit() {
    console.log('Form initialized:', this.portfolioForm);
    console.log('Hero data group:', this.portfolioForm.get('heroData'));
    console.log('Hero name control:', this.portfolioForm.get('heroData.name'));
  }

  onSubmit() {
    console.log(this.portfolioForm.value);
    const profile = this.portfolioForm.value;
    this.portfolioService.saveProfile(profile);
    this.router.navigate(['/portfolio','currentUser']);
  }
  
  onImageUpload(imageUrl: string, formGroup: string) {
    this.portfolioForm.patchValue({
      [formGroup]: {
        ...this.portfolioForm.get(formGroup)?.value,
        image: imageUrl
      }
    });
  }
  
  resetForm() {
    this.portfolioForm.reset();
  }
  
}
