import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';

import { AdminLayoutComponent, AuthLayoutComponent } from './core';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    }]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [{
      path: 'user',
      loadChildren: './user/user.module#UserModule'
    }]
  },
   {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'session',
    loadChildren: './session/session.module#SessionModule'
  }]
}, 
{
  path: '',
  //loadChildren: './apps/apps.module#AppsModule'
  component: AdminLayoutComponent,
  children: [{
    path: 'people',
    loadChildren: './people/people.module#PeopleModule'
  }]
},
{
  path: '',
  //loadChildren: './apps/apps.module#AppsModule'
  component: AdminLayoutComponent,
  children: [{
    path: 'programs',
    loadChildren: './programs/programs.module#ProgramsModule'
  }]
},
{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'schedule',
    loadChildren: './schedule/schedule.module#ScheduleModule'
  }]
},
{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'payments',
    loadChildren: './payments/payments.module#PaymentsModule'
  }]
},
{
  path: '**',
  redirectTo: 'session/404'
}];
