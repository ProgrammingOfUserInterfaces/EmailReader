import { Component, NgModule, signal } from '@angular/core';
import { EmailReaderBasicComponent } from './email-reader-basic/email-reader-basic';
import { Highlight } from './directives/highlight';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmailReaderBasicComponent, Highlight],
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
