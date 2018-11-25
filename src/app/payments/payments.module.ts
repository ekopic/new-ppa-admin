import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatProgressBarModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PaymentsComponent } from './payments.component';
import { PaymentsRoutes } from './payments.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PaymentsRoutes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatMenuModule,
    FlexLayoutModule,
  ],
  declarations: [ PaymentsComponent ]
})

export class PaymentsModule {}
