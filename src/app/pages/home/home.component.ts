import { Component } from '@angular/core';

interface ColumnItems {
  id: number;
  label: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  columnItems: ColumnItems[] = [
    { id: 1, label: 'A propos' },
    { id: 2, label: 'Projets' },
    { id: 3, label: 'Contact' },
    { id: 4, label: 'CV' },
  ];

  ngOnInit(): void {}

  onMouseEnter(index: number): void {
    const col = document.querySelectorAll('.col')[index];
    col.classList.add('show-image');
  }

  onMouseOut(): void {
    const cols = document.querySelectorAll('.col');
    for (let i = 0; i < cols.length; i++) {
      cols[i].classList.remove('show-image');
    }
  }
}
