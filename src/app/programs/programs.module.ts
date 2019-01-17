import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatCardModule, MatInputModule, MatCheckboxModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TeamsComponent } from './teams/teams.component';
import { ProgramsRoutes } from './programs.routing';
import { ClinicsComponent } from './clinics/clinics.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { TryoutsComponent } from './tryouts/tryouts.component';
import { AddNewTeamComponent } from './teams/addNewTeam.component';
import { DxSelectBoxModule, DxDataGridModule, DxButtonModule } from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProgramsRoutes),
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    DxSelectBoxModule,
    DxDataGridModule,
    DxButtonModule
  ],
  declarations: [
    TeamsComponent,
    ClinicsComponent,
    TrainingsComponent,
    TryoutsComponent,
    AddNewTeamComponent
  ]
})

export class ProgramsModule {}
