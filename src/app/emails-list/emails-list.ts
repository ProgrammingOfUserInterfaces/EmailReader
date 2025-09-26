import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EmailService } from '../services/email-service';
import { FilterTextPipe } from '../pipes/filter-text.pipe';
import { FilterBodyPipe } from '../pipes/filter-body.pipe';

@Component({
  selector: 'app-emails-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, FilterTextPipe, FilterBodyPipe],
  templateUrl: './emails-list.html',
  styleUrl: './emails-list.css',
})
export class EmailsList {
  confirmDelete(index: number): void {
    if (window.confirm('Are you sure you want to delete this email?')) {
      this.deleteEmail(index);
    }
  }

  filterText = '';
  onlyWithBody = false;
  sentEmails: Email[] = [];

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.sentEmails = this.emailService.getEmails();
  }

  deleteEmail(index: number): void {
    const ok = this.emailService.deleteEmail(index);
    if (ok) {
      this.refresh();
    }
  }
}
