import { Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from '../auth/auth.guard';

export const UserRoutes: Routes = [{
  path: '',
  /* canActivate:[AuthGuard], */
  children: [
    {
      path: 'signup',
      component: SignUpComponent
    }, 
    {
      path: 'login', 
      component: SignInComponent
  },
  /* { path : '', redirectTo:'/login', pathMatch : 'full'} */
  ]
}];
