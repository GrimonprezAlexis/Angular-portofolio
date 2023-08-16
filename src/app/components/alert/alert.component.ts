import { Component, Input, OnInit } from '@angular/core';
import { Alert } from 'src/app/interface';
import { DarkModeService } from 'src/app/services/darkmode/DarkMode.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input() alert: Alert = { type: '', msg: '' };

  constructor(public darkModeService: DarkModeService) {}

  ngOnInit() {}
}
