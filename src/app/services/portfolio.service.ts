import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProfileData, ProfileSummary } from '../types/portfolio';

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    about: string;
    avatar?: string;
  };
  skills: Array<{
    name: string;
    level: number;
  }>;
  projects: Array<{
    title: string;
    description: string;
    technologies: string;
    link: string;
    image?: string;
  }>;
  experience: Array<{
    company: string;
    position: string;
    duration: string;
    description: string;
  }>;
  education: Array<{
    institution: string;
    degree: string;
    year: string;
    description: string;
  }>;
  social: {
    linkedin: string;
    github: string;
    twitter: string;
    website: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private portfolioDataSubject = new BehaviorSubject<PortfolioData | null>(null);
  public portfolioData$ = this.portfolioDataSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadPortfolioData();
  }

  getProfileData(username: string): Observable<ProfileData | null> {
    return this.http.get<any>('/data/profile.json').pipe(
      map(data => {
        if (data && data[username]) {
          return data[username] as ProfileData;
        }
        return null;
      }),
      catchError(error => {
        console.error('Error fetching profile data:', error);
        return of(null);
      })
    );
  }

  getPublicProfileSummaries(): Observable<ProfileSummary[]> {
    return this.http.get<any>('/data/profile.json').pipe(
      map(data => {
        if (data) {
          const publicProfiles: ProfileSummary[] = [];
          Object.keys(data).forEach(username => {
            const profile = data[username];
            publicProfiles.push({
              username: username,
              name: profile.headerData.name,
              title: profile.heroData.title,
              jobRole: profile.jobRole,
              description: profile.heroData.description,
              image: profile.heroData.image,
              lastLogin: profile.lastLogin || new Date(),
              industry: profile.industry
            });
          });
          return publicProfiles;
        }
        return [];
      }),
      catchError(error => {
        console.error('Error fetching all profile summaries:', error);
        return of([]);
      })
    );
  }

  private loadPortfolioData(): void {
    const storedData = localStorage.getItem('userPortfolio');
    if (storedData) {
      try {
        const data = JSON.parse(storedData);
        this.portfolioDataSubject.next(data);
      } catch (error) {
        console.error('Error parsing portfolio data:', error);
      }
    }
  }

  savePortfolioData(data: PortfolioData): void {
    localStorage.setItem('userPortfolio', JSON.stringify(data));
    this.portfolioDataSubject.next(data);
  }

  getPortfolioData(): PortfolioData | null {
    return this.portfolioDataSubject.value;
  }

  hasUserPortfolio(): boolean {
    return localStorage.getItem('userPortfolio') !== null;
  }

  clearPortfolioData(): void {
    localStorage.removeItem('userPortfolio');
    this.portfolioDataSubject.next(null);
  }
} 