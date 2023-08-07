import { Component, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectModalComponent } from 'src/app/components/projectModal/project-modal.component';
import { ProjectTypes } from 'src/app/interface';
import { DarkModeService } from 'src/app/services/DarkMode.service';
import { ModalService } from 'src/app/services/modal.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: ProjectTypes[] = []; // Initialize as an empty array
  currentCategory: string = 'All';
  selectedProject: ProjectTypes | undefined;

  @Output() isLoading: boolean = true;

  constructor(
    private _projectsService: ProjectsService,
    private _modalService: ModalService,
    public darkModeService: DarkModeService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.fetchProjects();
  }

  private fetchProjects() {
    this._projectsService.getAllProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.handleRouteParams();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching portfolio data:', error);
        this.isLoading = false;
      },
    });
  }

  private navigateToProject(projectId: number): void {
    //this._router.navigate(['/projects', projectId]);
  }

  private handleRouteParams() {
    this._route.params.subscribe((params) => {
      const projectId = Number(params['id']);
      this.openProjectModal(projectId);
    });
  }

  updateCurrentCategory(event: any) {
    this.currentCategory = event;
  }

  getFilteredProjectList() {
    if (!this.currentCategory || this.currentCategory === 'All') {
      return this.projects;
    } else {
      return this.projects.filter((item: { categories: (string | null)[] }) =>
        item.categories.includes(this.currentCategory)
      );
    }
  }

  openProjectModal(projectId: number) {
    const modalRef = this._modalService.openModal(ProjectModalComponent, {
      data: this.projects.find((project) => project.id === projectId),
    });
    console.log(modalRef);
  }

  selectProject(selectedProject: ProjectTypes): void {
    this.selectedProject = selectedProject;
    this.openProjectModal(selectedProject.id);
    this.navigateToProject(selectedProject.id);
  }
}
