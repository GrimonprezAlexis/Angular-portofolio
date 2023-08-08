import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  isDarkMode = false;

  constructor() {
    this.updateTheme();
  }

  private updateTheme(): void {
    const hours = new Date().getHours();
    console.log('hours', hours);
    this.isDarkMode = hours >= 6 && hours <= 10; // Dark mode from 6 PM to 6 AM
    console.log('isDarkMode', this.isDarkMode);
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
