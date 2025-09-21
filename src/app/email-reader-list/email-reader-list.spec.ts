import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailReaderListComponent } from './email-reader-list';

describe('EmailReaderList', () => {
  let component: EmailReaderListComponent;
  let fixture: ComponentFixture<EmailReaderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailReaderListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmailReaderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
