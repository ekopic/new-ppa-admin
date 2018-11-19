import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatProgressBarModule, MatMenuModule } from '@angular/material';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { UserRoutes } from './user.routing';
import { UserComponent } from './user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    FormsModule
  ],
  declarations: [ UserComponent, SignInComponent, SignUpComponent ]
})

export class UserModule {}
