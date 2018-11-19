import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatCardModule, MatInputModule, MatCheckboxModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DxDataGridModule, DxButtonModule  } from 'devextreme-angular';

import { UsersComponent } from './users/users.component';
import { UsersRoutes } from './people.routing';
import { PlayersComponent } from './players/players.component';
import { CoachesComponent } from './coaches/coaches.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UsersRoutes),
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    DxDataGridModule,
    DxButtonModule
  ],
  declarations: [
    UsersComponent,
    PlayersComponent,
    CoachesComponent
  ]
})

export class PeopleModule {}
