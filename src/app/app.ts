import { Component, NgModule, signal } from '@angular/core';
import { EmailReaderListComponent } from './email-reader-list/email-reader-list';

@Component({
  selector: 'app-root',
  standalone: true,
  // Highlight directive is used inside EmailReaderListComponent template, so only that component needs to import it.
  imports: [EmailReaderListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
// @NgModule({
//   declarations: [],
//   imports: [EmailReaderBasicComponent, Highlight],
//   providers: [],
//   bootstrap: [App],
//   exports: [],
// })
export class App {
  protected readonly title = signal('email-reader');
}
