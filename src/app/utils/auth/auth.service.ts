import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_STORAGE_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor(private router: Router) {
    this.init();
  }

  get loggedIn()  {
    return this.isLoggedIn;
  }

  /**
   * Init isLoggedIn status with existing token
   */
  private init(): void {
    const token = this.loadToken();
    // if token valid
    if(token) {
      this.isLoggedIn = true;
    }
  }

  login(): void {
    this.saveToken();
    this.isLoggedIn = true;
  }

  logout(): void {
    this.removeToken();
    this.isLoggedIn = false;
    this.redirectHome();
  }

  private redirectHome(): void {
    this.router.navigateByUrl('/');
  }

  private saveToken(): void {
    localStorage.setItem(TOKEN_STORAGE_KEY, 'xyz');
  }

  private removeToken(): void {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
  }

  private loadToken(): string | boolean {
    return localStorage.getItem(TOKEN_STORAGE_KEY) || false;
  }
}
