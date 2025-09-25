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
  imports: [CommonModule, FormsModule, RouterLink, FilterTextPipe, FilterBodyPipe],
  templateUrl: './emails-list.html',
  styleUrl: './emails-list.css'
})
export class EmailsList {

  filterText = '';
  onlyWithBody = false;
  sentEmails: Email[] = [];


  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.sentEmails = this.emailService.getEmails();
  }

}
