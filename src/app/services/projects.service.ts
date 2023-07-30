import { Injectable } from '@angular/core';
import { ProjectsTypes } from '../interface';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private _http: HttpClient) {}

  getAllProjects() {
    return this._http.get<ProjectsTypes[]>('assets/portfolio-data.json').pipe(
      catchError((error) => {
        console.error('Error fetching portfolio data:', error);
        return of([]); // Return an empty array in case of error
      })
    );
  }
}
