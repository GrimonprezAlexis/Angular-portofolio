import { DarkModeService } from './../../services/DarkMode.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-darkMode',
  templateUrl: './darkMode.component.html',
  styleUrls: ['./darkMode.component.scss'],
})
export class DarkModeComponent {
  constructor(public darkModeService: DarkModeService) {}

  ngOninit() {}

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  ngOnDestroy() {}
}
