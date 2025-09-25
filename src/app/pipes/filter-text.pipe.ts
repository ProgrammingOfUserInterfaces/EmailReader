import { Pipe, PipeTransform } from '@angular/core';
import { Email } from '../interfaces/email';

@Pipe({
  name: 'filterText',
  standalone: true
})
export class FilterTextPipe implements PipeTransform {
  transform(emails: Email[] | null | undefined, text: string | null | undefined): Email[] {
    if (!emails) return [];
    if (!text) return emails;
    const t = text.toLowerCase();
    return emails.filter(e =>
      e.from.toLowerCase().includes(t) ||
      e.to.toLowerCase().includes(t) ||
      e.subject.toLowerCase().includes(t) ||
      (e.body && e.body.toLowerCase().includes(t))
    );
  }
}
