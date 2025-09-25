import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Highlight } from '../directives/highlight';
import { EmailService } from '../services/email-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [CommonModule, FormsModule, Highlight, RouterLink],
  templateUrl: './email-form.html',
  styleUrl: './email-form.css'
})
export class EmailFormComponent implements OnInit {
  email: Email = { from: '', to: '', subject: '', body: '' };
  lastSubmittedEmail: Email | null = null;
  sentEmails: Email[] = [];
  onlyWithBody = false;
  @ViewChild('emailForm') emailForm: any;

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.sentEmails = this.emailService.getEmails();
  }

  sendForm(): void {
    this.lastSubmittedEmail = { ...this.email };
    window.alert('"The email [' + this.email.subject + '] has been sent to [' + this.email.to + ']"');
    this.emailService.addEmail({ ...this.email });
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
