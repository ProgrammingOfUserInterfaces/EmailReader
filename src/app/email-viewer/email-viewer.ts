import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmailService } from '../services/email-service';
import { Email } from '../interfaces/email';
import { Location } from '@angular/common';

@Component({
  selector: 'app-email-viewer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './email-viewer.html',
  styleUrl: './email-viewer.css'
})
export class EmailViewer implements OnInit {


  private route = inject(ActivatedRoute);
  private emailService = inject(EmailService);
  private location = inject(Location);
  selectedEmail: Email | null = null;
  id: number | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const raw = params.get('id');
      this.id = raw !== null ? +raw : null;
      if (this.id !== null) {
        this.selectedEmail = this.emailService.getEmail(this.id) as Email | null;
      }
    });
  }



  goBack(): void {
    this.location.back();
  }
}
