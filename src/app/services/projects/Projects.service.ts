import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ProjectTypes } from '../../interface'; // Update the interface name

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private _http: HttpClient) {}

  private apiBaseUrl = 'http://localhost:3000/api';

  getProjects(): Observable<ProjectTypes[]> {
    return this._http.get<ProjectTypes[]>(`${this.apiBaseUrl}/projects`);
  }

  getProjectById(id: string): Observable<ProjectTypes> {
    return this._http.get<ProjectTypes>(`${this.apiBaseUrl}/projects/${id}`);
  }

  createProject(project: ProjectTypes): Observable<ProjectTypes> {
    return this._http.post<ProjectTypes>(
      `${this.apiBaseUrl}/projects`,
      project
    );
  }

  updateProject(id: string, project: ProjectTypes): Observable<ProjectTypes> {
    return this._http.put<ProjectTypes>(
      `${this.apiBaseUrl}/projects/${id}`,
      project
    );
  }

  deleteProject(id: string): Observable<any> {
    return this._http.delete<any>(`${this.apiBaseUrl}/projects/${id}`);
  }
}
