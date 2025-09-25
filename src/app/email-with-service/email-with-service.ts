import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Highlight } from '../directives/highlight';
import { EmailService } from '../services/email-service';

@Component({
  selector: 'app-email-with-service',
  standalone: true,
  imports: [CommonModule, FormsModule, Highlight],
  templateUrl: './email-with-service.html',
  styleUrl: './email-with-service.css'
})
export class EmailWithService implements OnInit {
  email: Email = { from: '', to: '', subject: '', body: '' };
  lastSubmittedEmail: Email | null = null;
  sentEmails: Email[] = [];
  @ViewChild('emailForm') emailForm: any;

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    // load existing emails from the service (if any pre-populated)
    this.sentEmails = this.emailService.getEmails();
  }

  sendForm(): void {
    this.lastSubmittedEmail = { ...this.email };
    console.log(this.email);
    window.alert('"The email [' + this.email.subject + '] has been sent to [' + this.email.to + ']"');

    // delegate storage to the service
    this.emailService.addEmail({
      from: this.email.from,
      to: this.email.to,
      subject: this.email.subject,
      body: this.email.body,
    });

    // refresh local list reference (array instance stays same but ensure sync)
    this.sentEmails = this.emailService.getEmails();

    this.clear();
  }

  clear(): void {
    this.email = { from: '', to: '', subject: '', body: '' };
    if (this.emailForm && this.emailForm.resetForm) {
      this.emailForm.resetForm();
    }
  }
}
