import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { ApiResponse, ProjectTypes } from '../../interface'; // Update the interface name

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private _http: HttpClient) {}

  private apiBaseUrl = 'http://localhost:3000/v1';

  getAllProjects(): Observable<ProjectTypes[]> {
    return this._http
      .get<{ data: ProjectTypes[] }>(`${this.apiBaseUrl}/projects`)
      .pipe(
        map((response) => response.data),
        catchError((error) => {
          console.error('Error fetching projects:', error);
          return throwError(
            () => new Error('Something went wrong while fetching projects.')
          );
        })
      );
  }

  /**
   * 
   * @param id 
   * @returns 
    data:  {
      _id: '64da845b16da2fded75d22ca', 
      title: 'Réservia', 
      subtitle: 'Outil de planification de vacances',
      job: 'Transformer une maquette en site web',
      …
    }
    message: "Success"
    success: true
   */
  getProjectById(id: string): Observable<ProjectTypes> {
    return this._http
      .get<ApiResponse>(`${this.apiBaseUrl}/projects/${id}`)
      .pipe(
        map((response) => response.data),
        catchError((error) => {
          console.error('Error fetching project by ID:', error);
          return throwError(
            () => new Error('Something went wrong while fetching the project.')
          );
        })
      );
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
