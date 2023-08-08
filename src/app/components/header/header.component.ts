import { DarkModeService } from './../../services/darkmode/DarkMode.service';
import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
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

  ngOnDestroy() {}

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }
}
