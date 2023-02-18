import { Component } from '@angular/core';

interface PortfolioTypes {
  title: string;
  description: string;
  image: File;
  link: string;
  icons: string[];
  categories: string[];
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  portfolioData: PortfolioTypes[] = [];

  constructor() {}

  ngOnInit() {}

  //getPortfolioData(): PortfolioTypes[] {}
}
