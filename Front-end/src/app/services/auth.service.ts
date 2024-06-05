import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any = { id: 1 };

  private loginUrl = 'http://localhost:8091/api/users/login';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string }>(this.loginUrl, { username, password }).pipe(
      map(response => {
        localStorage.setItem('authToken', response.token);
        return true;
      }),
      catchError(error => {
        console.error('Login error', error);
        return of(false);
      })
    );
  }
  getCurrentUser() {
    return this.currentUser;
  }
}
