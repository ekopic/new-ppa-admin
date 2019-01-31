import { Routes } from '@angular/router';
//import { CommunicationHomeComponent } from './communicationHome.component';
import { ComposeComponent } from './compose/compose.component';
import { CommunicationHomeComponent } from './communicationHome/communicationHome.component';
import { SendmailComponent } from './sendmail/sendmail.component';
//import { CommunicationHomeComponent } from './communicationHome.component';

export const CommunicationRoutes: Routes = [
  {
    path: '',
    children: [
      {
      path: 'communicationHome',
      component: CommunicationHomeComponent
      },
      {
        path: 'compose',
        component: ComposeComponent
        },
        {
          path: 'sendmessage',
          component: SendmailComponent
          }
    ]
  }
];
