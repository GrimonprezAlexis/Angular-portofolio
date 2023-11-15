import { AfterViewInit, Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ModalProjectComponent } from 'src/app/components/modalProject/modalProject.component';
import { Alert, ProjectTypes, TechnologyWithIcons } from 'src/app/interface';
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
  public modal$ = this._modalService.modal$;

  projects: ProjectTypes[] = []; // Initialize as an empty array
  currentTechno: string = 'All';

  selectedProject: ProjectTypes | undefined;
  private destroy$ = new Subject<void>();
  technologiesWithIcons: TechnologyWithIcons[] = [];

  alert: Alert = { type: '', msg: '' };
  hasError: boolean = false;

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

  ngAfterViewInit() {}

  private fetchProjects() {
    this._projectsService.getAllProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.updateTechnoWithIcons(this.projects);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching portfolio data:', error);
        this.isLoading = false;
        this.hasError = true;
        this.alert = {
          type: 'error',
          msg: 'Erreur lors de la récupération des projets',
        };
      },
    });
  }

  private updateTechnoWithIcons(projects: ProjectTypes[]): void {
    const technologiesList =
      this._projectsService.getTechnologiesList(projects);
    this.technologiesWithIcons =
      this._projectsService.getTechnologiesWithIcons(technologiesList);
    this.addDefaultTechnology();
  }

  private addDefaultTechnology(): void {
    this.technologiesWithIcons.unshift({
      icon: 'fa fa-star',
      technologie: this.currentTechno,
    });
  }

  updateCurrentTechno(event: any) {
    this.currentTechno = event;
  }

  getProjectsByTechnology(): ProjectTypes[] {
    if (!this.currentTechno || this.currentTechno === 'All') {
      return this.projects;
    }
    return this.projects.filter((project: ProjectTypes) =>
      project.technologies.includes(this.currentTechno)
    );
  }

  openProjectModal(project: ProjectTypes) {
    const modalKey = `Project-${project.title}`;
    this._modalService.openModal(
      modalKey,
      ModalProjectComponent,
      project.title,
      { project }
    );
    this._modalService.afterClosed().subscribe((data: any) => {});
  }

  goToProjectUrl(url: string) {
    window.open(url, '_blank');
  }

  getImageFromAssets(project: ProjectTypes) {
    return 'https://camo.githubusercontent.com/390a8ba597c793572851c06f17f78df3787b60d42023bd994c67e89ee20edd3b/68747470733a2f2f757365722e6f632d7374617469632e636f6d2f75706c6f61642f323032302f30382f32342f313539383236323835373830345f4d6171756574746525323072657365727669612d6d696e2e706e67';
    const imagePath = `../../../assets/img/${project.imageName}`;
    console.log(imagePath);
    return imagePath;
    //return require(`../../../${imagePath}`);
  }

  getProjectFromLocal() {
    this.isLoading = true;
    this._projectsService.getLocalProjects().subscribe({
      next: (data) => {
        this.projects = data;
        localStorage.setItem('projects', JSON.stringify(data));
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching portfolio data:', error);
        this.isLoading = false;
        this.hasError = true;
        this.alert = {
          type: 'error',
          msg: 'Error - fetching portfolio data...',
        };
      },
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
