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
import { DxPopupModule, DxButtonModule, DxTemplateModule, DxDateBoxModule, DxValidatorModule } from 'devextreme-angular';
//import { SharedModule } from '../shared/shared.module';
import { SharedExternModule } from '../shared-extern.module';
import { DialogComponent, ConfirmPopupComponent, AddNewEventPopupComponent } from '../shared/dialog/dialog.component';

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
    DxPopupModule,
    DxButtonModule,
    DxTemplateModule,
    DxDateBoxModule,
    DxValidatorModule,
    //SharedModule,
    SharedExternModule
  ],

  declarations: [ ScheduleComponent, CalendarDialogComponent,
    DialogComponent, 
    ConfirmPopupComponent, 
    AddNewEventPopupComponent ],

  entryComponents: [ 
    CalendarDialogComponent,
    DialogComponent, 
    ConfirmPopupComponent, 
    AddNewEventPopupComponent  ],

  exports: [ 
    DialogComponent, 
    ConfirmPopupComponent, 
    AddNewEventPopupComponent ]
})

export class ScheduleModule {}
