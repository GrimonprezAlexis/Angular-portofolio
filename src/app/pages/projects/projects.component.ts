import { Component, Output } from '@angular/core';
import { CategoryFilters, ProjectsTypes } from 'src/app/interface';
import { DarkModeService } from 'src/app/services/DarkMode.service';
import { ModalService } from 'src/app/services/modal.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projectsData: ProjectsTypes[] = []; // Initialize as an empty array
  currentCategory: string = 'All';
  @Output() isLoading: boolean = true;

  constructor(
    private _projectsService: ProjectsService,
    private _modalService: ModalService,
    public darkModeService: DarkModeService
  ) {}

  ngOnInit() {
    this._projectsService.getAllProjects().subscribe({
      next: (data) => {
        this.projectsData = data;
        this.isLoading = false; // Set isLoading to false when the data is loaded successfully
      },
      error: (error) => {
        console.error('Error fetching portfolio data:', error);
        this.isLoading = false; // Set isLoading to false even if there's an error (to hide the loader)
      },
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
      return this.projectsData;
    } else {
      return this.projectsData.filter(
        (item: { categories: (string | null)[] }) =>
          item.categories.includes(this.currentCategory)
      );
    }
  }

  newItem: ProjectsTypes | null = null;

  selectItem(index: number) {
    console.log('Selected Item:', index);
  }

  editItem(index: number) {
    //this.dialogConfig.data = this.projectsData[index];
    // const modalRef = this.dialog.open(
    //   ModalEditProjectsComponent,
    //   this.dialogConfig
    // );
    // modalRef.afterClosed().subscribe((result: any) => {
    //   if (result !== null) {
    //     this.projectsData[index] = result;
    //   }
    // });
  }
}
