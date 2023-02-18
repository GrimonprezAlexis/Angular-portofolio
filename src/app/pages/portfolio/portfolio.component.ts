import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface CategoryFilters {
  label: string;
  icon: string;
  selected: boolean;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  portfolioData: any;
  currentCategory: string = 'All';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/portfolio-data.json').subscribe((data) => {
      this.portfolioData = data;
    });
  }

  categoryFilters: CategoryFilters[] = [
    {
      label: 'All',
      icon: 'fa fa-star',
      selected: this.currentCategory === 'All',
    },
    {
      label: 'CSS',
      icon: 'fa fa-star',
      selected: this.currentCategory === 'CSS',
    },
    {
      label: 'JS',
      icon: 'fa-brands fa-js',
      selected: this.currentCategory === 'JS',
    },
    {
      label: 'React',
      icon: 'fa-brands fa-react',
      selected: this.currentCategory === 'React',
    },
    {
      label: 'Angular',
      icon: 'fa-brands fa-angular',
      selected: this.currentCategory === 'Angular',
    },
    {
      label: 'Sass',
      icon: 'fa-brands fa-sass',
      selected: this.currentCategory === 'Sass',
    },
    {
      label: 'NodeJS',
      icon: 'fa-brands fa-node-js',
      selected: this.currentCategory === 'NodeJS',
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
