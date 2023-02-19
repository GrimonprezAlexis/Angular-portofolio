import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  portfolioData: any = [];

  constructor(private _portfolioService: PortfolioService) {}

  ngOnInit() {
    this._portfolioService.getPortfolio().subscribe((data) => {
      this.portfolioData = data;
      console.log(this.portfolioData);
    });
  }
}
