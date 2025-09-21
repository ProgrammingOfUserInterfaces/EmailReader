import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Highlight } from '../directives/highlight';

@Component({
  selector: 'app-email-reader-list',
  standalone: true,
  imports: [CommonModule, FormsModule, Highlight],
  templateUrl: './email-reader-list.html',
  styleUrl: './email-reader-list.css',
})
export class EmailReaderListComponent implements OnInit {
  email: Email = {
    from: '',
    to: '',
    subject: '',
    body: '',
  };
  lastSubmittedEmail: Email | null = null;
  sentEmails: Email[] = [];
  @ViewChild('emailForm') emailForm: any;

  constructor() {}

  ngOnInit(): void {}

  sendForm(): void {
    this.lastSubmittedEmail = { ...this.email };
    console.log(this.email);
    window.alert(
      '"The email [' + this.email.subject + '] has been sent to [' + this.email.to + ']"'
    );
    this.sentEmails.push({
      from: this.email.from,
      to: this.email.to,
      subject: this.email.subject,
      body: this.email.body,
    });

    this.clear();
  }

  clear(): void {
    this.email.from = '';
    this.email.to = '';
    this.email.subject = '';
    this.email.body = '';
    if (this.emailForm && this.emailForm.resetForm) {
      this.emailForm.resetForm();
    }
  }
}
