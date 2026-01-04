import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<{ accessToken: string }>(`${this.apiUrl}/login`, {
        email,
        password,
      })
      .pipe(tap(res => this.setToken(res.accessToken)));
  }

  register(email: string, displayName: string, password: string) {
    return this.http
      .post<{ accessToken: string }>(`${this.apiUrl}/register`, {
        email,
        displayName,
        password,
      })
      .pipe(tap(res => this.setToken(res.accessToken)));
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  private setToken(token: string) {
    localStorage.setItem('token', token);
  }
}
