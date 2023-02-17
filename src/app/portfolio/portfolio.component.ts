import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  portfolioData: any;
  categoryFilters: any[] = [
    {
      label: 'All',
      icon: 'fa fa-star',
      selected: true,
    },
    {
      label: 'App',
      icon: 'fa-brands fa-app-store',
      selected: false,
    },
    {
      label: 'Design',
      icon: 'fa-solid fa-pencil',
      selected: false,
    },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/portfolio-data.json').subscribe((data) => {
      this.portfolioData = data;
    });
  }
}
