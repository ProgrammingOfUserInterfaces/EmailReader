import { Pipe, PipeTransform } from '@angular/core';
import { Email } from '../interfaces/email';

@Pipe({
  name: 'filterBody',
  standalone: true
})
export class FilterBodyPipe implements PipeTransform {
  transform(emails: Email[] | null | undefined, requireBody: boolean): Email[] {
    if (!emails) return [];
    if (!requireBody) return emails;
    return emails.filter(e => !!(e.body && e.body.trim().length));
  }
}
