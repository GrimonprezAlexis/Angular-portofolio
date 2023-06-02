import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  isDarkMode = true;

  constructor() {
    this.updateTheme();
  }

  private updateTheme(): void {
    const hours = new Date().getHours();
    this.isDarkMode = hours >= 17 || hours <= 5; // Dark mode from 6 PM to 6 AM
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const icon = document.querySelector('.switch .slider i');
    if (icon) {
      if (this.isDarkMode) {
        //icon.classList.add('fa-moon');
      } else {
        //icon.classList.add('fa-sun');
      }
    }
  }
}
