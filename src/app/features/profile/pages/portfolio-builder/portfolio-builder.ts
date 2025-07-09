import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
      isPublic: [{value: false, disabled: true}],
      industry: [INDUSTRIES_ENUM.Technology_Information_and_Media, Validators.required],
      heroData: this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
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
        professionalQualification: ['', Validators.required],
        academicQualification: ['', Validators.required],
        pronouns: ['', Validators.required],
        location: ['', Validators.required],
        image: ['', Validators.required]
      }),
      skillData: this.fb.group({
        title: ['My Skills'],
        description: ['', Validators.required],
        categories: this.fb.array([this.createSkillCategory()])
      }),
      projectData: this.fb.group({
        metadata: [''],
        projects: this.fb.array([this.createProjectItem()])
      }),
      contactData: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: [''],
        facebook: [''],
        instagram: [''],
        linkedin: [''],
        twitter: [''],
        github: [''],
        youtube: ['']
      }),
    });
  }

  ngOnInit() {
    
  }
  navigateToPortfolioGallery() {
    this.router.navigate(['/portfolio']);
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
  
  createSkillCategory(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      icon: ['', Validators.required],
      skills: this.fb.array([
        this.fb.control('', Validators.required),
        this.fb.control('', Validators.required),
        this.fb.control('', Validators.required)
      ])
    });
  }
  
  get categories(): FormArray {
    return this.portfolioForm.get('skillData.categories') as FormArray;
  }

  addCategory(): void {
    this.categories.push(this.createSkillCategory());
  }

  removeCategory(index: number): void {
    this.categories.removeAt(index);
  }

  getSkills(categoryIndex: number): FormArray {
    return this.categories.at(categoryIndex).get('skills') as FormArray;
  }

  addSkill(categoryIndex: number): void {
    this.getSkills(categoryIndex).push(this.fb.control('', Validators.required));
  }

  removeSkill(categoryIndex: number, skillIndex: number): void {
    this.getSkills(categoryIndex).removeAt(skillIndex);
  }

  // Project Methods
  createProjectItem(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      technologies: this.fb.array([
        this.fb.control('', Validators.required),
        this.fb.control('', Validators.required),
        this.fb.control('', Validators.required)
      ]),
      demoLink: ['', Validators.required],
      sourceLink: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  get projects(): FormArray {
    return this.portfolioForm.get('projectData.projects') as FormArray;
  }

  addProject(): void {
    this.projects.push(this.createProjectItem());
  }

  removeProject(index: number): void {
    this.projects.removeAt(index);
  }

  getTechnologies(projectIndex: number): FormArray {
    return this.projects.at(projectIndex).get('technologies') as FormArray;
  }

  addTechnology(projectIndex: number): void {
    this.getTechnologies(projectIndex).push(this.fb.control('', Validators.required));
  }

  removeTechnology(projectIndex: number, techIndex: number): void {
    this.getTechnologies(projectIndex).removeAt(techIndex);
  }

  // Social Links Methods
  createSocialLink(): FormGroup {
    return this.fb.group({
      icon: ['', Validators.required],
      label: ['', Validators.required],
      link: ['', Validators.required]
    });
  }

  get socialLinks(): FormArray {
    return this.portfolioForm.get('contactData.social.links') as FormArray;
  }

  addSocialLink(): void {
    this.socialLinks.push(this.createSocialLink());
  }

  removeSocialLink(index: number): void {
    this.socialLinks.removeAt(index);
  }

  // Contact Info Methods
  createContactInfoItem(): FormGroup {
    return this.fb.group({
      icon: ['', Validators.required],
      label: ['', Validators.required],
      value: ['', Validators.required]
    });
  }

  get contactItems(): FormArray {
    return this.portfolioForm.get('contactData.contactInfo.items') as FormArray;
  }

  addContactItem(): void {
    this.contactItems.push(this.createContactInfoItem());
  }

  removeContactItem(index: number): void {
    this.contactItems.removeAt(index);
  }
}
