import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })
export class ProfileService {
  private profileData: any = {};

  setProfileData(data: any) {
    this.profileData = { ...data };
  }

  getProfileData() {
    return this.profileData;
  }
}