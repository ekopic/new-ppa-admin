import { Routes } from '@angular/router';

import { TeamsComponent } from './teams/teams.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { TryoutsComponent } from './tryouts/tryouts.component';

export const ProgramsRoutes: Routes = [
  {
    path: '',
    children: [
      {
      path: 'teams',
      component: TeamsComponent
      }, {
        path: 'clinics',
        component: ClinicsComponent
      }, {
        path: 'trainings',
        component: TrainingsComponent
      }, {
        path: 'tryouts',
        component: TryoutsComponent
      }
    ]
  }
];
