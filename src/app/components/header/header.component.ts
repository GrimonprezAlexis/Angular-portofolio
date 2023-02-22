import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/services/DarkMode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showMenu: boolean = false;

  constructor(public darkModeService: DarkModeService) {}

  ngOninit() {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  ngOnDestroy() {}
}
