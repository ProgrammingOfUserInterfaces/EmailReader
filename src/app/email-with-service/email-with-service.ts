import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Highlight } from '../directives/highlight';
import { EmailService } from '../services/email-service';
import { FilterTextPipe } from '../pipes/filter-text.pipe';
import { FilterBodyPipe } from '../pipes/filter-body.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-email-with-service',
  standalone: true,
  imports: [CommonModule, FormsModule, Highlight, FilterTextPipe, FilterBodyPipe, RouterLink],
  templateUrl: './email-with-service.html',
  styleUrl: './email-with-service.css'
})
export class EmailWithService implements OnInit {
  email: Email = { from: '', to: '', subject: '', body: '' };
  lastSubmittedEmail: Email | null = null;
  sentEmails: Email[] = [];
  filterText = '';
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
