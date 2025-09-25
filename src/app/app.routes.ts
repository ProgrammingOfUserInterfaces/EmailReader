import { Routes } from '@angular/router';
import { EmailWithService } from './email-with-service/email-with-service';
import { EmailViewer } from './email-viewer/email-viewer';
import { EmailsList } from './emails-list/emails-list';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: EmailsList },
  { path: 'new', component: EmailWithService },
  { path: 'email/:id', component: EmailViewer },
  { path: '**', redirectTo: '' }
];
