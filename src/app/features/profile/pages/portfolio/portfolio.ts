import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-portfolio',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule
  ],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {

}
