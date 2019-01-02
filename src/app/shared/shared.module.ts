import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
/* import { MatSidenavModule,
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

import { DxPopupModule, DxButtonModule, DxTemplateModule, DxDateBoxModule, DxValidatorModule } from 'devextreme-angular'; */
import { ConfirmPopupComponent, DialogComponent, AddNewEventPopupComponent} from '../shared/dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { SharedExternModule } from '../shared-extern.module';
import { ScheduleComponent } from '../schedule/schedule.component';

@NgModule({
  imports: [
    CommonModule,
    SharedExternModule,
    FormsModule, 
    RouterModule
  ],
  declarations: [ 
    DialogComponent, 
    ConfirmPopupComponent, 
    AddNewEventPopupComponent,
    ScheduleComponent ],

  entryComponents: 
  [ DialogComponent, 
    ConfirmPopupComponent, 
    AddNewEventPopupComponent ],

  exports: [ 
    DialogComponent, 
    ConfirmPopupComponent, 
    AddNewEventPopupComponent,
    ScheduleComponent ]
})
export class SharedModule { }
