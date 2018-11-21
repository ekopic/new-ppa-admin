import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSidenavModule,
  MatCardModule,
  MatMenuModule,
  MatCheckboxModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule,
  MatListModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatDialogModule,
  MatProgressBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ScheduleComponent } from './schedule.component';
import { ScheduleRoutes } from './schedule.routing';
import { CalendarModule, CalendarDateFormatter, DateAdapter } from 'angular-calendar';
//import { ScheduleComponent } from './schedule/schedule.component';
import { CalendarDialogComponent } from './schedule.component';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ScheduleRoutes),
    MatSidenavModule,
  MatCardModule,
  MatMenuModule,
  MatCheckboxModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule,
  MatListModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatDialogModule,
  MatProgressBarModule,
    FlexLayoutModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
  ],
  declarations: [ ScheduleComponent, CalendarDialogComponent ],
  entryComponents: [ CalendarDialogComponent ]
})

export class ScheduleModule {}
