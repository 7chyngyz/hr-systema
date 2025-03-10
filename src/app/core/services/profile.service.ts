import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as flatted from 'flatted';


@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profileData: BehaviorSubject<any>;

  constructor() {
    // Понимание, что localStorage доступен только в браузере
    const savedProfile = typeof window !== 'undefined' && window.localStorage 
                          ? localStorage.getItem('profileData')
                          : null;
    this.profileData = new BehaviorSubject<any>(savedProfile ? JSON.parse(savedProfile) : {});
  }


setProfileData(profile: any) {
  try {
    const profileCopy = flatted.stringify(profile);  
    localStorage.setItem('profile', profileCopy);
  } catch (e) {
    console.error("Error saving profile data:", e);
  }
}

  

  getProfileData() {
    return this.profileData.asObservable();
  }

  deleteProfileData() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('profileData');
    }
    this.profileData.next({}); 
    console.log('Profile deleted');
  }
}

