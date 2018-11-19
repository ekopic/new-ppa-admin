import { Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { PlayersComponent } from './players/players.component';
import { CoachesComponent } from './coaches/coaches.component';

export const UsersRoutes: Routes = [
  {
    path: '',
    children: [
      {
      path: 'users',
      component: UsersComponent
      }, {
        path: 'players',
        component: PlayersComponent
      }, {
        path: 'coaches',
        component: CoachesComponent
      }
    ]
  }
];
