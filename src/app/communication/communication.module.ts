import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatCardModule, MatInputModule, MatCheckboxModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DxSelectBoxModule, DxDataGridModule, DxButtonModule } from 'devextreme-angular';
import { QuillModule } from 'ngx-quill'
import { CommunicationRoutes } from './communication.routing';
//import { CommunicationComponent } from './communication.component';
import { ComposeComponent } from './compose/compose.component';
import { CommunicationHomeComponent } from './communicationHome/communicationHome.component';
import { SendmailComponent } from './sendmail/sendmail.component';
//import { CommunicationHomeComponent } from './communicationHome.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CommunicationRoutes),
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
    DxButtonModule,
    QuillModule,
    MatSnackBarModule
  ],
  declarations: [
    CommunicationHomeComponent,
    ComposeComponent,
    SendmailComponent
  ]
})

export class CommunicationModule {}
