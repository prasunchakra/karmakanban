import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProfileData, ProfileSummary } from '../types/portfolio';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor(private http: HttpClient) {}

  getProfileData(username: string): Observable<ProfileData | null> {
    if(username === 'currentUser') {
      return of(JSON.parse(localStorage.getItem('profile') || '{}'));
    }
    return this.http.get<any>('/data/profile.json').pipe(
      map((data) => {
        if (data && data[username]) {
          return data[username] as ProfileData;
        }
        return null;
      }),
      catchError((error) => {
        console.error('Error fetching profile data:', error);
        return of(null);
      })
    );
  }

  getPublicProfileSummaries(): Observable<ProfileSummary[]> {
    return this.http.get<any>('/data/profile.json').pipe(
      map((data) => {
        if (data) {
          const publicProfiles: ProfileSummary[] = [];
          Object.keys(data).forEach((username) => {
            const profile = data[username];
            publicProfiles.push({
              username: username,
              name: profile.headerData.name,
              title: profile.heroData.title,
              jobRole: profile.jobRole,
              description: profile.heroData.description,
              image: profile.heroData.image,
              lastLogin: profile.lastLogin || new Date(),
              industry: profile.industry,
            });
          });
          return publicProfiles;
        }
        return [];
      }),
      catchError((error) => {
        console.error('Error fetching all profile summaries:', error);
        return of([]);
      })
    );
  }

  saveProfile(profile: ProfileData) {
    localStorage.setItem('profile', JSON.stringify(profile));
  }
}
