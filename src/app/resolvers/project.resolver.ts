import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectTypes } from '../interface';
import { ProjectsService } from '../services/projects/Projects.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectResolver implements Resolve<ProjectTypes> {
  constructor(private projectService: ProjectsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ProjectTypes | any> {
    const projectId = String(route.paramMap.get('id')); // Convert the string to a number
    return this.projectService.getProjectById(projectId);
  }
}
