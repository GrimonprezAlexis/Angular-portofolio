import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { CategoryFilters, PortfolioTypes } from 'src/app/interface';
import { ModalService } from 'src/app/services/modal.service';
import { ModalEditPortfolioComponent } from 'src/app/components/modal-edit-portfolio/modal-edit-portfolio.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DarkModeService } from 'src/app/services/DarkMode.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  portfolioData: any = [{}];
  currentCategory: string = 'All';
  dialogConfig = new MatDialogConfig();

  constructor(
    private _portfolioService: PortfolioService,
    private _modalService: ModalService,
    public dialog: MatDialog,
    public darkModeService: DarkModeService
  ) {}

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

  newItem: PortfolioTypes | null = null;

  editItem(index: number) {
    this.dialogConfig.data = this.portfolioData[index];

    const modalRef = this.dialog.open(
      ModalEditPortfolioComponent,
      this.dialogConfig
    );

    modalRef.afterClosed().subscribe((result: any) => {
      if (result !== null) {
        this.portfolioData[index] = result;
      }
    });
  }
}
