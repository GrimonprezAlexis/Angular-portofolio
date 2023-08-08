import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProjectTypes, ProjectsDetails } from '../../interface'; // Update the interface name

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private _http: HttpClient) {}

  getAllProjects() {
    return this._http.get<ProjectTypes[]>('assets/portfolio-data.json').pipe(
      catchError((error) => {
        console.error('Error fetching portfolio data:', error);
        return of([]); // Return an empty array in case of error
      })
    );
  }

  getProjectsDetails() {
    return this._http
      .get<ProjectsDetails[]>('assets/projects-details.json')
      .pipe(
        catchError((error) => {
          console.error('Error fetching portfolio data:', error);
          return of([]); // Return an empty array in case of error
        })
      );
  }

  getProjectById(id: number) {
    return this.getAllProjects().pipe(
      map((projects) => projects.find((project) => project.id === id))
    );
  }

  //Soon
  // getProjectById(id: number) {
  //   return this.getProjectsDetails().pipe(
  //     map((projects) => projects.find((project) => project.id === id))
  //   );
  // }
}
