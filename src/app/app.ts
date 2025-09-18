import { Component, NgModule, signal } from '@angular/core';
import { EmailReaderBasicComponent } from './email-reader-basic/email-reader-basic';

@Component({
  selector: 'app-root',
  standalone: true,
  // Highlight directive is used inside EmailReaderBasicComponent template, so only that component needs to import it.
  imports: [EmailReaderBasicComponent],
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
