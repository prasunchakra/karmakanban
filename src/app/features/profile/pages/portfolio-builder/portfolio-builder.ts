import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-portfolio-builder',
  imports: [ReactiveFormsModule, MatSlideToggleModule, MatCardModule, MatTooltipModule],
  templateUrl: './portfolio-builder.html',
  styleUrl: './portfolio-builder.scss'
})
export class PortfolioBuilder { 
  portfolioForm: FormGroup;
  constructor(
    public fb: FormBuilder,
  ) {
    this.portfolioForm = this.fb.group({
      isPublic: [{value: false, disabled: true}],
    });
  }

  onSubmit() {
    console.log(this.portfolioForm.value);
  }
  
}
