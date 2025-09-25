import { Routes } from '@angular/router';
import { EmailFormComponent } from './email-form/email-form';
import { EmailViewer } from './email-viewer/email-viewer';
import { EmailsList } from './emails-list/emails-list';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: EmailsList },
  { path: 'new', component: EmailFormComponent },
  { path: 'email/:id', component: EmailViewer },
  { path: '**', redirectTo: '' }
];
