import { Injectable } from '@angular/core';
import { Email } from '../interfaces/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailsList: Email[] = [];

  constructor() {
    // initialize with some example emails
    this.addEmail({
      from: 'john@example.es',
      to: 'user@test.es',
      subject: 'Test Email from John',
      body: 'This is an example email to test the service.'
    });

    this.addEmail({
      from: 'user2@example.es',
      to: 'user3@example.com',
      subject: 'Test Email',
      body: 'Hi! This is the body of the email.'
    });

    this.addEmail({
      from: 'admin@hello.es',
      to: 'test@example.org',
      subject: 'Example Email',
      body: 'Hello, I hope this email finds you well.'
    });
  }

  getEmails(): Email[] {
    return this.emailsList;
  }

  // TODO: should we use an ID instead of index? Maybe a UUID? UUID would be more robust, especially if emails can be deleted.
  getEmail(index: number): Email | null {
    if (index >= 0 && index < this.emailsList.length) {
      return this.emailsList[index];
    }
    return null;
  }

  addEmail(email: Email): void {
    this.emailsList.push(email);
  }

  deleteEmail(index: number): boolean {
    if (index >= 0 && index < this.emailsList.length) {
      this.emailsList.splice(index, 1);
      return true;
    }
    return false;
  }

  // deletes all emails stored in the service
  clearEmails(): void {
    this.emailsList = [];
  }

}
