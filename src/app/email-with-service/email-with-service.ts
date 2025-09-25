import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Highlight } from '../directives/highlight';
import { EmailService } from '../services/email-service';
import { FilterTextPipe } from '../pipes/filter-text.pipe';
import { FilterBodyPipe } from '../pipes/filter-body.pipe';

@Component({
  selector: 'app-email-with-service',
  standalone: true,
  imports: [CommonModule, FormsModule, Highlight, FilterTextPipe, FilterBodyPipe],
  templateUrl: './email-with-service.html',
  styleUrl: './email-with-service.css'
})
export class EmailWithService implements OnInit {
  email: Email = { from: '', to: '', subject: '', body: '' };
  lastSubmittedEmail: Email | null = null;
  sentEmails: Email[] = [];
  filterText = '';
  onlyWithBody = false;
  selectedEmail: Email | null = null;
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

    this.emailService.addEmail({ ...this.email });
    this.sentEmails = this.emailService.getEmails();
    this.clear();
  }

  viewEmail(email: Email): void {
    this.selectedEmail = email;
  }

  clearSelected(): void {
    this.selectedEmail = null;
  }

  clear(): void {
    this.email = { from: '', to: '', subject: '', body: '' };
    if (this.emailForm && this.emailForm.resetForm) {
      this.emailForm.resetForm();
    }
  }
}
