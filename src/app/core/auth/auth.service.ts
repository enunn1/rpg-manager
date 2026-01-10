import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, switchMap} from 'rxjs';

export interface AuthUser {
  id: string;
  email: string;
  displayName: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';

  private userSubject = new BehaviorSubject<AuthUser | null>(null);
  user$ = this.userSubject.asObservable();

  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<{ accessToken: string }>(`${this.apiUrl}/login`, {
        email,
        password,
      })
      .pipe(
        tap(res => this.setToken(res.accessToken)),
        switchMap(() => this.loadCurrentUser())
      );
  }

  register(email: string, displayName: string, password: string) {
    return this.http
      .post<{ accessToken: string }>(`${this.apiUrl}/register`, {
        email,
        displayName,
        password,
      })
      .pipe(
        tap(res => this.setToken(res.accessToken)),
        switchMap(() => this.loadCurrentUser())
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.userSubject.next(null);
    this.isLoggedInSubject.next(false);
  }

  loadCurrentUser(): Observable<AuthUser> {
    return this.http.get<AuthUser>(`${this.apiUrl}/me`).pipe(
      tap(user => {
        this.userSubject.next(user);
        this.isLoggedInSubject.next(true);
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  private setToken(token: string) {
    localStorage.setItem('token', token);
    this.isLoggedInSubject.next(true);
  }
}
