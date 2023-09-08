import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(username: string, password: string) {
    // Simulate a server request for authentication
    if (username === 'admin' && password === 'password') {
      this.loggedIn.next(true);
      localStorage.setItem('isLoggedIn', 'true');
    }
  }

  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('isLoggedIn');
  }

  // login(username: string, password: string): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/login`, { username, password });
  // }

  // logout(): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/logout`, {});
  // }
}
