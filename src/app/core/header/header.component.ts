import { Component, EventEmitter, Output } from '@angular/core';

import * as screenfull from 'screenfull';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleNotificationSidenav = new EventEmitter<void>();

  constructor(private router: Router,) {
  }

  fullScreenToggle(): void {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }
  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/user/login']);
  }
}
