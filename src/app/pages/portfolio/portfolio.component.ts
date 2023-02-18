import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { CategoryFilters, PortfolioTypes } from 'src/app/interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  portfolioData: any = [{}];
  currentCategory: string = 'All';

  constructor(private _portfolioService: PortfolioService) {}

  ngOnInit() {
    this._portfolioService.getPortfolio().subscribe((data) => {
      this.portfolioData = data;
      console.log(this.portfolioData);
    });
  }

  categoryFilters: CategoryFilters[] = [
    {
      label: 'All',
      icon: 'fa fa-star',
      category: 'All',
    },
    {
      label: 'CSS',
      icon: 'fa fa-star',
      category: 'CSS',
    },
    {
      label: 'JS',
      icon: 'fa-brands fa-js',
      category: 'JS',
    },
    {
      label: 'React',
      icon: 'fa-brands fa-react',
      category: 'React',
    },
    {
      label: 'Angular',
      icon: 'fa-brands fa-angular',
      category: 'Angular',
    },
    {
      label: 'Sass',
      icon: 'fa-brands fa-sass',
      category: 'Sass',
    },
    {
      label: 'NodeJS',
      icon: 'fa-brands fa-node-js',
      category: 'NodeJS',
    },
  ];

  setCurrentCategory(category: string) {
    this.currentCategory = category;
  }

  getFilteredItemList() {
    if (!this.currentCategory || this.currentCategory === 'All') {
      return this.portfolioData;
    } else {
      return this.portfolioData.filter(
        (item: { categories: (string | null)[] }) =>
          item.categories.includes(this.currentCategory)
      );
    }
  }
}
