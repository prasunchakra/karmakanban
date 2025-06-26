import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProfileData, ProfileSummary  } from '../types/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  /**
   * Fetch profile data for a specific username
   * @param username - The username to fetch profile
   * @returns Observable of ProfileData or null if not found
   */
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

  /**
   * Get all profile usernames
   * @returns Observable of string array containing available usernames
   */
  getAllProfiles(): Observable<string[]> {
    return this.http.get<any>('/data/profile.json').pipe(
      map(data => {
        if (data) {
          return Object.keys(data);
        }
        return [];
      }),
      catchError(error => {
        console.error('Error fetching available profiles:', error);
        return of([]);
      })
    );
  }

  /**
   * Get public profile summaries for portfolio listing
   * @returns Observable of ProfileSummary array containing public profiles
   */
  getPublicProfiles(): Observable<ProfileSummary[]> {
    return this.http.get<any>('/data/profile.json').pipe(
      map(data => {
        if (data) {
          const publicProfiles: ProfileSummary[] = [];
          Object.keys(data).forEach(username => {
            const profile = data[username];
            if (profile.isPublic) {
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
            }
          });
          
          return publicProfiles;
        }
        return [];
      }),
      catchError(error => {
        console.error('Error fetching public profiles:', error);
        return of([]);
      })
    );
  }

  /**
   * Get all profile summaries (public and private) for admin purposes
   * @returns Observable of ProfileSummary array containing all profiles
   */
  getAllProfileSummaries(): Observable<ProfileSummary[]> {
    return this.http.get<any>('/data/profile.json').pipe(
      map(data => {
        if (data) {
          const allProfiles: ProfileSummary[] = [];
          
          Object.keys(data).forEach(username => {
            const profile = data[username];
            allProfiles.push({
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
          
          return allProfiles;
        }
        return [];
      }),
      catchError(error => {
        console.error('Error fetching all profile summaries:', error);
        return of([]);
      })
    );
  }
} 