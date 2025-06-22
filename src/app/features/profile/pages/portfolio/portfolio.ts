import { Component } from '@angular/core';
import { ProfileHeader } from '../../components/profile-header';
import { ProfileHero } from '../../components/profile-hero';
import { ProfileAbout } from '../../components/profile-about';
import { ProfileSkill } from '../../components/profile-skill';
import { ProfileProject } from '../../components/profile-project';
import { ProfileContact } from '../../components/profile-contact';
import { ProfileFooter } from '../../components/profile-footer';

@Component({
  selector: 'app-portfolio',
  imports: [
    ProfileHeader,
    ProfileHero,
    ProfileAbout,
    ProfileSkill,
    ProfileProject,
    ProfileContact,
    ProfileFooter,
  ],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {

}
