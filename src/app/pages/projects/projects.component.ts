import { AfterViewInit, Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ModalProjectComponent } from 'src/app/components/modalProject/modalProject.component';
import { ProjectTypes } from 'src/app/interface';
import { ModalService } from 'src/app/providers/modal/Modal.service';
import { ModalCloseService } from 'src/app/providers/modal/ModalClose.service';
import { DarkModeService } from 'src/app/services/darkmode/DarkMode.service';
import { ProjectsService } from 'src/app/services/projects/Projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projects: ProjectTypes[] = []; // Initialize as an empty array
  currentCategory: string = 'All';
  selectedProject: ProjectTypes | undefined;
  private destroy$ = new Subject<void>();

  @Output() isLoading: boolean = true;

  constructor(
    private _projectsService: ProjectsService,
    private _modalService: ModalService,
    public darkModeService: DarkModeService,
    private _modalCloseService: ModalCloseService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.fetchProjects();
  }

  ngAfterViewInit() {
    this._modalService.afterClosed().subscribe(() => {
      this._router.navigate(['../'], { relativeTo: this._route });
    });
  }

  private fetchProjects() {
    this._projectsService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching portfolio data:', error);
        this.isLoading = false;
      },
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
    this._modalService.openModal(ModalProjectComponent, {
      data: this.projects.find((project) => project.id === projectId),
    });
    this._modalCloseService.subscribeToModalClose();
  }

  selectProject(selectedProject: ProjectTypes): void {
    this.selectedProject = selectedProject;
    this.openProjectModal(selectedProject.id);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
