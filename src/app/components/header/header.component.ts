import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showMenu: boolean = false;

  // links = [
  //   { label: 'A propos', url: '/about' },
  //   { label: 'Projets', url: '/projets' },
  //   { label: 'Contact', url: '/contact' },
  //   { label: 'CV', url: '/cv' },
  // ];

  constructor() {}
  ngOninit() {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  ngOnDestroy() {}
}
