import { Routes } from '@angular/router';
import { EmailWithService } from './email-with-service/email-with-service';
import { EmailViewer } from './email-viewer/email-viewer';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: EmailWithService },
  { path: 'email/:id', component: EmailViewer },
  { path: '**', redirectTo: '' }
];
