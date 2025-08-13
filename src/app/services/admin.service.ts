import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
   setMainColor(color: string) {
    document.documentElement.style.setProperty('--main-color', color);
    localStorage.setItem('mainColor', color);
  }

  loadSavedColor() {
    const color = localStorage.getItem('mainColor');
    if (color) {
      document.documentElement.style.setProperty('--main-color', color);
    }
  }
}
