import { DarkModeService } from './../../services/darkmode/DarkMode.service';
import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
  HostListener,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    public darkModeService: DarkModeService,
    private _router: Router
  ) {}

  menuOpened: boolean = false;

  ngOnInit() {
    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.menuOpened = false; // Fermer le menu lors du changement de page
      });
  }

  isHeaderVisible = true;
  lastScrollTop = 0;
  scrollThreshold = 35; // Adjust this value as needed

  @HostListener('window:scroll', [])
  onScroll(): void {
    const st = document.documentElement.scrollTop;

    if (st > this.lastScrollTop && st > this.scrollThreshold) {
      this.isHeaderVisible = false;
    } else if (st < this.scrollThreshold) {
      this.isHeaderVisible = true;
    }

    this.lastScrollTop = st;
  }

  ngOnDestroy() {}

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }
}
