import { Component, NgModule, signal } from '@angular/core';
import { EmailReaderListComponent } from './email-reader-list/email-reader-list';

// we discovered that standalone is now the default when creating new Angular applications using the latest versions of the CLI.
// therefore, there is no need to use the @NgModule decorator in this file anymore.
// modules are still supported, but not recommended by the Angular team, especially for small projects.
// More information here: https://stackoverflow.com/a/77457122
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmailReaderListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('email-reader');
}
