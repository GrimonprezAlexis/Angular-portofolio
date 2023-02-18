import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PortfolioTypes } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor(private _http: HttpClient) {}

  getPortfolio() {
    return this._http.get('assets/portfolio-data.json');
  }
}
