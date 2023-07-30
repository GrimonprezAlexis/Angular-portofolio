import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from 'src/app/services/DarkMode.service';

interface ColumnItems {
  id: number;
  label: string;
  link: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  columnItems: ColumnItems[] = [
    { id: 1, label: 'A propos', link: 'about' },
    { id: 2, label: 'Projets', link: 'portfolio' },
    { id: 3, label: 'Contact', link: 'contact' },
    { id: 4, label: 'CV', link: '' },
  ];

  ngOnInit(): void {}

  constructor(
    private _router: Router,
    public darkModeService: DarkModeService
  ) {}

  isLoading: boolean = true;

  onMouseEnter(index: number): void {
    const col = document.querySelectorAll('.col')[index];
    col?.classList.add('show-image');
  }

  onMouseOut(): void {
    const cols = document.querySelectorAll('.col');
    for (let i = 0; i < cols.length; i++) {
      cols[i].classList.remove('show-image');
    }
  }

  goToLink(link: string) {
    this._router.navigate([`${link}`]);
  }
}
