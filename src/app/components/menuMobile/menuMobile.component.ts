import { DarkModeService } from 'src/app/services/darkmode/DarkMode.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menuMobile',
  templateUrl: './menuMobile.component.html',
  styleUrls: ['./menuMobile.component.scss'],
})
export class MenuMobileComponent implements OnInit {
  @Input() menuOpened!: boolean;

  constructor(public darkModeService: DarkModeService) {}

  ngOnInit() {}
}
