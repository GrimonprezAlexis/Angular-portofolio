import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import {
  ApiResponse,
  ProjectTypes,
  TechnologyWithIcons,
} from '../../interface'; // Update the interface name

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private _http: HttpClient) {}

  private apiBaseUrl = 'https://nodejs-portfolio-alexgrzdev.vercel.app/v1';

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

  getTechnologiesList(projects: ProjectTypes[]): string[] {
    const allowedTechnologies: string[] = [];

    const technologiesList: string[] = [];
    projects.forEach((project: ProjectTypes) => {
      project.technologies.forEach((tech: string) => {
        if (allowedTechnologies.includes(tech)) {
          technologiesList.push(tech);
        }
      });
    });

    return Array.from(new Set(technologiesList)); // Remove duplicates
  }

  getTechnologiesWithIcons(technologiesList: string[]): TechnologyWithIcons[] {
    const technologyIcons: Record<string, string> = {
      HTML: 'fa-brands fa-html5',
      CSS: 'fa-brands fa-css3-alt',
      Github: 'fa-brands fa-github',
      SASS: 'fa-brands fa-sass',
      Javascript: 'fa-brands fa-js',
      NodeJS: 'fa-brands fa-node-js',
      React: 'fa-brands fa-react',
      Figma: 'fa-brands fa-figma',
      Recharts: 'fa-brands fa-chart-line',
      Redux: 'fa-brands fa-redux',
      MongoDB: 'fa-brands fa-mdb',
      API: 'fa-brands fa-api',
      AdobeXD: 'fa-brands fa-adobe',
      Prestashop: 'fa-brands fa-prestashop',
      Excel: 'fa-brands fa-excel',
      Filezilla: 'fa-brands fa-file-archive',
      Angular: 'fa-brands fa-angular',
      Nodejs: 'fa-brands fa-node-js',
      RxJS: 'fa-brands fa-rxjs',
      Typescript: 'fa-brands fa-typescript',
      AngularJS: 'fa-brands fa-angular',
      Microservice: 'fa-solid fa-cogs',
    };

    return technologiesList.map((tech) => {
      const icon = technologyIcons[tech];

      return {
        technologie: tech,
        icon: icon,
      };
    });
  }

  getLocalProjects(): Observable<ProjectTypes[]> {
    return this._http.get<ProjectTypes[]>('../../../assets/db_local.json').pipe(
      catchError((error) => {
        console.error('Error fetching portfolio data:', error);
        return of([]); // Return an empty array in case of error
      })
    );
  }
}
