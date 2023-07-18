import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { routes } from '../core.index';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public checkAuth: BehaviorSubject<any> = new BehaviorSubject<any>(
    localStorage.getItem('authenticated') || false
  );

  constructor(private router: Router) {}

  public login(): void {
    this.checkAuth.next('true');
    localStorage.setItem('authenticated', 'true');
    localStorage.setItem('timeOut', Date());
    this.router.navigate([routes.dealsDashboard]);
  }
  public logout(): void {
    this.router.navigate([routes.login]);
    this.checkAuth.next(false);
    localStorage.clear();
    sessionStorage.clear();
  }
}
